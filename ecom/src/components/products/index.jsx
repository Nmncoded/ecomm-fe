import NoResult from '../common/noResult';
import ProductCard from './components/productCard';
import './index.scss';

const ProductList = () => {
  const items = [{
    id:1,
    category: 'Electronics',
    brand: 'hp',
    name: 'Laptop',
    price: 10000,
    image_url: '',
    description:'',
    tags:['','']
  },{
    id:1,
    category: 'Clothing',
    brand: 'Zara',
    name: 'Shirt',
    price: 1000,
    image_url: '',
    description:'',
    tags:['','']
  },
  {
    id:1,
    category: 'Electronics',
    brand: 'hp',
    name: 'Laptop',
    price: 10000,
    image_url: '',
    description:'',
    tags:['','']
  },{
    id:1,
    category: 'Clothing',
    brand: 'Zara',
    name: 'Shirt',
    price: 1000,
    image_url: '',
    description:'',
    tags:['','']
  },
];
  const title = 'Products'
  return (
    <div className="product-list">
      <h3 className="product-list__title">{title}</h3>
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