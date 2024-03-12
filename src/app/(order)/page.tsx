import DeliveryAddress from '@/components/delivery-info/Address';
import Orderer from '@/components/Orderer';
import Product from '@/components/product/ProductList';
import React from 'react';

const Order = () => {
  return (
    <>
      <div>
        <header>
          <h1>Header</h1>
        </header>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <DeliveryAddress />
            <Orderer>codeeon</Orderer>
            <Product />
          </div>
          <div>결제 상세</div>
        </div>
      </div>
    </>
  );
};

export default Order;
