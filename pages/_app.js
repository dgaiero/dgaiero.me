// import App from 'next/app'

import '../App.less'

import { useEffect, useState } from 'react'

import { notification } from 'antd';

const showConstructionBanner = () => {
   notification.info({
      message: 'Pardon the mess!',
      description:
         "I'm still working on this website, and it is currently under construction.",
   });
};
   
   
export default ({ Component, pageProps }) => {
   const [constructionBanner, setConstructionBanner] = useState(true);
   
   
   useEffect(() => {
      if (constructionBanner)
      {
         showConstructionBanner();
         setConstructionBanner(false);
      }
   });

   return <Component {...pageProps} />
}
