'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Title from './ui/title';

type Props = { children: string };

const Orderer = ({ children }: Props) => {
  return (
    <Card className='w-[600px]'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>주문자</CardTitle>
        <Title className='font-semibold pb-1'>{children}</Title>
      </CardHeader>
    </Card>
  );
};

export default Orderer;
