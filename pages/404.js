import { Button, Result } from 'antd';

import Head from '../components/Head'
import Router from 'next/router'

export default function ErrorPage() {
   return (
      <>
         <Head title="Page not Found" />
   <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => Router.push('/')}><a>Back Home</a></Button>}
   />
   </>
   )};