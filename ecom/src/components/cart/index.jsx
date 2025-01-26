import CartItem from './components/cartItem';
import Summary from './components/summary';
import './index.scss';

const Cart = () => {
  const cart={
    items:[
      {
        id:1,
        name:"Product 1",
        color:"Red",
        size:"M",
        price:100
      },
      {
        id:2,
        name:"Product 1",
        color:"Red",
        size:"M",
        price:100
      },
      {
        id:3,
        name:"Product 1",
        color:"Red",
        size:"M",
        price:100
      }
    ]
  };
  return (
    <div className="cart">
      <div style={{ margin: "0 auto",maxWidth: "80rem" }} >
        <div className="cart__content">
          <h1 className="cart__title">Shopping Cart</h1>
          <div className="cart__layout">
            <div className="cart__items-section">
              {cart?.items?.length === 0 && (
                <p className="cart__empty-message">No items added to cart.</p>
              )}
              <ul>
                {cart?.items?.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary totalPrice={0} items={cart?.items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;