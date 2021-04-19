import React from 'react';
import sprite_image from '../images/sprite_image.jpg';
import coca_cola_image from '../images/coca_cola_image.jpg';

const ProductWeSell = () => {
  return (
    <>
      <div className="products-we-sell-div">
        <div className="products-child-1">
          <img src={sprite_image} alt="product-1" style={{ width: 'auto', height: '100%' }} />
          <p> SPRITE 2.25LTR, MRP - 95 </p>
        </div>

        <div className="products-child-1">
          <img src={coca_cola_image} alt="product-1" />
          <p> SPRITE 2.25LTR, MRP - 95 </p>
        </div>
        <div className="products-child-1">
          <img alt="product-1" />
          <p> SPRITE 2.25LTR, MRP - 95 </p>
        </div>
        <div className="products-child-1">
          <img alt="product-1" />
          <p> SPRITE 2.25LTR, MRP - 95 </p>
        </div>
      </div>
    </>
  );
}

export default ProductWeSell;