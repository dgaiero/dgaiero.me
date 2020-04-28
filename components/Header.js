import { Layout, Menu } from 'antd';

import Contact from '../components/Contact'
import { HeaderLogo } from '../public/static/images/logos/logos_name-light.svg'
import { PageHeader } from 'antd';
import React from 'react'
import Router from 'next/router'
import { withRouter } from 'next/router'

const { Header, Content, Footer } = Layout;

const headerSvgProps = {
   height: '80%',
   position: 'absolute',
   top: '50%',
   'msTransform': 'translateY(-50%)',
   transform: 'translateY(-50%)',
}

class SiteHeader extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         current: this.props.router.pathname,
         selectedHeaderKeys: [this.props.router.pathname],
         showContact: false,
      }
   }

   handleClick = e => {
      this.setState({
         current: e.key,
         selectedHeaderKeys: [e.key],
      });
      switch (e.key) {
         case "/contact":
            this.setState(prevState => ({ showContact: !prevState.showContact }));
            break;
         default:
            Router.push(e.key);
      }
   };

   closeContactForm = () => {
      this.setState({
         showContact: false,
         current: this.props.router.pathname,
         selectedHeaderKeys: [this.props.router.pathname],
      });
   };

   render() {
      const { pathname } = this.props.router;
      return (
         <>
            <Header className="header">
               <div className="logo">
                  <HeaderLogo style={headerSvgProps} />
               </div>
               <Menu onClick={this.handleClick}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[pathname]}
                  selectedKeys={this.state.selectedHeaderKeys}>
                  <Menu.Item key="/">Home</Menu.Item>
                  {/* <Menu.Item key="/about" disabled>About Me</Menu.Item> */}
                  <Menu.Item key="/contact">Contact</Menu.Item>
               </Menu>
            </Header>
            <Contact visible={this.state.showContact} onClose={this.closeContactForm} />
            <style jsx>
               {`
         .logo {
            width: 120px;
            height: 100%;
            position: relative;
            margin: 0 28px 0 0;
            float: left;
         }              
         `}
            </style>
         </>
      )
   };
};

export default withRouter(SiteHeader);