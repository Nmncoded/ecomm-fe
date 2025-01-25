/* eslint-disable react/prop-types */

// import React, { useState } from "react";
import './sidebar.scss';
import { Layout, theme } from "antd";
const { Sider } = Layout;
import SidebarMenu from "./sidebarMenu";

const GlobalSidebar = ({collapsed, onCollapse}) => {
  const pathname = window.location.pathname.split("/")[1];
  const {
    token: { globalSidebarColor },
  } = theme.useToken();


  return (
    <Sider
    className="global-sidebar"
      style={{
        overflow: 'auto',
        minHeight: '88vh',
        position: 'fixed',
        left: 0,
        top: 64,
        bottom: 0,
        backgroundColor: globalSidebarColor
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="80px"
      // onBreakpoint={(broken) => {
      // }}
      onCollapse={onCollapse}
    >
      <SidebarMenu pathname={pathname} collapsed={collapsed} />
    </Sider>
  )
}

export default GlobalSidebar;