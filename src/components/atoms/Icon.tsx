import React from 'react';
import { Colors, colorsMap, IconType } from '../../commons/types';
import { ReactComponent as ChevronDown } from '../../icons/chevron-down.svg';
import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';

interface IconProps {
  style?: React.CSSProperties;
  color?: Colors;
  type: IconType;
}

function Icon(props: IconProps) {
  const { type, color, style, } = props;

  const map = {
    chevronLeft: ChevronLeft,
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    chevron: ChevronDown
  };

  const iconProps = {
    stroke: color ? colorsMap[color] : undefined,
    style,
  };

  return React.createElement(map[type], iconProps);
}

export default Icon;
