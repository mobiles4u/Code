import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobiles4U</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.Container}>
          <div className={styles.Container__Header}>
            <div className={styles.Container_Logo}>
              <h2>Mobiles4u</h2>
            </div>
            <div className={styles.Container_SearchBar}>
            <input type="text" placeholder="Search here" name="search"/>
            </div>
          </div>
          <div className={styles.ContainerNavbar}>
          <div className={styles.Container__Navbar}>
            <div className={styles.Container_Item}>Home</div>
            <div className={styles.Container_Item}>News</div>
            <div className={styles.Container_Item}>Reviews</div>
            <div className={styles.Container_Item}>Rumors</div>
            <div className={styles.Container_Item}>Compare</div>
            <div className={styles.Container_Item}>Contact</div>
          </div>
          </div>


          <div className={styles.content}>
            <div className={styles.contentPage}>
              <div className={styles.ad}>Space for Banner</div>

              <div className={styles.componentHeadings}><h3>Latest News</h3>
                <h3>Views All</h3></div>
              <div className={styles.component1}>
                <div className={styles.componentContainer}>
                  <div className={styles.News}>News
                  </div>
                  <div className={styles.NewsAll}>
                    <div className={styles.news1}>Veiw All News
                    </div>
                    <div className={styles.news2}>Veiw All News
                    </div>
                  </div>
                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>

              <div className={styles.componentHeadings}><h3>Upcoming Mobiles</h3>
                <h3>Views All</h3></div>
              <div className={styles.component2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>


                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>

              <div className={styles.componentHeadings}><h3>Latest Mobiles</h3>
                <h3>Views All</h3></div>
              <div className={styles.component2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>


                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>

              <div className={styles.componentHeadings}><h3>Mobile Prices 60,000Rs to 80,000 Rs. </h3>
                <h3>Views All</h3></div>
              <div className={styles.component2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>


                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>


              <div className={styles.componentHeadings}><h3>Mobile Prices 80,000 Rs. to 100,000 Rs.</h3>
                <h3>Views All</h3></div>
              <div className={styles.component2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>


                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>


              <div className={styles.componentHeadings}><h3>Mobile Prices above 100,000 Rs.</h3>
                <h3>Views All</h3></div>
              <div className={styles.component2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>

                  <div className={styles.component}>
                    <div className={styles.subcomponent}></div>
                    <div>Name</div>
                  </div>


                </div>
                <div className={styles.TopBrands}>Top Brands
                </div>
              </div>


              <div className={styles.componentHeadings}><h3>Latest News</h3>
                <h3>Views All</h3></div>
              <div className={styles.component1}>
                <div className={styles.componentContainer}>
                  <div className={styles.News}>News
                  </div>
                  <div className={styles.NewsAll}>
                    <div className={styles.news1}>Veiw All News
                    </div>
                    <div className={styles.news2}>Veiw All News
                    </div>
                  </div>
                </div>
                {/* <div className={styles.TopBrands}>Top Brands
                </div> */}
              </div>






            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.domainname}>Mobile4u</div>
          <div className={styles.links}>
            <div className={styles.colLinks}>
              <div>info</div>
              <div>get in touch</div>
              <div>social</div>
              <div>what we offer</div>
            </div>
            <div className={styles.colLinks}>
              <div>about us</div>
              <div>contact us</div>
              <div>facebook</div>
              <div>mobile phones</div>
            </div>

            <div className={styles.colLinks}>
              <div>FAQs</div>
              <div>advertise</div>
              <div>twitter</div>
              <div>news</div>
            </div>

            <div className={styles.colLinks}>
              <div>blogs</div>
              <div>careers</div>
              <div>linkedIn</div>
              <div>Reviews</div>
            </div>

          </div>

          <div className={styles.copyright}>
            <div className={styles.copyright1}>copyright c 2022 , Mobile4u.com</div>
            <div className={styles.terms}>
              <div>terms </div>
              <div>policy </div>
              <div>sitemap </div>
            </div>
          </div>
        </div>

      </main>


    </div>
  )
}
