import React from 'react';
import { useState } from 'react';
import logo from '@/assets/logo.png'
import { auth } from '@/config/firebase';

import { signOut } from 'firebase/auth';  // example

import { Layout, Menu, Typography } from 'antd';

import { items } from './MenuItems';
import { useNavigate } from 'react-router-dom';
import Routes from './Routes';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const user = auth.currentUser;
    const year = new Date().getFullYear();

    const DashboardEmail = () => {
        return (
            <div className="welcome-box flex-center text-center p-4">
                <span className="welcome-text">Welcome: </span>
                <span className="user-text">{user?.email}</span>
            </div>
        );
    };
    return (
        <Layout className="min-vh-100 dashboard">
            <Sider breakpoint="md" collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="sidebar-logo" style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                    <img src={logo} alt="logo" />
                    <span className="brand-name text-white">MG Group</span>

                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                <div className='sidebar-tools'>

                </div>
            </Sider>

            <Layout>
                <Header className="px-4 bg-white d-flex align-items-center justify-content-end" style={{ height: 60 }}>
                    <Title level={5} style={{ margin: 0 }}>
                        {user?.email}
                    </Title>
                </Header>

                {/* CONTENT (CARD STYLE) */}
                <Content className="p-3 pb-0">
                    <div className="card p-3 border-0 h-100">
                        <Routes />
                        {/* <Routes>
              <Route index element={<DashboardEmail />} />
              <Route path="todos/*" element={<Todos />} />
            </Routes> */}
                    </div>
                </Content>

                {/* FOOTER */}
                <Footer className="text-center" style={{ padding: '13.5px 16px' }}>
                    © {year} MG Group. All Rights Reserved.
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Dashboard