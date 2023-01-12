import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Icon } from '../Icon/Icon';
import Heading from '../Heading/Heading';

interface AccentBlockProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

interface OverlayProps {
  children: ReactNode;
}

interface ContainerProps {
  children: ReactNode;
}

interface TextRowProps {
  leftLabel: string;
  rightLabel?: string;
  leftLabelHeading?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rightLabelHeading?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isAccent?: boolean;
  imageSrc?: string;
  className?: string;
  rightAction?: () => ReactNode;
  withCollapsible?: boolean;
  isCollapsed?: boolean;
}

interface DividerProps {
  className?: string;
}

const AccentBlock: React.FC<AccentBlockProps> = ({ children, className, onClick }) => (
  <div
    onClick={onClick}
    className={classNames(
      'bg-darkest-grey rounded-lg px-4 py-6',
      { 'cursor-pointer': !!onClick },
      className
    )}
  >
    {children}
  </div>
);

const TextRow: React.FC<TextRowProps> = ({
  leftLabel,
  leftLabelHeading,
  rightLabel,
  rightLabelHeading,
  isAccent,
  imageSrc,
  rightAction,
  className,
  withCollapsible,
  isCollapsed,
}) => (
  <div className={classNames('row align-items-center', className)}>
    <div className="col row align-items-center">
      {!!imageSrc && <Image src={imageSrc} alt="Image" />}
      <Heading
        title={leftLabel}
        type={leftLabelHeading || 'xs'}
        color="accent"
        classes={classNames('font-nunito', {
          'ml-4': imageSrc,
          'font-weight-normal': !isAccent,
          'font-[600]': isAccent,
        })}
      />
      {withCollapsible && (
        <Icon
          size={15}
          name="chevron-left"
          className={classNames({ '-rotate-90': !isCollapsed, 'rotate-90': isCollapsed }, 'ml-1')}
        />
      )}
    </div>
    {!!rightLabel && (
      <Heading
        title={rightLabel}
        type={rightLabelHeading || 'xs'}
        color="accent"
        classes={classNames('font-nunito', {
          'font-weight-normal': !isAccent,
          'font-[600]': isAccent,
        })}
      />
    )}
    {!!rightAction && rightAction()}
  </div>
);

const Overlay: React.FC<OverlayProps> = ({ children }) => (
  <div className="absolute bg-primary-black w-[500px] inset-0">{children}</div>
);

const Container: React.FC<ContainerProps> = ({ children }) => (
  <main className="p-6 min-h-screen">
    <div>{children}</div>
  </main>
);

const Divider: React.FC<DividerProps> = ({ className }) => (
  <div className={classNames('h-px bg-dark-grey w-full my-6', className)} />
);

export { AccentBlock, TextRow, Divider, Overlay, Container };
