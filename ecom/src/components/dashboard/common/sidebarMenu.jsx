/* eslint-disable react/prop-types */
import React, {  useState } from "react";
import {  Menu, Row } from "antd";
import { Link } from "react-router-dom";
import { DashboardIcon, CustomersIcon } from "../../common/svgIcons";
import { getCookie } from "../../../utils/cookie-function";

const SidebarMenu = ({ pathname, collapsed }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const getRole = getCookie('role');

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  };

  const items = [
    {

      label: <Link to="/" style={{
        color: collapsed? 'white' : pathname === '' ? '#7047EB' : "#2D2939",
        fontFamily: "Roboto Flex",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginLeft: '4px'
      }} >{'Dashboard'}</Link>,
      key: '',
      icon: <DashboardIcon />,
    },
    {
      label: <Link to="/products" style={{
        color: collapsed? 'white' : pathname === 'products' ? '#7047EB' : "#2D2939",
        fontFamily: "Roboto Flex",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginLeft: '6px'
      }} >{'Products'}</Link>,
      key: 'products',
      icon: <DashboardIcon />
    }
  ];
  const adminItems = [
    {

      label: <Link to="/" style={{
        color: collapsed? 'white' : pathname === '' ? '#7047EB' : "#2D2939",
        fontFamily: "Roboto Flex",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginLeft: '4px'
      }} >{'Dashboard'}</Link>,
      key: '',
      icon: <DashboardIcon />,
    },
    {
      label: <Link to="/users" style={{
        color: collapsed? 'white' : pathname === 'users' ? '#7047EB' : "#2D2939",
        fontFamily: "Roboto Flex",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginLeft: '6px'
      }} >{'Users'}</Link>,
      key: 'users',
      icon: <CustomersIcon />
    },
  ];

  return (
    <React.Fragment
      key={pathname}
    >
      <Row
        // align={'space-between'} 
        // justify={'space-between'} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // backgroundColor: globalSidebarColor, 
          minHeight: '100%'
        }}
      >
        <Menu
          style={{ width: collapsed ? '80px' : '100%', transition: '.3s' }}
          //   theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={getRole === 'User'? items : getRole === 'Admin' ? adminItems : []}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />

      </Row>
    </React.Fragment>
  )
}

export default React.memo(SidebarMenu)