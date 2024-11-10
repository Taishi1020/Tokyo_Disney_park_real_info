import { Facility, ParkResponse } from '@/types/disney';
import { DISNEY_URLS } from '@/lib/utils/constants';
import { JSDOM } from 'jsdom';

export async function fetchParkData(park: 'land' | 'sea'): Promise<ParkResponse | undefined> {
  try {
    const parkUrl = park === 'land' ? DISNEY_URLS.TDL : DISNEY_URLS.TDS;
    const response = await fetch(parkUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DisneyParkBot/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch park data${response.statusText}`);
    }

    const html = await response.text();
    const facilities = await parseFacilityData(html);

    console.log(response);
    console.log(facilities);

    return {
      type: `park-${park}`,
      facilities,
    };
  } catch (error) {
    console.error(error);
    return {
      type: `park-${park}`,
      facilities: [],
    };
  }
}

//　施設情報
async function parseFacilityData(html: string): Promise<Facility[]> {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const facilities: Facility[] = [];

  //アトラクションリストの要素を取得
  const attractionList = document.querySelectorAll('.attraction-list .item');

  attractionList.forEach((element) => {
    const nameElement = element.querySelector('.name');
    const waiTimeElement = element.querySelector('.wait-time');
    const statusElement = element.querySelector('.status');
    const areaElement = element.querySelector('.area');

    const facility: Facility = {
      name: nameElement?.textContent?.trim() || '',
      type: 'standby',
      standby_time: parseWaitTime(waiTimeElement?.textContent || ''),
      status: statusElement?.textContent?.trim() || '',
      is_open: !element.classList.contains('closed'),
      area: areaElement?.textContent?.trim() || '',
    };
    facilities.push(facility);
  });

  return facilities;
}

// ユーティリティ関数
function parseWaitTime(waitTimeText: string): number {
  const numbers = waitTimeText.match(/\d+/);
  return numbers ? parseInt(numbers[0]) : 0;
}
