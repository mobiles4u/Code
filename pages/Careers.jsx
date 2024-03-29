import React from 'react'
import BannerAd from '../components/BannerAd'
import styles from '../../mobiles4u/styles/careers.module.scss'
import TopBrand from '../components/subcomponents/TopBrand'
function Careers() {
        let title = "Top Brands"
        let arr = ["Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae", "MI", "Motrola", "SonyEricson", "Oneplus", "Iphone"];
  
    return (

        <div className={styles.container}>
            <div className={styles.container__main}>
                <BannerAd />
                <div className={styles.container__main__content}>
                    <div className={styles.container__main__content__mainleft}>
                        <div className={styles.container__main__content__mainleft__title}>
                            Careers
                        </div>
                        <div className={styles.container__main__content__mainleft__pagecontent}>
                            {/* <h3> Careers </h3> */}
                            <div>
                               <p> At Mobiles4u, we believe in allowing our youth to grow and develop their skills. We offer a variety of options for them to challenge themselves and learn new things.</p> <p> Our culture is one of collaboration and respect. Jobs and careers are two different things. The opportunity to do work that makes a significant contribution towards something constructive. The prospect of spending time surrounded by intelligent, ambitious, and motivated people. At mobiles4u, you can expect to do work like this. Is not it intriguing?
                               </p> Please come and join us.
                                To apply for a position with Mobiles4u, please submit your resume with the relevant subject line at mobiles4u.work@gmail.com. Once we have reviewed your application, we will contact you to schedule an interview.
                            </div>
                        </div>
                    </div>
                    <div className={styles.container__main__content__mainright}>
                        <TopBrand  title={title} data={arr}  />                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
