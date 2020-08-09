import { Button, Descriptions, PageHeader } from 'antd';

const PostHeader = (props) => {
   return (
      <>
         <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={props.title}
            subTitle={props.description}
         >
            <Descriptions size="small" column={3}>
               <>{props.author ? <Descriptions.Item label="Author">{props.author}</Descriptions.Item> : null}</>
               <>{props.pub_date ? <Descriptions.Item label="Publish Date">{props.pub_date}</Descriptions.Item> : null}</>
               <>{props.update_date ? <Descriptions.Item label="Updated On">{props.update_date}</Descriptions.Item> : null}</>
               <>{props.tags ? <Descriptions.Item label="Tags">{props.tags}</Descriptions.Item> : null}</>
            </Descriptions>
         </PageHeader>
      </>
   )
}

export default PostHeader;
