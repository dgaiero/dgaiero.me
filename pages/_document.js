import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
   render() {
      return (
         <html>
            <Head>
               <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=WG2lmkmy0j"/>
               <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=WG2lmkmy0j"/>
               <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=WG2lmkmy0j"/>
               <link rel="manifest" href="/site.webmanifest?v=WG2lmkmy0j"/>
               <link rel="mask-icon" href="/safari-pinned-tab.svg?v=WG2lmkmy0j" color="#aa7e02"/>
               <link rel="shortcut icon" href="/favicon.ico?v=WG2lmkmy0j"/>
               <meta name="msapplicat</meta>ion-TileColor" content="#1e1a17"/>
               <meta name="theme-color" content="#aa7e02" />

               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <link rel="stylesheet" href="https://use.typekit.net/ouw0vbj.css" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </html>
      )
   }
};