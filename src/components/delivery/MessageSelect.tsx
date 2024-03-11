'use client';

import React, { useState, MouseEvent } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const MessageSelect = () => {
  return (
    <Select>
      <SelectTrigger className='w-[350px]'>
        <SelectValue placeholder='배송메모를 선택해주세요' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='선택 안 함'>선택 안 함</SelectItem>
        <SelectItem value='문 앞에 놓아주세요'>문 앞에 놓아주세요</SelectItem>
        <SelectItem value='배송 전 미리 연락해 주세요'>배송 전 미리 연락해 주세요</SelectItem>
        <SelectItem value='부재 시 연락 부탁드려요'>부재 시 연락 부탁드려요</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MessageSelect;
