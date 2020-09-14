import React from 'react';
import { Layout, Menu} from 'antd';
import LeftMenu from '../component/LeftMenu';
// import PrivateRoute from "../component/PrivateRoute";
const { Header, Content, Sider } = Layout;

class IndexPages extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        {/*侧边栏，写成一个组件，根据返回来的数据生成的Menu*/}
                        <LeftMenu/>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {/*通过路由显示的内容，Route写在这里*/}
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export {IndexPages as default}