import '../assets/less/index/main.less'

import { Layout, Menu } from 'antd';

import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import { NBSP } from '../components/helper';
import UA from '../components/UnderlineA'

// import Head from 'next/head'





const { Content } = Layout;

export default function () {
   return (
      <>
         <Head title="Home" />
         {/* <Head>
            <title>Test</title>
            <Title name="Home"/>
            <title><Title name="Home"></Title></title>
         </Head> */}
         <Layout style={{ height: '100%' }}>
            <Header />
            <Content className="home-page-container">
               <div className="welcome-card-wrapper">
                  <div className="welcome-card">
                     <div className="welcome-card-headshot-wrapper">
                        <figure className="welcome-card-headshot">
                           <picture>
                              <source
                                 srcset="/static/images/gaiero_dominic_headshot.webp"
                                 type="image/webp"
                              />
                              <source
                                 srcset="/static/images/gaiero_dominic_headshot.jpg"
                                 type="image/jpeg"
                              />
                              <img
                                 src="/static/images/gaiero_dominic_headshot.jpg"
                                 alt="headshot"
                              />
                           </picture>
                        </figure>
                        <span className="hi-there-text">hi there.</span>
                     </div>
                     <div style={{ marginTop: 16 }}>
                        <p>
                           I’m Dominic, a recent computer engineering graduate from <UA href="https://calpoly.edu" text="Cal Poly San Luis Obispo" _blank />.{NBSP}
                           Currently, I’m pursuing my master’s in electrical engineering, also at Cal Poly, San Luis Obispo. With my specialization, I’ll be  making embedded systems. In the meantime, I’ve developed my skills in x, y, z,… both as a student and during my 4 undergrad summer internships at Lockheed-Martin.
I’m kind of a stickler for details, in both my professional and personal endeavors. I have learned to appreciate great documentation inside and outsidde the workplace. I’m that guy who annotates everything and have even been accused of over-achieving when documenting a new recipe. Which ties into my hobbies. In my spare time, I enjoy cooking, particularly breadmaking. I also enjoy photography and hiking.
                        </p>
                     </div>
                  </div>
               </div>
            </Content>
            <Footer />
         </Layout>
      </>
   );
};
