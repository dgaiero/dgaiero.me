// import App from 'next/app'

import '../App.less'

import App from 'next/app';
import Head from 'next/head'
import { Provider } from 'react-redux';
import WrenchIcon from '../components/icons/WrenchIcon'
import { notification } from 'antd';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";

// import { useEffect, useReducer, useState } from 'react'





export const AppContext = React.createContext({});

const showConstructionBanner = () => {
   notification.info({
      message: 'Pardon the mess!',
      description:
         "I'm still working on this website, and it is currently under construction.",
      icon:
         <WrenchIcon style={{ color: '#aa7e02'}} />,
   });
};

class MainApp extends App {
   constructor(props) {
      super(props);
      this.state = {
         constructionBanner: false,
      };
   };

   componentDidMount() {
      if (this.state.constructionBanner) {
         showConstructionBanner();
         this.setState({constructionBanner: false});
      };
   };
   
   static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      //Anything returned here can be accessed by the client
      return { pageProps: pageProps };
   };

   render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      const { Component, pageProps } = this.props;

      return (
         <>

         <Provider store={store}>
            <Head>
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
         </Provider>
         </>
      );
   }
}

// const makeStore = () => store;

export default MainApp;