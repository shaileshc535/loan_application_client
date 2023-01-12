/* eslint-disable prettier/prettier */
import React from 'react';
import classNames from 'classnames';

interface HeadingInterface {
  title: string | number | null | undefined;
  type: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'newxl' | 'newxxl';
  color: 'primary' | 'secondary' | 'accent';
  classes?: any;
}

const Heading: React.FC<HeadingInterface> = ({ title, type, color, classes }) => {
  return (
    <p
      className={classNames(
        classes,
        [
          { 'color-primary': color === 'primary' },
          { 'color-secondary': color === 'secondary' },
          { 'color-accent': color === 'accent' },
          { 'text-[14px] leading-[14px]': type === 'xs' },
          { 'text-[16px] leading-[22px]': type === 'sm' },
          { 'text-[22px] leading-[32px]': type === 'md' },
          { 'text-[24px] leading-[32px]': type === 'lg' },
          { 'text-[30px] leading-[38px]': type === 'xl' },
          { 'text-[48px] leading-[62px]': type === 'newxl' },
          { 'text-[64px] leading-[84px]': type === 'newxxl' },
          { 'text-[82px] leading-[122px]': type === 'xxl' },
        ],
        'font-yrsa heading'
      )}
    >
      {title}
    </p>
  );
};

export default Heading;
