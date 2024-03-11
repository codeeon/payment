import { cn } from '@/lib/utils';
import React, { ReactNode, TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLParagraphElement> & { children: string | ReactNode };

const Subtitle = ({ className, children, ...props }: Props) => {
  return (
    <span className={cn('font-semibold text-xl', className)} {...props}>
      {children}
    </span>
  );
};

export default Subtitle;
