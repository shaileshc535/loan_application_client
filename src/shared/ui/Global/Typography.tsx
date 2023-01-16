/* eslint-disable prettier/prettier */
import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface TextProps {
  type?: 'H1' | 'H2' | 'H3' | 'H4' | 'heading';
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ type, children, className }) => {
  if (type === 'H1') {
    return (
      <h4 className={classNames('font-playfair text-4xl font-black uppercase', className)}>
        {children}
      </h4>
    );
  }

  if (type === 'heading') {
    return (
      <h4
        className={classNames('font-playfair text-sm md:text-lg font-black uppercase', className)}
      >
        {children}
      </h4>
    );
  }

  if (type === 'H3') {
    return (
      <h4 className={classNames('font-playfair text-2xl font-black uppercase', className)}>
        {children}
      </h4>
    );
  }

  if (type === 'H4') {
    return (
      <h4 className={classNames('font-playfair font-black uppercase', className)}>{children}</h4>
    );
  }

  return <p className={className}>{children}</p>;
};

export { Text };
