/* eslint-disable react/prop-types */
import Currency from '../../common/currency';
import IconButton from '../../common/iconButton';
import './cartItem.scss';
import { X } from 'lucide-react';
import productImg from "../../../assets/product/img.jpg";



const CartItem = ({data,onRemove}) => {


  return (
    <li className="cart-item">
      <div className="cart-item__image-container">
        <img 
          src={data?.image_url || productImg} 
          alt="Image" 
          className="cart-item__image"
        />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__remove-btn">
          <IconButton 
            onClick={() => onRemove(data)} 
            icon={<X size={15} />} 
          />
        </div>
        <div className="cart-item__info">
          <div className="cart-item__name-section">
            <p className="cart-item__name">{data?.name}</p>
          </div>
          <div className="cart-item__variant-section">
            <p className="cart-item__variant">{data?.brand}</p>
            <p className="cart-item__variant cart-item__variant--separator">
              {data?.category}
            </p>
          </div>
          <Currency value={data?.price || 0} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;