'use client';

import React, { ReactEventHandler, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Subtitle from './ui/subtitle';
import { Input } from './ui/input';
import Text from './ui/text';

const PriceList = () => {
  const [payPoint, setPayPoint] = useState('0');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const point: string = e.target.value;

    const numericValue: number = Number(point.replaceAll(',', ''));
    if (!isNaN(numericValue)) {
      setPayPoint(numericValue.toLocaleString());
    }
  };

  return (
    <Card className='min-w-96'>
      <CardHeader>
        <CardTitle>결제상세</CardTitle>
      </CardHeader>
      <hr />
      <CardContent>
        <div className='flex justify-between mt-4 mb-2'>
          <Subtitle>주문 금액</Subtitle>
          <Subtitle>6,000 원</Subtitle>
        </div>
        <div className='p-3 pr-0'>
          <div className='flex justify-between mb-2'>
            <span>상품금액</span>
            <span>0 원</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>배송비</span>
            <span>6,000 원</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>쿠폰할인</span>
            <span>0 원</span>
          </div>
        </div>
        <div className='flex justify-between mt-4 mb-1'>
          <Subtitle>포인트</Subtitle>
          <Text>
            <span className='font-semibold'>user.point 포인트 보유</span>
          </Text>
        </div>
        <div className='p-3 pr-0'>
          <div className='flex items-center gap-14 mb-2'>
            <span className='min-w-max'>포인트 사용</span>
            <div className='flex items-center gap-2'>
              <Input value={payPoint} onChange={onChange} className='text-right' />
              <span>p</span>
            </div>
          </div>
          <div className='flex justify-between'>
            <span>사용 후</span>
            <div className='flex gap-2'>
              <span>user.point-payPoint</span>
              <span>p</span>
            </div>
          </div>
        </div>
      </CardContent>
      <hr />
      <CardContent>
        <div className='flex justify-between mt-7'>
          <Subtitle>결제 예정 금액</Subtitle>
          <Subtitle>6,000 원</Subtitle>
        </div>
        <div className='p-3 pr-0'>
          <div className='flex justify-between mt-2'>
            <span className='min-w-max'>적립 예정 포인트</span>
            <div className='flex items-center gap-2'>
              <span>포인트로직(결제금액)</span>
              <span>p</span>
            </div>
          </div>
        </div>
      </CardContent>
      <hr />
      <CardFooter className='mt-6'>
        <Subtitle>결제 수단 선택</Subtitle>
      </CardFooter>
    </Card>
  );
};

export default PriceList;
