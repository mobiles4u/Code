import React from 'react'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import BannerAd from '../components/BannerAd.jsx'
import HomeComponent from '../components/HomeComponent'
import HomeComponent1 from '../components/HomeComponent1'

function HomePage() {
    let title ="Latest Mobiles";
    let title1 ="Latest Mobiles";
    let title2 ="Latest Mobiles";
    let title3 ="Latest Mobiles";
    let title4 ="Latest Mobiles";
    let title5 ="Latest Mobiles";


    return (
        <div className={styles.container}>
            <div className={styles.container__home}>
                <BannerAd />
                <HomeComponent  />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />
                <HomeComponent1 title={title} condition={false} />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 title={title} condition={true}/>
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 title={title} condition={false}/>
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 title={title} condition={true} />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 title={title} condition={false} />
                <hr style={{ marginTop: 5, marginBottom: 25 }} />

                <HomeComponent1 title={title} condition={true}/>
                <hr style={{ marginTop: 5, marginBottom: 25 }} />


            </div>
        </div>
    )
}

export default HomePage
