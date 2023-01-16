/* eslint-disable prettier/prettier */
import classNames from 'classnames';
import React from 'react';
import { Text } from '../Global/Typography';
import { Icon } from '../Icon/Icon';

export enum TagType {
  SUCCESS = 'success',
  PRIMARY = 'primary',
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  UPCOMING = 'upcoming',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no-show',
  PAID = 'paid',
}

interface TagProps {
  label: string;
  type?: TagType;
}

const tagConfig: { [key: string]: string } = {
  primary: 'bg-blue-accent text-blue',
  success: 'bg-success-accent text-success',
  pending: 'bg-warning-accent text-warning',
  confirmed: 'bg-confirmed-accent text-confirmed',
  cancelled: 'bg-cancelled-accent text-cancelled',
  noShow: 'bg-noShow-accent text-noShow',
  upcoming: 'bg-upcoming-accent text-upcoming',
  paid: 'bg-paid-accent text-paid',
};

const tagIconColor: { [key: string]: string } = {
  primary: '#33B0D8',
  success: '#7FE05C',
  pending: '#FCDD2F',
  confirmed: '#6DFFEE',
  cancelled: '#D3D3D3',
  noShow: '#E95353',
  upcoming: '#EED23C',
  paid: '#4ED91E',
};

const Tag: React.FC<TagProps> = ({ label, type = 'primary' }) => {
  const tagStyles = tagConfig[type];

  return (
    <div
      className={classNames('flex w-fit flex-row items-center rounded-full py-1.5 px-3', tagStyles)}
    >
      {['cancelled', 'no-show'].includes(type) && (
        <Icon name="close" size={20} color={tagIconColor[type]} />
      )}
      {!['cancelled', 'no-show'].includes(type) && (
        <Icon name="check" size={20} color={tagIconColor[type]} />
      )}
      <Text className="uppercase text-xs font-bold py-1.5 px-3">{label}</Text>
    </div>
  );
};

export { Tag };
