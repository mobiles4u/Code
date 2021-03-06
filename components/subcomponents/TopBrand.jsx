import Link from 'next/link';
import React from 'react'
import styles from './styles/topBrand.module.scss'
function TopBrand({ title, data }) {

    return (
        <div className={styles.container}>

            <div>{title}</div>
            <div className={styles.container__topBrand}>

                {data.map((data, i) => (
                    // <Link >
                        <Link href="/Home" className={styles.container__topBrand__items} key={i}>
                            {data}
                        </Link>
                    //  </Link>
                ))}
            </div>
        </div>
    )
}

export default TopBrand
