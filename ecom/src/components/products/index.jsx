/* eslint-disable no-unused-vars */
import { Button, Form, message, Result } from "antd";
import NoResult from "../common/noResult";
import ProductCard from "./components/productCard";
import "./index.scss";
import {  useState } from "react";
import ProductModal from "./components/productModal";
import { useCreateProductMutation, useGetAllProductsQuery } from "../../features/private/api";
import TopBarProgress from "react-topbar-progress-indicator";

const ProductList = () => {
  const [openModal,setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const [addProduct,{isLoading}] = useCreateProductMutation();
  const {data:items,isLoading:loading,isError} = useGetAllProductsQuery();

  const title = "Products";

  const closeModal = () => {
    setOpenModal(false);
    form.resetFields();
  };

  const addNewProduct = (values) => {
    let body = {
      name: values?.name,
      brand: values?.brand,
      category: values?.category,
      price: Number(values?.price),
      description: values?.description,
      image_url: values?.image_url,
    }

    addProduct(body)
      .unwrap()
      .then((response) => {
        message.success("Product Added Successfully");
        form.resetFields();
        setOpenModal(false);
      })
      .catch((err) => {
        let error = err.data?.message ? err.data?.message : err.data.error;
        message.error(error);
      });
  };

  if (loading) {
    return <TopBarProgress />;
  } else if (isError) {
    return (
      <Result
        status="500"
        title="Oops! Some error occured in the system."
        subTitle="Try to refresh page or login again!"
      />
    );
  }

  return (
    <div className="product-list">
      {
        openModal && (
          <ProductModal openModal={openModal} form={form} closeModal={closeModal} addNewProduct={addNewProduct} isLoading={isLoading} />
        )
      }
      <h3 className="product-list__title">{title}</h3>
      <div
        style={{ display: "flex", justifyContent: "end", alignItems: "center",marginBottom:"20px" }}
      >
        <Button
          type="primary"
          onClick={() => setOpenModal(true)}
        >
          Add New
        </Button>
      </div>
      {items?.length === 0 && <NoResult />}
      <div className="product-list__grid">
        {items?.map((item) => (
          <ProductCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
