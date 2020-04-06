import { Layout, Menu } from 'antd';
import Footer from '../components/Footer'
import { withRouter } from 'next/router'
import Breadcrumb from '../components/Breadcrumb'
import Link from 'next/link'
import Header from '../components/Header'
import Title from '../components/Title'
import Head from 'next/head'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content } = Layout;

function Index() {
   return (
      <>
      <Head>
            <title><Title name="Home"></Title></title>
         {/* <title>Test</title> */}
      </Head>
      <Layout>
         <Header />
         <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div className="site-layout-content">Content</div>
         </Content>
         <Footer />
         <style jsx>
            {`
            .site-layout-content {
               background: #fff;
               padding: 24px;
               min-height: 280px;
            }

            .site-layout-background {
               background: #fff;
            }
         `}
         </style>
      </Layout>
      </>
   );
};

export default Index;