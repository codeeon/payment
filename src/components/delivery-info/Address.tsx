'use client';

import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Subtitle from '../ui/subtitle';
import Text from '../ui/text';
import MessageSelect from './MessageSelect';
import { Button } from '../ui/button';

const Address = () => {
  return (
    <Card className='overflow-auto'>
      <CardHeader>
        <CardTitle>배송지</CardTitle>
      </CardHeader>
      <hr />
      <CardContent className='flex justify-between mt-7'>
        <div>
          <Subtitle className='block'>codeeon</Subtitle>
          <Text className='block text-slate-600 mt-1'>010-9876-5243</Text>
          <Text className='block mt-2'>강원특별자치도 춘천시 무슨길 1 (무슨동) 101호 (12345)</Text>
        </div>
        <Button size='sm'>변경</Button>
      </CardContent>
      <CardFooter>
        <MessageSelect />
      </CardFooter>
    </Card>
  );
};

export default Address;
