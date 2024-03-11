import { cn } from '@/lib/utils';
import React, { ReactNode, TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLParagraphElement> & { children: string | ReactNode };

const Title = ({ className, children, ...props }: Props) => {
  return (
    <span className={cn('font-bold text-2xl', className)} {...props}>
      {children}
    </span>
  );
};

export default Title;
