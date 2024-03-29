import React from 'react'
import BannerAd from '../components/BannerAd'
import styles from '../../mobiles4u/styles/news.module.scss'
import TopBrand from '../components/subcomponents/TopBrand'
import Link from 'next/link'
import img from '../images/homepage/vivoy55.jpg'
import Image from 'next/image'
function News() {
      let title = "My Brands"
      let title1 = "New Brands"
      let arr = ["Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae", "MI", "Motrola", "SonyEricson", "Oneplus", "Iphone","Apple", "Samsung", "Oppo", "Blackberry", "Nokia", "Huaweae", "MI", "Motrola", "SonyEricson", "Oneplus", "Iphone",];
  
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
                <Image
                  src={img}
                  alt="img-mobile"
                  height={360}
                  width={160}
                />
                <div className={styles.container__main__content__mainleft__pagecontent__pic__buttons}>
                  <button className={styles.container__main__content__mainleft__pagecontent__pic__buttons__button}>+ - </button>
                  <button className={styles.container__main__content__mainleft__pagecontent__pic__buttons__button}>+ - </button>
                  <button className={styles.container__main__content__mainleft__pagecontent__pic__buttons__button}>+ - </button>
                </div>
              </div>
              <div className={styles.container__main__content__mainleft__pagecontent__info}>
                <div className={styles.container__main__content__mainleft__pagecontent__info__price}>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__price__inruppees}>RS-5000</div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__price__indollars}>US-200</div>
                </div>
                <div className={styles.container__main__content__mainleft__pagecontent__info__description}>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__description__ptag}> <b>Disclaimer</b>: dolor sit amet consectetur adipisicing elit. Quis possimus
                    dolore iusto distinctio soluta eligendi dolor ipsum, libero. </div></div>
                <div className={styles.container__main__content__mainleft__pagecontent__info__specs}>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__heading}>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__heading__title}> <b> Key Specs </b></div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__heading__link} ><u><Link href=''>  see all specs *</Link></u> </div>
                  </div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__andriodV}>*andriod v12</div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints}>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul}>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} ><b> Performance</b>
                        <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__rating}><b> -------</b></div>
                      </div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Octa processor</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Ram</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >4k Screen</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Bullet Proof</div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul}>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} ><b>Display</b>
                        <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__rating}><b> -------</b></div>
                      </div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Octa processor</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Ram 8GB</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >4k Screen</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Bullet Proof</div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul}>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} ><b>Camera</b>
                        <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__rating}><b> -------</b></div>
                      </div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Octa processor</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Ram 8GB</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >4k Screen</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Bullet Proof</div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul}>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} ><b>Battery</b>
                        <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__rating}><b> -------</b></div>
                      </div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Octa processor</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Ram 8GB</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >4k Screen</div>
                      <div className={styles.container__main__content__mainleft__pagecontent__info__specs__keypoints__ul__li} >Bullet Proof</div>
                    </div>
                  </div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos}>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>128Gb</div>
                      <div>Nano Sim </div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>finger print</div>
                      <div>microSd</div>
                    </div>
                    <div className={styles.container__main__content__mainleft__pagecontent__info__specs__moreinfos__moreinfo}>
                      <div>FM Radio</div>
                      <div>Usb Supported</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container__main__content__mainleft__pagecontent__info__compare}>

                  <div className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv}><button className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv__butn}>options</button></div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv}><button className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv__butn}>compare</button></div>
                  <div className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv}><button className={styles.container__main__content__mainleft__pagecontent__info__compare__comdiv__butn}>pictures</button></div>
                </div>
              </div>
            </div>
            <div className={styles.container__main__content__mainleft__pagecontent__center}>
              <div className={styles.container__main__content__mainleft__pagecontent__center__pros}>
                <div><b> Pros</b></div>
                <div>Enough memory</div>
                <div>Good Looks</div>
                <div>reliable</div>
                <div>high battery timing</div>
              </div>
              <div className={styles.container__main__content__mainleft__pagecontent__center__cons}>
                <div><b> Cons</b></div>
                <div>Not Enuogh memory</div>
                <div>Not Good Looks</div>
                <div>Not reliable</div>
                <div>Not high battery timing</div>
              </div>
            </div>
          </div>
          <div className={styles.container__main__content__mainright}>
            <TopBrand  title={title} data={arr} />
            {/* <br /> */}
            {/* <TopBrand  title={title1} data={arr}  /> */}
          </div>
        </div>
        <BannerAd />
        <div className={styles.container__main__content}>
          <div className={styles.container__main__content__mainleft1}>
            <div className={styles.container__main__content__mainleft1__center}>
              <table className={styles.container__main__content__mainleft1__center__table} id="customers">
                <tbody>
                <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b>Camera</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}><b> 12 Pixels</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Quality</td>
                </tr>
                <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Launch</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}><b> Display</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd QualityHd QualityHd Quality</td>
                </tr>
                <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>   <tr className={styles.container__main__content__mainleft1__center__table__tr}>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdTitle}><b> Body </b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdSubtitle}> <b> steel</b></td>
                  <td className={styles.container__main__content__mainleft1__center__table__tr__tdDesc}>Hd Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className={styles.container__main__content__mainright1}> */}
          {/* <TopBrand  title={title} data={arr} /> */}

          {/* <TopBrand  title={title1} data={arr}  /> */}
          {/* <TopBrand  title={title1} data={arr}  />
          <TopBrand  title={title1} data={arr}  />
          <TopBrand  title={title1} data={arr}  />
          <TopBrand  title={title1} data={arr}  />
          <TopBrand  title={title1} data={arr}  />
          <TopBrand  title={title1} data={arr}  /> */}
          {/* </div> */}
        </div>
        <BannerAd />
        <div className={styles.container__main__content}>
          <div className={styles.container__main__content__mainleft2}>
            <div className={styles.container__main__content__mainleft2__center}>
              <h2>Samsung Y2 Prices in Pakistan</h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam nostrum qui adipisci repellendus quis officia veniam aperiam libero? Quam blanditiis provident dolores expedita dolor odit quasi minus maiores quis?</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae ullam veritatis sint quam, cum itaque, reiciendis obcaecati molestias iure, atque corporis placeat? Magnam id deserunt neque assumenda numquam incidunt.</div>
            </div>
          </div>
          {/* <div className={styles.container__main__content__mainright2}>
            <div className={styles.container__main__content__mainright2__ldevices}>latest devices </div>
            <div className={styles.container__main__content__mainright2__rdevices}>Related devices </div>
          </div> */}
        </div>
      </div>
    </div >
  )
}
export default News
