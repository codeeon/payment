import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Item from './[id]/Item';
import Subtitle from '../ui/subtitle';
import Title from '../ui/title';

const Product = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문 상품</CardTitle>
      </CardHeader>
      <CardContent>
        {/* itemData.map(item => Item id=item.id item Item) */}
        <Item id='itemData.id'>itemData</Item>
        <Item id='itemData.id'>itemData</Item>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Title className=''>주문 금액</Title>
        <Subtitle className='mr-2'>6,000 ₩</Subtitle>
      </CardFooter>
    </Card>
  );
};

export default Product;
