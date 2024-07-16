import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
const HomeTemplate = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="min-h-screen">
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',

                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: '100vh'
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Copyright © Bành Bối Thạnh
            </Footer>
        </Layout>
    );
};
export default HomeTemplate;