/* eslint-disable react/prop-types */
import "./productCard.scss";
import {  ShoppingCart } from "lucide-react";
import IconButton from "../../common/iconButton";
import Currency from "../../common/currency";
import productImg from "../../../assets/product/img.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../../features/private/slice";


const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    navigate(`/product/${data?.id}`);
  };

  const onAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addCartItem(data));
  };

  return (
    <div onClick={onClick} className="product-card">
      <div className="product-card__image-container">
        <img src={data?.image_url || productImg} alt="Image" className="product-card__image" />
        <div className="product-card__hover-actions">
          <div className="product-card__action-buttons">
            <IconButton
              onClick={onAddToCart}
              icon={
                <ShoppingCart size={20} className="product-card__action-icon" />
              }
            />
          </div>
        </div>
      </div>
      <div className="product-card__details">
        <div className="product-card__meta">
        <p className="product-card__meta__name">{data.name}</p>
        <p className="product-card__meta__stock">{data?.in_stock ? 'In stock' : 'Sold Out'}</p>
        </div>
        <div className="product-card__meta">
          <p className="product-card__meta__brand">{data.brand}</p>
          <p className="product-card__meta__category">{data.category}</p>
        </div>
      </div>
      <div className="product-card__price">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
