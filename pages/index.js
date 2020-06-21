import '../assets/less/index/main.less'

import { Layout, Menu } from 'antd';

import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import { NBSP } from '../components/helper';
import UA from '../components/UnderlineA'

// import Head from 'next/head'





const { Content } = Layout;

export default function() {
   return (
      <>
      <Head title="Home"/>
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
                              <img
                                 src="/static/images/headshot.webp"
                              />
                           </figure>
                           <span className="hi-there-text">hi there.</span>
                     </div>
                     <div style={{ marginTop: 16 }}>
                        <p>
                           I'm Dominic, currently attending <UA href="https://calpoly.edu" text="Cal Poly San Luis Obisp" _blank />{NBSP}
                           studying computer engineering. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines.
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
