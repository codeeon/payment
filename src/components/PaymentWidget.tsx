'use client';

import React from 'react';
import { loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';

import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const PaymentWidget = () => {
  const clientKey = process.env.NEXT_PUBLIC_TOSS_WIDGET_CLIENT_KEY;
  const customerKey = 'eFDEH0HfqvuN4NPzjjpkX';

  // 결제위젯 초기화: async/await을 사용하는 경우
  async function main() {
    const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
    // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS) 비회원 결제

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-method',
      {
        value: 10000,
        currency: 'KRW',
        country: 'KR',
      },
      { variantKey: 'widgetA' }
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild className=''>
        <Button onClick={main} className='min-w-full'>
          결제하기
        </Button>
      </DialogTrigger>
      <DialogContent id='payment-method'></DialogContent>
    </Dialog>
  );
};

export default PaymentWidget;
