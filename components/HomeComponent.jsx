import React from 'react'
import styles from './styles/homeComponent.module.scss'
import TopBrand from './subcomponents/TopBrand';
import Image from 'next/image'
import m6 from '../images/homepage/lt3.jpg'
import m7 from '../images/homepage/lt4.jpg'
import Link from 'next/link';


function HomeComponent() {
  let title = "Top Brands"
  let arr = ["Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae","Apple", "Samsung", "Oppo", "Blackberry", ];

  return (
    <div className={styles.container}>
      <div className={styles.container__componentHeadings}>
        <div className={styles.container__componentHeadings__heading1}><Link href="/News"> Latest News </Link></div>
        <div className={styles.container__componentHeadings__heading2}><Link href="/News"> View All </Link></div>
      </div>
      <div className={styles.container__component}>
        <div className={styles.container__component__left}>
          <div className={styles.container__component__left__bigcontainer}>
            <Image   src={m6}></Image>
          </div>
          <div className={styles.container__component__left__smallcontainer}>
            <div className={styles.container__component__left__smallcontainer__upper}>
              <Image src={m7}></Image>
            </div>
            <div className={styles.container__component__left__smallcontainer__lower}>
              <Image  src={m7}></Image>
            </div>
          </div>
        </div>
        <div className={styles.container__component__right}>
          <TopBrand title={title} data={arr} />
        </div>
      </div>
    </div >
  )
}

export default HomeComponent
