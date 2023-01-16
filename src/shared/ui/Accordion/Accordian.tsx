/* eslint-disable prettier/prettier */
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Heading from '../Heading/Heading';
import IconButton from '../IconButton/IconButton';

interface AccordionInterface {
  footer?: any;
  title: string;
  classes?: any;
  content?: any;
  titleType?: 'heading' | 'text';
  descriptionType?: 'lg' | 'sm';
  children?: ReactNode;
}

const Accordion: React.FC<AccordionInterface> = ({
  title,
  content,
  footer,
  classes,
  titleType,
  children,
  descriptionType,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={classNames(classes)}>
      <div className="row align-items-center">
        <div className="col">
          <div className="row align-items-center">
            {titleType === 'heading' ? (
              <Heading title={title} type="md" color="primary" classes="col" />
            ) : (
              <span className="accordion-title">{title}</span>
            )}
            <IconButton
              size={18}
              icon="chevron-down"
              onClick={() => setOpen(!open)}
              iconClass={classNames({ open }, 'accordion-icon')}
            />
          </div>
          {children && <div className="mt-3">{children}</div>}
          <div className={classNames({ open }, 'accordion-card-body col')}>
            {descriptionType === 'lg' && <p className="accordion-card-body-content">{content}</p>}
            {descriptionType === 'sm' && (
              <p className="accordion-card-body-content-sm">{content}</p>
            )}
          </div>
        </div>
      </div>
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  );
};

export default Accordion;
