import React from 'react';
import { Chip } from 'material-components';

/* eslint-disable no-alert */
const demo = () => (
  <Chip deletable onClickDelete={() => alert('You clicked delete!')}>
    Basic Chip
  </Chip>
);

const caption = 'Deletable Chip';
const code = `<Chip deletable onClickDelete={() => alert('You clicked delete!')}>
  Basic Chip
</Chip>`;

export default { demo, caption, code };
