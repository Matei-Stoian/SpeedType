import React from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';

type TooltipProps = {
  tooltipId: string;
  delayShow?: number;
  delayHide?: number;
  textColor?: string;
  children: React.ReactNode;
};

const Tooltip = ({
  tooltipId,
  children,
  delayHide,
  delayShow,
}: TooltipProps) => {
  return (
    <>
      {children}
      <ReactTooltip
        id={tooltipId}
        delayHide={delayHide}
        delayShow={delayShow}
      />
    </>
  );
};

export default Tooltip;