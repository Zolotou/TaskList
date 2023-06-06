import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const { Header, Footer, Content } = Layout;

export const ApplicationLayout: React.FC<{  }> = () => {
    return (
        <Layout style={{ minHeight: "100vh"}}>
            <Header style={headerStyle}>TASK LIST</Header>
            <Content><Outlet /></Content>
            <Footer style ={footerStyle}>Footer placeholder</Footer>
        </Layout>
    );
};