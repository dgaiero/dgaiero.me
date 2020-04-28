import { Result, Button } from 'antd';
import Router from 'next/router'
import Title from '../components/Title'

export default function ErrorPage() {
   return (
      <>
         <title><Title name="Page not Found"></Title></title>
   <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => Router.push('/')}><a>Back Home</a></Button>}
   />
   </>
   )};