'use client';

import React from 'react';

import { CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import Subtitle from '../../ui/subtitle';

type ItemData = {
  id: number;
  company: string;
  title: string;
  selection: string;
  imgurl: string;
  quantity: number;
  price: number;
  deliveryPrice: number;
};

type Props = { children: ItemData };

const Item = ({ children }: Props) => {
  return (
    <div>
      <CardHeader>
        <CardDescription>itemData.company</CardDescription>
        <Subtitle>itemData.title</Subtitle>
        <CardDescription>itemData.selection</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between'>
        <div>itemData.imgurl</div>
        <div>itemData.quantity x itemData.price</div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <p>배송비 itemData.deliveryPrice ₩</p>
      </CardFooter>
    </div>
  );
};

export default Item;
