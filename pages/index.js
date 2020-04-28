import '../assets/less/index/main.less'

import { Affix, Col, Layout, Menu, Row } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import Logo from '../public/static/images/logos/logos_name-dark.svg'
import ParticleConfig from '../assets/json/index/particlesjs-config.json'
import Particles from 'react-particles-js';
import Title from '../components/Title'
import { withRouter } from 'next/router'

const { SubMenu } = Menu;
const { Content } = Layout;

function Index() {
   return (
      <>
         <Head>
            <title><Title name="Home"></Title></title>
            {/* <title>Test</title> */}
         </Head>
         <Layout style={{ height: '100%' }}>
            <Header />
            <Content className="home-page-container">
               {/* <Breadcrumb style={{ margin: '16px 0' }} /> */}
               <div className="site-layout-content-header-wrapper">
                  <div className="site-layout-content-header">
                     <div className="header-image-picture-wrapper">
                        {/* <Col> */}
                           <figure className="headshot-image-frame"><img className="headshot-image" src="/static/images/headshot.jpg" /></figure>
                           {/* <figure className="headshot-image-frame"><img className="headshot-image" src="https://picsum.photos/1088/933.jpg" /></figure> */}
                           <span className="hello-index">hi there.</span>
                        {/* </Col>
                        <Col>
                        </Col> */}
                     </div>
                     <div style={{ marginTop: 16 }}>
                        {/* <div className="headshot-image-frame"><img className="headshot-image" src="https://picsum.photos/1088/933.jpg" /></div> */}
                        
                        <p className="welcome-text">
                           I'm Dominic, currently attending <a className="underline" href="https://calpoly.edu" target="_blank" rel="noopener noreferrer">Cal Poly San Luis
                           Obispo</a> studying computer engineering. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines. Some random text here. I'm gonna put a lot of random text in this area so that it grows to multiple lines.
                              </p>
                     </div>
                  </div>
                  {/* <Particles className='particles' params={ParticleConfig}/> */}
               </div>
            </Content>
            <Footer />
         </Layout>
      </>
   );
};

export default Index;