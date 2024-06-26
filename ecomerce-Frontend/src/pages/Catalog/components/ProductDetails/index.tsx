import { SetStateAction, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import  ArrowIcon  from '../../../../core/assets/images/arrow.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import { Product } from '../../../../core/types/Product';
import { makeRequest } from '../../../../core/utils/request';
import ProductInfoLoader from '../Loaders/ContentLoade';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';
import './styles.scss';


type ParamsType = {
  productId: string;
}

const ProductDetails = () => {

  const { productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/product/${productId}` })
      .then((response: { data: SetStateAction<Product | undefined>; }) => setProduct(response.data))
      .finally(() => setIsLoading(false));

  }, [productId]);


  return (
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <div className="icon-goback">
           <img src={ArrowIcon} />
          </div>
          
          <h1 className="text-goback">Volver</h1>
        </Link>
        <div className="product-details-info">


          {isLoading ? <ProductInfoLoader /> : (
            <div className="image-price">
              <div className="product-details-card text-center">
                <img src={`/src/core/assets/images/${product?.imgUrl}`} alt={product?.name}
                  className="product-details-image" />
              </div>
              <div className="product-info-fields">
                <h1 className="product-details-name">
                  {product?.name}
                </h1>

                {product?.price && <ProductPrice price={product?.price} />}
              </div>
            </div>
          )}


          <div className="product-details-card">
            {isLoading ? <ProductDescriptionLoader /> : (
              <>
                <h1 className="product-description-title">
                  Descripcion del producto
                </h1>

                <p className="product-description-text">
                  {product?.description}
                </p>
              </>
            )}

          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;