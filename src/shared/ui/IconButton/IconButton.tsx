import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

interface IconButtonInterface {
  type?: string;
  icon: string;
  size?: number;
  onClick?: MouseEventHandler;
  href?: string;
  iconClass?: string;
}

const IconButton: React.FC<IconButtonInterface> = ({
  icon,
  size,
  type,
  href,
  onClick,
  iconClass,
}) => {
  // eslint-disable-next-line no-nested-ternary
  const classes = type === 'light' ? 'icon-light' : type === 'dark' ? 'icon-dark' : '';
  return (
    <div>
      {!href ? (
        <button type="button" className={`icon-button ${classes}`} onClick={onClick}>
          <Icon name={icon} size={size || 16} className={classNames(iconClass)} />
        </button>
      ) : (
        <a className={`icon-button ${classes}`} href={href}>
          <Icon name={icon} size={size || 16} className={classNames(iconClass)} />
        </a>
      )}
    </div>
  );
};

export default IconButton;
