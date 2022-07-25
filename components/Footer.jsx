import React from 'react'
import styles from '../components/styles/footer.module.scss'
import Link from 'next/link'

function Footer() {
  return (<>
    <div className={styles.container}>
      <div className={styles.container__footer}>
        <div className={styles.container__footer__domainname}>Mobile4u</div>
        <div className={styles.container__footer__linkscontainer}>
          <div className={styles.container__footer__linkscontainer__links}>

            <div className={styles.container__footer__linkscontainer__links__colLinks}>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}> <b className={styles.container__footer__linkscontainer__links__colLinks__item__b}>Info</b></div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item} >get in touch</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>social</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>what we offer</div>
            </div>
            <div className={styles.container__footer__linkscontainer__links__colLinks}>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>
                <Link href='/AboutUs'><b className={styles.container__footer__linkscontainer__links__colLinks__item__b}>About us</b></Link>
              </div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>contact us</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>facebook</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>mobile phones</div>
            </div>

            <div className={styles.container__footer__linkscontainer__links__colLinks}>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}><b className={styles.container__footer__linkscontainer__links__colLinks__item__b}>FAQs</b></div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>advertise</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>twitter</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>news</div>
            </div>

            <div className={styles.container__footer__linkscontainer__links__colLinks}>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}><b className={styles.container__footer__linkscontainer__links__colLinks__item__b}>Blogs</b></div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>
                <Link href='/Careers'>careers</Link>
              </div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>linkedIn</div>
              <div className={styles.container__footer__linkscontainer__links__colLinks__item}>Reviews</div>
            </div>
          </div>
        </div>

        <div className={styles.container__footer__copyright}>
          <div className={styles.container__footer__copyright__copyright1}>copyright c 2022 , Mobile4u.com</div>
          <div className={styles.container__footer__copyright__terms}>
            <div className={styles.container__footer__copyright__terms__item}>terms </div>
            <div className={styles.container__footer__copyright__terms__item}>
              <Link href='/PrivacyPolicy'>policy</Link>
            </div>
            <div className={styles.container__footer__copyright__terms__item}>sitemap </div>
          </div>
        </div>
      </div>
    </div>
  </>

  )
}

export default Footer
