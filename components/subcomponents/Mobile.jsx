import React from 'react'
import styles from '../subcomponents/styles/mobile.module.scss'
import Image from 'next/image'

function Mobile({img , name}) {
 
    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
            <Image height={150} width={75} src={img} />
            </div>
            <div className={styles.container__name}>{name}
            </div>
        </div>
        
    )
}

export default Mobile
