import Link from 'next/link';
import React from 'react'
import styles from './styles/topBrand.module.scss'
function TopBrand({ title, data }) {

    return (
        <div className={styles.container}>

            <div className={styles.container__topBrandTitle}>{title}</div>
            <div className={styles.container__topBrand}>

                {data.map((data, i) => (
                    <Link href="/Home" className={styles.container__topBrand__items} style={{margin:'2px'}} key={i}>
                        {data}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopBrand
