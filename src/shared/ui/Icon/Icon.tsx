/* eslint-disable prettier/prettier */
import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from './selection.json';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ color, size, name, className }) => (
  <IcomoonReact
    iconSet={iconSet}
    color={color || '#FDFDFD'}
    size={size || 25}
    icon={name}
    className={className}
  />
);

export { Icon };
