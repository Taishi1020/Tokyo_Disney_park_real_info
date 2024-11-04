import React from 'react'
import styles from './DisneyDashBoard.module.scss'

const DisneyDashBoard = () => {

  return (
    <div className={styles.container}>

    {/*  ヘッダーセクション*/}
      <header className={styles.header}>
        <div className={styles.log}>
          <h1> Disney Resort Info</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Resort</a></li>
            <li><a href="#">Attraction</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </header>

    {/*  メインセクション*/}
      <main className={styles.main}>
        <section className={styles.parkInfo}>
          <div className={styles.infoCard}>
            <h3>パーク営業時間</h3>
            <p>8:00 - 22:00</p>
          </div>
          <div className={styles.infoCard}>
            <h3>現在の天気</h3>
            <p>晴れ 24°</p>
          </div>
          <div className={styles.infoCard}>
            <h3>混雑状況</h3>
            <p>8:00 - 22:00</p>
          </div>
        </section>

      {/* アトラクション待ち位時間*/}
        <section className={styles.waitTime}>
          <h2>アトラクション待ち時間</h2>
          <div className={styles.waitTimeCard}>
            <h3>スプラッシュマウンテン</h3>
            <p>30分</p>
          </div>
          <div className={styles.waitTimeCard}>
            <h3>ビッグサンダーマウンテン</h3>
            <p>20分</p>
          </div>
          <div className={styles.waitTimeCard}>
            <h3>スペースマウンテン</h3>
            <p>40分</p>
          </div>
        </section>

      {/*  レストラン情報*/}
        <section className={styles.restaurantInfo}>
          <h2>レストラン情報</h2>
          <div className={styles.restaurantCard}>
            <h3>クリスタルパレス</h3>
            <p>和食・洋食</p>
          </div>
          <div className={styles.restaurantCard}>
            <h3>クイーン・オブ・ハートズ・バンケットホール</h3>
            <p>洋食</p>
          </div>
          <div className={styles.restaurantCard}>
            <h3>プラザ・パビリオン・レストラン</h3>
            <p>洋食</p>
          </div>
        </section>

      {/*  ショップ情報*/}
        <section className={styles.shopInfo}>
          <h2>ショップ情報</h2>
          <div className={styles.shopCard}>
            <h3>エンポーリアム</h3>
            <p>雑貨</p>
          </div>
          <div className={styles.shopCard}>
            <h3>クリスタルアーツ</h3>
            <p>雑貨</p>
          </div>
          <div className={styles.shopCard}>
            <h3>ミッキースタイル</h3>
            <p>雑貨</p>
          </div>
        </section>

      </main>
      {/*  フッターセクション*/}
      <footer className={styles.footer}>
        <p>© 2024 Disney. All Rights Reserved.</p>
      </footer>
    </div>

  )
}

export default DisneyDashBoard
