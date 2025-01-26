/* eslint-disable react/prop-types */
import './summary.scss';
import Currency from '../../common/currency';
import { Button } from 'antd';

const Summary = ({totalPrice, items}) => {
  return (
    <div className="summary">
      <h2 className="summary__title">Order summary</h2>
      <div className="summary__content">
        <div className="summary__total">
          <div className="summary__total-label">Order total</div>
          <Currency value={totalPrice || 0} />
        </div>
      </div>
      <Button 
        disabled={items?.length === 0} 
        // onClick={onCheckout} 
        className="summary__checkout-btn"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;