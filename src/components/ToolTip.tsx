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
        
      />
    </>
  );
};

export default Tooltip;