import React from 'react'
import styles from './styles/homeComponent1.module.scss'
import Mobiles from './subcomponents/Mobile'
import TopBrand from './subcomponents/TopBrand'
function HomeComponent1() {

    return (
        <div className={styles.container}>
            <div className={styles.container__componentHeadings}>
                <div className={styles.container__componentHeadings__heading1}>Title</div>
                <div className={styles.container__componentHeadings__heading2}>Views All  </div>
            </div>
            <div className={styles.container__component}>
                <div className={styles.container__component__left}>
                    <div className={styles.container__component__left__bigcontainer}>
                        <Mobiles />
                        <Mobiles />
                        <Mobiles />
                        <Mobiles />
                        <Mobiles />
                        <Mobiles />
                    </div>

                </div>

                <div className={styles.container__component__right}>
                    <TopBrand/>
                </div>
            </div>
            
        </div>
    )
}

export default HomeComponent1
