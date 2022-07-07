import React from 'react'
import styles from './styles/homeComponent.module.scss'
function HomeComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.container__componentHeadings}>
        <div className={styles.container__componentHeadings__heading1}>Latest News</div>
        <div className={styles.container__componentHeadings__heading2}>Views All  </div>
      </div>
      <div className={styles.container__component}>
        <div className={styles.container__component__left}>
          <div className={styles.container__component__left__bigcontainer}>News
          </div>
          <div className={styles.container__component__left__smallcontainer}>
            <div className={styles.container__component__left__smallcontainer__upper}>Veiw upper News
            </div>
            <div className={styles.container__component__left__smallcontainer__lower}>Veiw lower News
            </div>
          </div>
        </div>

        <div className={styles.container__component__right}>Top Brands
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
