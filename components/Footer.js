import { Button, Layout } from 'antd';
import {
   GithubOutlined,
} from '@ant-design/icons';
const { Footer } = Layout;

export default () => (
   <Footer style={{ textAlign: 'center' }}>©2020 Dominic Gaiero <Button icon={<GithubOutlined />} href="https://github.com/dgaiero/dgaiero.github.io">View on GitHub</Button></Footer>
);