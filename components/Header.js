import { Button, Dropdown, Layout, Menu, Select, Switch } from 'antd';
import React, {useContext, useState} from 'react'
import { setThemeDark, setThemeLight, setThemeSystem } from '../redux/actions/globalSettingsActions'

import { AppContext } from '../pages/_app'
import Contact from '../components/Contact'
import { DownOutlined } from '@ant-design/icons';
import { HeaderLogo } from '../public/static/images/logos/logos_name-light.svg'
import MenuItem from 'antd/lib/menu/MenuItem';
import { PageHeader } from 'antd';
import Router from 'next/router'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const headerSvgProps = {
   height: '80%',
   position: 'absolute',
   top: '50%',
   'msTransform': 'translateY(-50%)',
   transform: 'translateY(-50%)',
}

const headerProps = {
   width: '100%',
   position: 'fixed',
   zIndex: 1,
}

// const ThemeButton = () => {
//    const { state, dispatch } = React.useContext(AppContext);
//    return (
//       <Menu.Item key="/contact">Contact</Menu.Item>
//       // <Menu.Item key="/change-theme">
//       //    Theme: {state.color}
//       // </Menu.Item>
//    )
// }

// function ThemeDropdown() {
//    return (
//       <Dropdown overlay={ThemeDropdownOverlay}>
//          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ float: "right" }}>
//             Hover me <DownOutlined />
//          </a>
//       </Dropdown>
//    )
// }

class SiteHeader extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         current: this.props.router.pathname,
         selectedHeaderKeys: [this.props.router.pathname],
         showContact: false,
      }
   }

   themeDropdownOverlay = () => {
      const { theme } = this.props.globalSettings;
      // const [current, setCurrent] = useState(state.theme);
      // const handleClick = () => {

      // }

      return (
         <Menu onClick={this.handleThemeClick} defaultSelectedKeys={[theme]}>
            <Menu.Item key="dark">
               Dark Mode
         </Menu.Item>
            <Menu.Item key="light">
               Light Mode
         </Menu.Item>
         </Menu>
      );
   }

   handleThemeClick = e => {
      this.setState({
         current: e.key,
         selectedHeaderKeys: [e.key],
      })
      switch (e.key) {
         case "light":
            setThemeLight();
            console.log("light theme");
            break;
         case "dark":
            setThemeDark();
            console.log("dark theme");
            break;
         default:
            console.error("Not supported");
      }
      document.documentElement.setAttribute("data-theme", e.key);
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
         case "themeSetting:light":
            break;
         case "themeSetting:dark":
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
            <Header className="header" style={headerProps}>
               <div className="logo">
                  <HeaderLogo style={headerSvgProps} />
               </div>
               <Menu
                  onClick={this.handleClick}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[pathname]}
                  selectedKeys={this.state.selectedHeaderKeys}>
                  <Menu.Item key="/">Home</Menu.Item>
                  <Menu.Item key="/contact">Contact</Menu.Item>
                  {/* <Dropdown overlay={this.themeDropdownOverlay} style={{ float: "right" }}>
                     <Button onClick={e => e.preventDefault()}>
                        Theme <DownOutlined />
                     </Button>
                  </Dropdown> */}
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

const mapStateToProps = state => ({
   globalSettings: state.globalSettings
})

const mapDispatchToProps = {
   setThemeDark,
   setThemeLight,
   setThemeSystem,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SiteHeader));