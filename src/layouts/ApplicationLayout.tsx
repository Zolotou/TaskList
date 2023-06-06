import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

export const ApplicationLayout: React.FC<{  }> = () => {
    return (
        <Layout style={{height: "100vh"}}>
            <Header>Header</Header>
            <Content><Outlet /></Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};