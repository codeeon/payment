import DeliveryAddress from '@/components/delivery-info/Address';
import Orderer from '@/components/Orderer';
import PriceList from '@/components/PriceList';
import Product from '@/components/product/ProductList';
import React from 'react';

const Order = () => {
  return (
    <>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-2'>
          <DeliveryAddress />
          <Orderer>codeeon</Orderer>
          <Product />
        </div>
        <div>
          <PriceList />
        </div>
      </div>
    </>
  );
};

export default Order;
