import React, { useState } from 'react'
import styles from './styles/homeComponent1.module.scss'
import Mobiles from './subcomponents/Mobile'
import Banner from './subcomponents/Banner'

import m1 from '../images/homepage/SamsungGalaxyA33.jpg'
import m2 from '../images/homepage/vivoy55.jpg'
import m3 from '../images/homepage/Realme9.jpg'
import m4 from '../images/homepage/TecnoCamon19Neo.jpg'
import m5 from '../images/homepage/XiaomiRedmi10A.jpg'
import m6 from '../images/homepage/InfinixNote12VIP.jpg'
import TopBrand from './subcomponents/TopBrand'

function HomeComponent1({ title, condition }) {
    // let title = "Top Brands"
    const [checkCondition, setCheckCondition] = useState(condition)
    let arr = ["Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae", "Sony", "Oneplus"];
    return (
        <div className={styles.container}>
            <div className={styles.container__componentHeadings}>
                <div className={styles.container__componentHeadings__heading1}>{title}</div>
                <div className={styles.container__componentHeadings__heading2}>Views All  </div>
            </div>
            <div className={styles.container__component}>
                <div className={styles.container__component__left}>
                    <div className={styles.container__component__left__bigcontainer}>
                        <Mobiles name="SamsungGalaxyA33" img={m1} />
                        <Mobiles name="vivoy55" img={m2} />
                        <Mobiles name="Realme9" img={m3} />
                        <Mobiles name="TecnoCamon19Neo" img={m4} />
                        <Mobiles name="XiaomiRedmi10A" img={m5} />
                        <Mobiles name="InfinixNote12VIP" img={m6} />
                    </div>
                </div>

                <div className={styles.container__component__right} >
                    {checkCondition ? <TopBrand title={title} data={arr} /> : null}

                </div>
            </div>

        </div>
    )
}

export default HomeComponent1
