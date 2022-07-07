import React from 'react'
import BannerAd from '../components/BannerAd'
import Link from 'next/link'
import styles from '../../mobiles4u/styles/privacyPolicy.module.scss'
import TopBrand from '../components/subcomponents/TopBrand'
function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <BannerAd />
        <div className={styles.container__main__content}>
          <div className={styles.container__main__content__mainleft}>
            <div className={styles.container__main__content__mainleft__title}>
              Privacy Policy
            </div>
            <div className={styles.container__main__content__mainleft__pagecontent}>
              <h3><span> <b> Mobiles4u</b></span> Privacy Policy</h3>
              <p>   The following Privacy Policies govern how <span> <b> Mobiles4u</b></span> collects and utilizes the information obtained from users (each "User") " of the <Link href='/Home'> www.mobiles4u.com.pk</Link>. Mobiles4u.com.pk , along with its services, is subject to the following privacy and data protection policies.
              </p>
              <h3> Individual Identification Details</h3>
              <p> Depending on the circumstances, we may collect Users' personal information. However, it is not restricted to when Users browse our website, fill out a form, or participate in other actions, services, features, or resources we offer. Users might be asked for names, if appropriate, or email addresses and names.
                However, users can browse our site without revealing their identity. Users' Information Will be collected only if voluntarily submitted. Users are free to refuse to give us personal identification details, which will hinder them from participating in specific Site associated activities.
              </p>
              <h5> What Personal Data Do We Collect and Process?</h5>
              The Information on <b> Mobiles4u</b> is publicly accessible. We might gather, store and process Personal Information about you, including but not limited to account identification names and gender, age, email address, telephone number, postal address, or any other required details. We also seek data that cannot be used to identify you, such as your mobile phone's IP address and unique identifier. We do not gather any personally identifiable information regarding you unless you opt to provide us with such information through, for instance, responding to an application form or survey. The kinds of data we may request include your name and the email address you use to contact us.
              If you give us personal details, you agree that we can store them in our database and send it to other places.
              <h4> Cookies And Their Use</h4>
              <p>
                If you visit our site, we may store details on your device. The information we hold will be a "cookie" or similar file. Cookies are small bits of data stored on your computer, not on our official site. Cookies can't spy on you or steal your information. They can't get into your hard drive or steal data.
                They are merely a way to help you navigate websites in the most efficient way possible. Cookies provide information tailored to your preferences and stop you from entering all your data every connection.
                We might use an external advertising server to display ads on our site or mobile applications. These advertisements may include cookies. The company that hosts the promotions may receive cookies from outside banner advertisements. We don't have data that could prove the existence of cookie usage by the advertising server company.
              </p>
              <h4>              To what end do we put the data we collect?</h4>
              <p>
                User data collected by <span> <b> Mobiles4u</b></span> may be used for the following reasons:
                - To improve our site
                We could use feedback from you to enhance our services.
                To send regular emails.
                We can use this email address to respond to questions, inquiries,
                or other inquiries.
              </p>
              <h3> Security</h3>
              <p>  Our website is equipped with industry-standard security
                measures to guard against the destruction, misuse, and alteration
                of data we manage. While there isn't any such absolute security when
                using the internet, we employ reasonable measures to protect your data from
                unauthorized access, misuse, disclosure, or modification.
                While we safeguard your Personal Information by industry standards, you
                understand that the internet and computers aren't 100% secured, and we cannot
                give you complete assurance of the protection of personal data.
                So, you agree that you are not <span> <b> Mobiles4u</b></span> accountable in any way whatsoever
                for the loss of your Personal Information or other information you provide
                to us or share with us if we suffer damages or losses occur to you by
                circumstances beyond our control. You also accept that all data
                (including your data) sent to us or through the website will remain
                at your risk.
              </p>
              <h3> Advertising</h3>
              <p> Advertisements on our website could be sent to Users through
                advertising partners who might create cookies. Cookies allow the
                advertising server to identify your computer every time. They deliver
                an online advertisement to collect non-personal data about you and other
                computer users. This data also allows ad networks to send you targeted
                ads they think will be of the most significant interest. This privacy
                policy doesn't apply to any cookies used by advertising companies.</p>
              <h3>  Privacy Policies Are Changing.</h3>
              <p> <span> <b> Mobiles4u</b></span> retains the option to modify or change this privacy
                statement whenever and as necessary. We encourage you to keep up current with
                the latest legal regulations and how we conduct our business.
                We recommend that you review this privacy policy regularly to be informed of any
                changes or updates to our privacy statement. Continued use of the Platform signifies
                your full and unconditional agreement to any change in the Privacy Policy.
              </p>
              <h3>  Google AdSense</h3>
              <p>  Google could display certain ads. Using the DART cookie can show ads
                to people based on how often they visit our site and other sites on the
                internet. DART uses "non personally identifiable information" and doesn't
                keep track of your name, email address, street address, and other private
                details. You can choose not to use the DART cookie by going to
                http://www.domain.com/privacy_ads.html and reading Google's ad
                and content network privacy policy.
                Acceptance Of These Conditions
                When you use this site, you confirm your agreement to this policy. If you
                are not opposed to the terms of this agreement, refrain from using our site.
                The continued use of the site following the announcement of any policy changes
                shall be considered your acceptance of the modifications.
              </p>
              <h3>  Contact Us</h3>
              <p>  Suppose you have a question or concern about this privacy statement or any other terms of use, conditions, queries, or concerns about how we manage your Personal Information, don't hesitate to contact our admin department.
                Contact us via:</p>
              <p>   mobiles4u.work@gmail.com</p>
              <p>  Phone: 03037383304</p>
            </div>
          </div>
          <div className={styles.container__main__content__mainright}>
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
            <br />
            <TopBrand />
         </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
