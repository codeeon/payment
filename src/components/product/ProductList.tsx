import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Item from './Item';
import Subtitle from '../ui/subtitle';
import Title from '../ui/title';

const Product = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문 상품</CardTitle>
      </CardHeader>
      <hr />
      <CardContent>
        {/* itemData.map(item => Item id=item.id item Item) */}
        {/* <Item id='itemData.id'>itemData</Item> */}
        {/* <Item id='itemData.id'>itemData</Item> */}
        <Item>아이템 데이터</Item>
        <Item>아이템 데이터</Item>
      </CardContent>
      <hr />
      <CardFooter className='flex justify-between mt-6'>
        <Title>주문 금액</Title>
        <Subtitle className='mr-2'>6,000 ₩</Subtitle>
      </CardFooter>
    </Card>
  );
};

export default Product;
