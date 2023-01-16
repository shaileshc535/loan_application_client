/* eslint-disable prettier/prettier */
import React, { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  className?: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, placeholder, label, ...rest }) => (
  <div className={classNames(['textarea', className])}>
    {!!label && <p className="text-sm mb-2 font-light">{label}</p>}

    <textarea
      {...rest}
      placeholder={placeholder}
      rows={3}
      className={classNames([
        'w-full resize-none p-5 placeholder:text-neutral-grey rounded-lg text-light-grey bg-darkest-grey appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none border-0 outline-0 border',
      ])}
    />
  </div>
);

export { Textarea };
