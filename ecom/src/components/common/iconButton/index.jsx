/* eslint-disable react/prop-types */
import './index.scss';
import cn from 'classnames';

const IconButton = ({ onClick, icon, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={cn('icon-button', className)}
    >
      {icon}
    </button>
  );
};

export default IconButton;