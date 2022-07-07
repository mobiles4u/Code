import React from 'react'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import BannerAd from '../components/BannerAd.jsx'
import HomeComponent from '../components/HomeComponent'
import HomeComponent1 from '../components/HomeComponent1'
function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.container__home}>
                <BannerAd />
                <HomeComponent />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />
                <HomeComponent1 leftTitle="Latest Mobiles" rightTitle="Banner" />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />


            </div>
        </div>
    )
}

export default HomePage
