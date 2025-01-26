import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/cartItem';
import Summary from './components/summary';
import './index.scss';
import { removeCartItem } from '../../features/private/slice';
import { message } from 'antd';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.privateData.cartItems);

  const totalPrice = cartItems?.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);


  const onRemove = (data) => {
    dispatch(removeCartItem(data.id));
    message.success('Item removed from cart.');
  }

  return (
    <div className="cart">
      <div style={{ margin: "0 auto",maxWidth: "80rem" }} >
        <div className="cart__content">
          <h1 className="cart__title">Shopping Cart</h1>
          <div className="cart__layout">
            <div className="cart__items-section">
              {cartItems?.length === 0 && (
                <p className="cart__empty-message">No items added to cart.</p>
              )}
              <ul>
                {cartItems?.map((item) => (
                  <CartItem key={item.id} data={item} onRemove={onRemove} />
                ))}
              </ul>
            </div>
            <Summary totalPrice={totalPrice} items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;