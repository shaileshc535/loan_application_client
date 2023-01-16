/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import classNames from 'classnames';

interface StepHeaderType {
  title: string;
  count: number | null;
}

interface StepsInterface {
  headers: StepHeaderType[];
  body: any[];
}

const Steps: React.FC<StepsInterface> = (props: StepsInterface) => {
  const { headers, body } = props;
  const [active, setActive] = useState<number>(0);

  return (
    <div className="step-container">
      <div className="step-header-wrapper">
        {headers?.map((header, index) => (
          // eslint-disable-next-line react/button-has-type
          <button
            key={index}
            disabled={header.title === 'Review'}
            onClick={() => setActive(index)}
            className={classNames(
              { 'active-header': active === index },
              { 'count-header': header.count !== null },
              { disabled: header.title === 'Review' },
              'step-header-title font-nunito'
            )}
            data-ratingcount={header.count}
          >
            {header.title}
          </button>
        ))}
      </div>
      <div className="step-body-wrapper">
        {body?.map((body, index) => (
          <div key={index} className={classNames({ 'active-body': active === index }, 'step-body')}>
            {body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
