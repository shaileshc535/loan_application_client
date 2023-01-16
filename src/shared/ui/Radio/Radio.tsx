/* eslint-disable prettier/prettier */
import React, { InputHTMLAttributes } from 'react';

const Radio: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => (
  <div className="flex items-center">
    <input
      {...rest}
      type="radio"
      className="bg-transparent border-secondary-white focus:ring-offset-0 focus:ring-0 outline-0 w-6 h-6 text-light-gold focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
    />
  </div>
);

export { Radio };
