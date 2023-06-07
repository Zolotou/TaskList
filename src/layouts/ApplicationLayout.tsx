import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { headerStyle, footerStyle } from "../stylesheets/styles";

const { Header, Footer, Content } = Layout;

export const ApplicationLayout: React.FC<{}> = () => {
  const { xs } = useBreakpoint();
  const header = headerStyle(xs);
  const footer = footerStyle(xs);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={header}>TASK LIST</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={footer}>Footer placeholder</Footer>
    </Layout>
  );
};
