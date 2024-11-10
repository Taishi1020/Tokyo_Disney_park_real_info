
//　施設情報
export interface Facility {
  name: string;
  type: 'standby' | 'fastpass' | 'guide' | 'show';
  standby_time?: number;
  status: string
  is_open: boolean;
  area: string;
}

// パーク情報のresponse情報
export interface ParkResponse {
  type: string
  facilities: Facility[];
}
