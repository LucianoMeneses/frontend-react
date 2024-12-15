import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

import './styles.css'

const ProductDetails = () => {
  return (
    <div className="product-datails-container">
      <div className="base-card product-datails-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>VOLTAR</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="nome-produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2354.78} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição produto</h2>
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nostrum fugiat, nisi minus odio blanditiis omnis ipsa
                odit quisquam. Repudiandae hic odio quo possimus dicta adipisci
                sequi, distinctio iusto? In!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
