// import App from 'next/app'

import '../App.less'

import { useEffect, useState } from 'react'

import WrenchIcon from '../components/icons/WrenchIcon'
import { notification } from 'antd';

const showConstructionBanner = () => {
   notification.info({
      message: 'Pardon the mess!',
      description:
         "I'm still working on this website, and it is currently under construction.",
      icon:
         <WrenchIcon style={{ color: '#aa7e02'}} />,
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
