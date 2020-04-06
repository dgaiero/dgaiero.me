import { PageHeader } from 'antd';
import React from 'react'
import Contact from '../components/Contact'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

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
            this.setState(prevState => ({ showContact: !prevState.showContact}));
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
               <img src="/static/images/signatures-01.png" />
            </div>
               <Menu onClick={this.handleClick}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[pathname]}
                  selectedKeys={this.state.selectedHeaderKeys}>
               <Menu.Item key="/">Home</Menu.Item>
               <Menu.Item key="/about" disabled>About Me</Menu.Item>
               <Menu.Item key="/contact">Contact</Menu.Item>
            </Menu>
         </Header>
            <Contact visible={this.state.showContact} onClose={this.closeContactForm}/>
         <style jsx>
            {`
         .logo {
            width: 120px;
            height: 31px;
            // background: rgba(255, 255, 255, 0.2);
            margin: 0 28px 0 0;
            float: left;
         }
         .logo img {
            filter: invert(100%);
            object-fit: cover;
            width: 100%;
         }
         `}
         </style>
      </>
      )};
};

export default withRouter(SiteHeader);