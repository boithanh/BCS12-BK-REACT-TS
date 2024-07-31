import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import { useSelector } from 'react-redux';
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

const HomeTemplate = () => {
    const { hoten } = useSelector((state) => state.userSlice);

    const arrNavlink = [
        {
            to: path.homePage,
            content: "Home",
        },
        {
            to: path.baiTapDienThoai,
            content: "Bài tập điện thoại",
        },
        {
            to: path.demoRedux,
            content: "Demo Redux",
        },
        {
            to: path.baiTapLacXiNgau,
            content: "Bài Tập Lắc Xí Ngầu",
        },
    ];

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
                    justifyContent: 'space-between'
                }}
            >
                <div className="demo-logo" />
                <div>
                    {arrNavlink.map((item, index) => {

                        return (

                            <NavLink to={item.to} className={({ isActive }) => {
                                // trong hàm trả về class của thẻ NavLink có cung cấp thuộc tính isActive giúp kiểm tra path của url và giá trị trong thuộc tính to của thẻ xem giống nhau hay không, nếu giống trả về kết quả true và ngược lại
                                // console.log(isActive);
                                return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
                            }} key={index} >
                                {item.content}
                            </NavLink>
                        )
                    })}
                </div>
                <div className='text-white uppercase'>{hoten}</div>
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