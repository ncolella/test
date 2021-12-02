import React from 'react';
import classNames from 'classnames';
import {
  TextSizes,
  Levels,
  Alignments,
  alignmentsMap, Colors,
} from '../../commons/types';

interface SubtitleProps {
  level: Levels;
  size?: TextSizes;
  color?: Colors;
  alignment?: Alignments;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Subtitle(props: SubtitleProps) {
  const { style, color, size, level, alignment = 'center', children } = props;

  const classes = classNames({
    subtitle: true,
    [`is-${size}`]: Boolean(size),
    [`has-text-${color}`]: Boolean(color),
    [alignmentsMap[alignment]]: true,
  });

  return React.createElement(
    `h${level}`,
    { style, className: classes },
    children
  );
}

export default Subtitle;
