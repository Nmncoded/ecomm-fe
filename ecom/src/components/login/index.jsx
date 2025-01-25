/* eslint-disable no-unused-vars */
import {  useState } from "react";
import { Form, Input, Button, message, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.scss";
import { useLoginUserMutation } from "../../features/auth/api";
import TopBarProgress from "react-topbar-progress-indicator";

const Login = () => {
  const [login, { isLoading }] = useLoginUserMutation();
  // const navigate = useNavigate();
  const [form] = Form.useForm();
  const [errorMsg, setError] = useState(null);
  // const username = 'superadmin@tripplanner.com'
  // const password = 'Pass@123'

  const handleLogin = async (values) => {
    login({ body: values })
      .unwrap()
      .then(() => { })
      .catch((err) => {
        message.error(err?.data?.error);
      });
  };

  const onChange = () => {
    // console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="login">
      {isLoading && <TopBarProgress />}

      <div className="login-wrapper">
        <Form
          form={form}
          name="login"
          className="login-form"
          onFinish={handleLogin}
          layout="vertical"
          requiredMark={false}
        >
          <div className="form-top">
            <span className="form-top-heading-text">Welcome!</span>
            <span className="form-top-subheading-text">Login</span>
          </div>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input Username!",
              },
            ]}
          >
            <Input
              size="large"
              // prefix={
              //   <UserOutlined
              //     style={{ color: "#BFBFBF" }}
              //     className="site-form-item-icon"
              //   />
              // }
              placeholder="Username"
              type="email"
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "0px" }}
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // prefix={
              //   <LockOutlined
              //     style={{ color: "#BFBFBF" }}
              //     className="site-form-item-icon"
              //   />
              // }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <span
            className="roboto_flex"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontStyle: "oblique",
              color: "#787879a6",
              fontWeight: "400",
              letterSpacing: "0.2px",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </span>
          {/* {message && <span style={{ color: "red" }}>{message}</span>} */}
          {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}

          <div className="checkbox-area">
            <Checkbox onChange={onChange} />
            <span className="checkbox-text">
              By Clicking on Continue, you agree to our{" "}
              <span style={{ fontWeight: "600" }}>Terms & Conditions</span> and{" "}
              {""}
              <span style={{ fontWeight: "600" }}>Privacy Policy</span>
            </span>
          </div>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button
              loading={isLoading}
              type="primary"
              danger
              htmlType="submit"
              className="login-form-button"
              block
              size="large"
              //shape="round"
              style={{
                // backgroundColor: "#F66",
                border: "1px solid #F66",
                textTransform: "uppercase",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeight: "500",
                letterSpacing: "0.8px",
              }}
            >
              Login
            </Button>
          </Form.Item>
          <div className="form-bottom-text-area">
            <span className="bottom-text-left">Don’t have account?</span>
            <Link to="/registration">
              <span className="bottom-text-right">Create an account</span>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
