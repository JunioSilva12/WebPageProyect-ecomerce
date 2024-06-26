import './styles.scss';

type Props ={
  price: number;
}

const formatPrice = (price: number) =>{
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits:0 }).format(price);
}

const ProductPrice = ({price}:Props) =>(
  <div className="product-price-container">
    <span className="product-currency">COL$</span>
    <h3 className="product-price">{formatPrice(price)}</h3>
</div>
);

export default ProductPrice