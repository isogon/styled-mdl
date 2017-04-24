import React from 'react';
import { Chip } from 'material-components';

/* eslint-disable no-alert */
const demo = () => (
  <Chip contact={{ color: 'teal|600', textColor: 'white', text: 'A' }}>
    Contact Chip
  </Chip>
);

const caption = 'Contact Chip';
const code = `<Chip contact={{ color: 'teal|600', textColor: 'white', text: 'A' }}>
  Contact Chip
</Chip>`;

export default { demo, caption, code };
