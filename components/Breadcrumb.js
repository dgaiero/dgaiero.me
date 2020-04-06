import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router'
import Link from 'next/link'

const breadcrumbNameMap = {
   '/test': 'Test',
   '/test/a': 'Test A',
   '/apps/2': 'Application2',
   '/apps/1/detail': 'Detail',
   '/apps/2/detail': 'Detail',
};

function SiteBreadcrumb( props ) {
   const router = useRouter();
   const pathSnippets = router.pathname.split('/').filter(i => i);
   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
         <Breadcrumb.Item key={url}>
            <Link href={url}><a>{breadcrumbNameMap[url]}</a></Link>
         </Breadcrumb.Item>
      );
   });
   const breadcrumbItems = [
      <Breadcrumb.Item key="home">
         <Link href="/"><a>Home</a></Link>
      </Breadcrumb.Item>,
   ].concat(extraBreadcrumbItems);
   return (
      <Breadcrumb style={props.style}>{breadcrumbItems}</Breadcrumb>
   );
};

export default SiteBreadcrumb;