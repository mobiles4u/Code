import React from 'react'
import BannerAd from '../components/BannerAd'
import styles from '../../mobiles4u/styles/news.module.scss'
import TopBrand from '../components/subcomponents/TopBrand'
function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <BannerAd />
        <div className={styles.container__main__content}>
          <div className={styles.container__main__content__mainleft}>
            <div className={styles.container__main__content__mainleft__title}>
              Samsung A53
            </div>
            <div className={styles.container__main__content__mainleft__pagecontent}>
              <div className={styles.container__main__content__mainleft__pagecontent__pic}>
                {/* <img src="../images/" alt="" /> */}
              </div>
              <div className={styles.container__main__content__mainleft__pagecontent__info}>content
                <div className={styles.container__main__content__mainleft__pagecontent__info__price}>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__price__inruppees}>5000 RS</div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__price__indollars}>20000 $</div>
                </div>
                <div className={styles.container__main__content__mainleft__pagecontent__info__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis possimus dolore iusto distinctio soluta eligendi dolor ipsum, libero nesciunt corporis dolores iure architecto incidunt odio, quaerat exercitationem quos optio at!</div>
                <div className={styles.container__main__content__mainleft__pagecontent__info__specs}>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__heading}>Key Specs</div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints}>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__keypoint}>
                      <div> Performance</div>
                      <div>
                        <ul>
                          <li>ansjknads</li>
                          <li>dfadsf</li>
                          <li>dsfds</li>
                          <li>adfadf</li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__keypoint}> <div> Performance</div>
                      <div>
                        <ul>
                          <li>ansjknads</li>
                          <li>dfadsf</li>
                          <li>dsfds</li>
                          <li>adfadf</li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__keypoint}> <div> Performance</div>
                      <div>
                        <ul>
                          <li>ansjknads</li>
                          <li>dfadsf</li>
                          <li>dsfds</li>
                          <li>adfadf</li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__keypoint}> <div> Performance</div>
                      <div>
                        <ul>
                          <li>ansjknads</li>
                          <li>dfadsf</li>
                          <li>dsfds</li>
                          <li>adfadf</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos}>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>asdksmdklasd</div>
                      <div>klskdkasdkasm</div>
                      <div><button>compare</button></div>

                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>asdksmdklasd</div>
                      <div>klskdkasdkasm</div>
                      <div><button>compare</button></div>
                    </div>                 <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>asdksmdklasd</div>
                      <div>klskdkasdkasm</div>
                      <div><button>compare</button></div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container__main__content__mainright}>
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

export default TermsAndConditions
