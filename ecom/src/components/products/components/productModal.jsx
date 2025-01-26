/* eslint-disable react/prop-types */

import {
  Button,
  Input,
  Modal,
  Form,
} from "antd";

const { TextArea } = Input;


import { EnquiriesIcon } from "../../common/svgIcons";

const ProductModal = ({
  openModal,
  closeModal,
  form,
  addNewProduct,
  isLoading
}) => {

  const onValuesChange = () => {
  }

  return (
      <Modal
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <EnquiriesIcon fill="#FF6666" />
            <span
              style={{
                marginLeft: "8px",
                color: "#7047EB",
                fontFamily: "Roboto Flex",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              {"Add  Product"}
            </span>
          </div>
        }
        open={openModal}
        onCancel={closeModal}
        width={900}
        footer={null}
        maskClosable={false}
      >
        <div className="modal">
          <div className="content">
            <Form
              layout="vertical"
              onFinish={addNewProduct}
              form={form}
              onValuesChange={onValuesChange}
              name={"productForm"}
              initialValues={{
                remember: true,
                name: undefined,
                brand: undefined,
                category: undefined,
                price: undefined,
                description: undefined,
                image_url: undefined,
              }}
              autoComplete="off"
            >

              <div className="grid md:grid-cols-3 gap-x-4">
                <div className="">
                  <Form.Item
                    label="Image Url"
                    name="image_url"
                    rules={[
                      { required: true, message: "Field is required" },
                    ]}
                  >
                    <Input size="large" placeholder="Image url" />
                  </Form.Item>
                </div>
                <div className="">
                  <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[
                      { required: true, message: "Name is required" },
                    ]}
                  >
                    <Input size="large" placeholder="Name" />
                  </Form.Item>
                </div>
                <div className="">
                  <Form.Item
                    label="Brand"
                    name="brand"
                    rules={[
                      { required: true, message: "Brand is required" },
                    ]}
                  >
                    <Input size="large" placeholder="Brand" />
                  </Form.Item>
                </div>
                <div className="">
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      { required: true, message: "Category is required" },
                    ]}
                  >
                    <Input size="large" placeholder="Category" />
                  </Form.Item>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-x-4">
                <div>
                  <Form.Item label="Price" name="price">
                    <Input
                      type="number"
                      size="large"
                      placeholder="Price"
                      min="0"
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="grid">
                <Form.Item
                  label="Description"
                  name="description"
                // rules={[{ required: true, message: 'Other Requirments is required' }]}
                >
                  <TextArea rows={4} placeholder="Description" />
                </Form.Item>
              </div>

              <div className="flex justify-end">
                <Form.Item>
                  <Button
                  loading={isLoading}
                    style={{
                      width: "104px",
                      background: "#F66",
                      padding: "10px 24px",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      color: "#fff",
                      fontFamily: "Roboto Flex",
                      fontWeight: "500px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                    htmlType="submit"
                    type="primary"
                  >
                    {"Add"}
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
  );
};

export default ProductModal;
