import React from 'react'
import styles from '../subcomponents/styles/mobile.module.scss'
function Mobile(name, imgUrl) {
 
    return (
        <div className={styles.container}>
            <div className={styles.container__box}>img
            </div>
            <div className={styles.container__name}>name
            </div>
        </div>
        
    )
}

export default Mobile
