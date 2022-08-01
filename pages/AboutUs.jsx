import React from 'react'
import BannerAd from '../components/BannerAd'
import styles from '../../mobiles4u/styles/aboutus.module.scss'
import TopBrand from '../components/subcomponents/TopBrand'
function AboutUs() {
    let title = "Top Brands"
    let arr = ["Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae", "MI", "Motrola", "SonyEricson", "Oneplus", "Iphone"];

    return (
        <>        <div className={styles.container}>
            <div className={styles.container__main}>
                <BannerAd />
                <div className={styles.container__main__content}>
                    <div className={styles.container__main__content__mainleft}>
                        <div className={styles.container__main__content__mainleft__title}>
                            About Us
                        </div>
                        <div className={styles.container__main__content__mainleft__pagecontent}>
                            <div>
                                <br />
                                <div> The mobile industry has changed the way people interact with friends, businesses,
                                    and families.Whether upgrading your phone, trying to find a new one, or needing help
                                    finding out what the latest phones offer, we have got something for you!</div> <br />
                                <div>  From the i - phones, Samsung, and other phone brands, Mobiles4U provides information
                                    on a wide range of mobile phone prices in pakistan for you to make informed purchase
                                    decisions.</div> <br />
                                <div>   We started by delivering impartial expert advice in 2008 when no other sources existed,
                                    providing unbiased mobiles news in 2010. Now we are a team of 25 people working to give
                                    you accurate information about mobiles.</div> <br />
                                <div>  We provide reviews, rumors, specs, and prices(with local availability and
                                    links to retailers where applicable)
                                    for the latest products in the mobile industry on our website.</div> <br />
                                <div>  Plus, if you are still undecided about your next phone purchase
                                    because of conflicting info and epic rumors, do npt worry.We have
                                    covered you with simplified explanations so you can make your own
                                    decision from a cool place.</div> <br />
                                <div> We are an independent review site for mobile phones.All the
                                    information you need is just a click away.</div> <br />

                            </div> <br />
                        </div> <br />
                    </div> <br />

                    <div className={styles.container__main__content__mainright}>
                        <TopBrand title={title} data={arr} />
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default AboutUs
