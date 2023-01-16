/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import Heading from '../Heading/Heading';
import IconButton from '../IconButton/IconButton';

interface DialogInterface {
  body?: any;
  classes?: string;
  open?: boolean;
  title?: string;
  fullScreen?: boolean;
  onClose?: () => void;
  withHeader?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Dialog: React.FC<DialogInterface> = ({
  open,
  fullScreen,
  classes,
  onClose,
  title,
  body,
  withHeader = true,
  maxWidth,
}) => {
  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <div
      className={classNames('dialog-wrapper', [
        { 'dialog-fullscreen': fullScreen },
        { 'dialog-xs': maxWidth === 'xs' },
        { 'dialog-sm': maxWidth === 'sm' },
        { 'dialog-md': maxWidth === 'md' },
        { 'dialog-lg': maxWidth === 'lg' },
        { 'dialog-xl': maxWidth === 'xl' },
        { open },
      ])}
    >
      <div className={classNames('dialog-container', classes as string)}>
        {withHeader && (
          <div className="row align-items-center p-[24px] pb-[0px]">
            <div className="col">
              <Heading title={title} type="md" color="accent" />
            </div>
            <div>
              <IconButton icon="close" size={20} onClick={onClose} />
            </div>
          </div>
        )}
        <div className="dialog-body">{body}</div>
      </div>
    </div>
  );
};

export default Dialog;
