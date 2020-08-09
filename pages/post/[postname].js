import '../../assets/less/index/main.less'
import '../../assets/less/post/main.less'

import { Layout, Menu } from 'antd';

import CodeBlock from '../../components/markdown-renderers/CodeBlock'
import Footer from '../../components/Footer'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Heading from '../../components/markdown-renderers/Heading'
import Link from 'next/link'
import { NBSP } from '../../components/helper';
import PostHeader from '../../components/posts/PostHeader'
import ReactMarkdown from 'react-markdown'
import UA from '../../components/UnderlineA'
import matter from 'gray-matter'

const { Content } = Layout;

export default function PostTemplate({frontmatter, markdownBody}) {
   return (
      <>
         <Head title={frontmatter.title} />
         <Layout style={{ height: '100%' }}>
            <Header />
            <Content className="container-defaults">
            <PostHeader {...frontmatter}/>
               <article>
                  {/* <h1>{frontmatter.title}</h1> */}
                  <div className="container-post">
                     <ReactMarkdown
                        source={markdownBody}
                        renderers={{ code: CodeBlock, heading: Heading }}
                        className="post-md"/>
                  </div>
               </article>
            </Content>
            <Footer />
         </Layout>
      </>
   );
};


export async function getStaticProps({ ...ctx }) {
   const { postname } = ctx.params

   const content = await import(`../../posts/${postname}.md`)
   const data = matter(content.default)

   return {
      props: {
         frontmatter: data.data,
         markdownBody: data.content,
      },
   }
}

export async function getStaticPaths() {
   const blogSlugs = ((context) => {
      const keys = context.keys()
      const data = keys.map((key, index) => {
         let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

         return slug
      })
      return data
   })(require.context('../../posts', true, /\.md$/))

   const paths = blogSlugs.map((slug) => `/post/${slug}`)

   return {
      paths,
      fallback: false,
   }
}
