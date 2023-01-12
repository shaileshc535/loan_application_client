import React, { InputHTMLAttributes } from 'react';

const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => (
  <input
    type="checkbox"
    className="rounded w-6 h-6 bg-transparent border-secondary-white focus:ring-offset-0 focus:ring-0 outline-none text-light-gold"
    {...rest}
  />
);

export { Checkbox };
