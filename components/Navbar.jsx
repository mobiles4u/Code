import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../components/styles/navbar.module.scss'
function Navbar() {
  return (    <> 
     <div className={styles.container}>
      <div className={styles.container__navbar}>
        <div className={styles.container__navbar__upperNavbar}>
          <div className={styles.container__navbar__upperNavbar__width}>
            <div className={styles.container__navbar__upperNavbar__width__logo}>
              <div>Mobiles4u</div>
            </div>
            <div className={styles.container__navbar__upperNavbar__width__SearchBar}>
              <input type="text" placeholder="Search.." name="search" />
            </div>
          </div>
        </div>
        <div className={styles.container__navbar__lowerNavbar}>
          <div className={styles.container__navbar__lowerNavbar__width}>
            <div className={styles.container__navbar__lowerNavbar__width__items}>
              <Link href='/News'><a className={styles.container__navbar__lowerNavbar__width__items__item}>News</a></Link>
              <Link href='/Home'><a className={styles.container__navbar__lowerNavbar__width__items__item}>Home</a></Link>
              <Link href='/Rumours'><a className={styles.container__navbar__lowerNavbar__width__items__item}>Rumours</a></Link>
              <Link href='/Compare'><a className={styles.container__navbar__lowerNavbar__width__items__item}>Compare</a></Link>
              <Link href='/Contact'><a className={styles.container__navbar__lowerNavbar__width__items__item}>Contact</a></Link>
              <Link href='/Reviews'><a className={styles.container__navbar__lowerNavbar__width__items__item}>Reviews</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Navbar
