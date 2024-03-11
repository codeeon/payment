import { cn } from '@/lib/utils';
import React, { ReactNode, TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLParagraphElement> & { children: string | ReactNode };

const Text = ({ className, children, ...props }: Props) => {
  return (
    <span
      className={cn('', className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
