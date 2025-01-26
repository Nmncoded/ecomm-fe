import React from "react";
import "./header.scss";
import { Divider, Dropdown, Layout, Row, Space, theme, Button } from "antd";
import { DownArrowIcon, Logo, UserIcon } from "../../common/svgIcons";
// import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/slice";
const { Header } = Layout;
import ProfileImage from "../../../assets/profile/profile-image.png";
import MenuIcon from "../../../assets/profile/menu-icon.png";
import { getCookie } from "../../../utils/cookie-function";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const GlobalHeader = () => {
  const navigate = useNavigate()
  const cartItems= 0;
  const {
    token: { globalHeaderColor },
  } = theme.useToken();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(false));
  };

  const profileData = getCookie("userDTO");
  console.log(profileData);

  const items = [
    {
      key: "1",
      label: (
        <>
          <div
            className="dropdown-username-area"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="username-left"
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "1px",
              }}
            >
              <img
                src={
                  profileData?.agencyDetails?.company_logo || ProfileImage || ""
                }
                alt="profile-image"
                width="64"
              />
            </div>
            <div
              className="username-right"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "8px",
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  fontFamily: "Roboto Flex",
                  color: "#2D2939",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                {profileData?.userData?.first_name}{" "}
                {profileData?.userData?.last_name}
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "Roboto Flex",
                  color: "#787879",
                  fontSize: "16px",
                }}
              >
                {profileData?.userData?.email}
              </span>
            </div>
          </div>
        </>
      ),
    },
    {
      // Divider 1
      key: "divider1",
      //isdivider: true,
      label: (
        <>
          <Divider style={{ margin: "-5px" }} />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <img src={MenuIcon} alt="" />
          <span
            style={{
              fontFamily: "Roboto Flex",
              fontSize: "16px",
              marginLeft: "5px",
              color: "#2D2939",
            }}
          >
            Profile
          </span>
        </div>
      ),
    },
    {
      // Divider 2
      key: "divider2",
      //isdivider: true,
      label: (
        <>
          <Divider style={{ margin: "-5px" }} />
        </>
      ),
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <img src={MenuIcon} alt="" />
          <span
            style={{
              fontFamily: "Roboto Flex",
              fontSize: "16px",
              marginLeft: "5px",
              color: "#2D2939",
            }}
          >
            Manage Account
          </span>
        </div>
      ),
    },
    {
      // Divider 4
      key: "divider4",
      //isdivider: true,
      label: (
        <>
          <Divider style={{ margin: "-5px" }} />
        </>
      ),
    },
    {
      key: "5",
      label: (
        <Button
          type="primary"
          block
          danger
          style={{
            textTransform: "uppercase",
            fontFamily: "Roboto Flex",
            fontSize: "16px",
            letterSpacing: "0.8px",
          }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      ),
    },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: globalHeaderColor,
        padding: "20px",
      }}
    >
      <Row style={{ width: "100%" }} justify={"space-between"} align={"middle"}>
        <Logo />
        <Row justify={"space-between"} align={"middle"}>
          <Space size={"small"}>
            <Button
              onClick={() => navigate("/cart")}
              style={{ display: "flex", alignItems: "center", borderRadius: '100%',background:'black',padding: '1rem .5rem' }}
            >
              <ShoppingBag size={20} color="white" />
              <span style={{ marginLeft: '.5rem',fontSize: '.9rem', lineHeight: '1.25rem',fontWeight:500, color:'white' }}>
                {cartItems?.length || 0}
              </span>
            </Button>
            <UserIcon />
            <Dropdown
              className="dropdown-area"
              menu={{ items }}
              placement="bottomLeft"
              arrow={{
                pointAtCenter: true,
              }}
              style={{ padding: "25px" }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <DownArrowIcon />
              </a>
            </Dropdown>
          </Space>
        </Row>
      </Row>
    </Header>
  );
};

export default React.memo(GlobalHeader);
