import React, { PropTypes } from 'react';

import { ListItemBase } from './List.style';

const getPropsWithClassName = (props) => {
  if (props.twoLine) {
    return { ...props, className: 'twoLine' };
  }
  if (props.threeLine) {
    return { ...props, className: 'threeLine' };
  }

  return {};
};

export default function ListItem(props) {
  return <ListItemBase {...getPropsWithClassName(props)} />;
}

ListItem.propTypes = {
  twoLine: PropTypes.bool,
  threeLine: PropTypes.bool,
};
