import React from 'react';

type coupon = {
  id: string;
  code: string;
  name: string;
  description?: string;
  isPercentage: boolean;
  discount: number;
  minPrice: number;
  maxDiscount?: number;
};

const Coupon = () => {
  return <div>Coupon</div>;
};

export default Coupon;
