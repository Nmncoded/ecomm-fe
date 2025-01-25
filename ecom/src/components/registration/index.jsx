/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./index.scss";
import { Form, Input, Button, message, Checkbox, Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useRegisterUserMutation } from "../../features/auth/api";
import TopBarProgress from "react-topbar-progress-indicator";

const Registration = () => {
  const [register, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [errorMsg, setError] = useState(null);

  const handleRegistration = async (values) => {
    // console.log(values);
    register({
      body: {
        name: values?.name,
        contact_no: values?.contact_no,
        password: values?.password,
        email: values?.email,
        role_id: values?.role_id,
      },
    })
      .unwrap()
      .then((res) => {
        message.success(res?.message);
        navigate("/login");
      })
      .catch((err) => {
        message.error(err?.data?.error);
      });
  };

  const onChange = () => {
    // console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="registration">
      {isLoading && <TopBarProgress />}

      <div className="registration-wrapper">
        {/* <div className="form-outer-text">
          <img src={Logo} alt="Triplan-logo" width="140" />
        </div> */}
        <Form
          form={form}
          name="registration"
          className="registration-form"
          onFinish={handleRegistration}
          layout="vertical"
          requiredMark={false}
        >
          <div className="form-top">
            <span className="form-top-heading-text">Create an Account</span>
            <div className="form-top-subheading-text-area">
              <span className="bottom-text-left">Have an account?</span>
              <Link to="/login">
                <span className="bottom-text-right">Login</span>
              </Link>
            </div>
          </div>
          <Form.Item label="Role" name="role_id" style={{ minWidth: "208px" }} rules={[{ required: true, message: "Please select role!" }]} >
            <Radio.Group size="large" >
              <Radio.Button value={1}>ADMIN</Radio.Button>
              <Radio.Button value={2}>USER</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="name"
            label="Full Name"
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
              placeholder="Jhon Doe"
              type="text"
            />
          </Form.Item>
          <Form.Item
            name="contact_no"
            label="Mobile No."
            rules={[
              {
                required: true,
                message: "Please input mobile number!",
              },
            ]}
          >
            <Input size="large" placeholder="8888 8888" type="text" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input size="large" placeholder="Jhone@gmail.com" type="email" />
          </Form.Item>
          <Form.Item
            //style={{ marginBottom: "0px" }}
            name="password"
            label="Set Password"
            rules={[
              {
                required: true,
                message: "Please input Password!",
              },
            ]}
            hasFeedback
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
          <Form.Item
            //style={{ marginBottom: "0px" }}
            name="confirm-password"
            label="Confirm Password"
            rules={[
              {
                required: true,
                message: "Please confirm Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            dependencies={["password"]}
            hasFeedback
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
              className="registration-form-button"
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
              Create account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
