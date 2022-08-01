import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import BannerAd from '../components/BannerAd.jsx'
import HomeComponent from '../components/HomeComponent'
import HomeComponent1 from '../components/HomeComponent1'
import m6 from '../images/homepage/lt6.svg'
import m7 from '../images/homepage/lt7.svg'
import m8 from '../images/homepage/lt8.svg'
import m9 from '../images/homepage/lt9.svg'
import m10 from '../images/homepage/lt10.svg'
import m11 from '../images/homepage/lt11.svg'
import m12 from '../images/homepage/lt12.svg'
import m13 from '../images/homepage/lt13.svg'
import m14 from '../images/homepage/lt14.svg'


function HomePage() {
    let title = "Latest Mobiles";
    let title1 = "Latest Mobiles";
    let title2 = "Latest Mobiles";
    let title3 = "Latest Mobiles";
    let title4 = "Latest Mobiles";
    let title5 = "Latest Mobiles";

    return (
        <div className={styles.container}>
            <div className={styles.container__home}>
                <BannerAd />
                <HomeComponent />

                <h3 className={styles.container__home__topbrandHeading} >
                    Top Brand
                </h3>
                <div className={styles.container__home__topbrandContent}>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m6} ></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m7} ></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m8} ></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m9} ></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m10}></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m11}></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m12}></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m13}></Image>
                        <h5>Samsung</h5>
                    </div>

                    <div className={styles.container__home__topbrandContent__item}>
                        <Image height={70} width={70} src={m14}></Image>
                        <h5>Samsung</h5>
                    </div>
                </div>
                <HomeComponent1 title={title} condition={true} />
                <HomeComponent1 title={title} condition={false} />
                <HomeComponent1 title={title} condition={true} />
                <HomeComponent1 title={title} condition={false} />
                <HomeComponent1 title={title} condition={true} />
                <HomeComponent1 title={title} condition={false} />
            </div>
        </div >
    )
}

export default HomePage
