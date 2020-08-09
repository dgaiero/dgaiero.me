import { Typography } from 'antd';

const { Title } = Typography;

const Heading = (props) => {
   return (
      <Title level={props.level > 4 ? 4 : props.level }>{props.children}</Title>
   )
};

export default Heading;
