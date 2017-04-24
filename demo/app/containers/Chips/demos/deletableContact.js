import React from 'react';
import { Chip } from 'material-components';

const avatarImg = 'https://getmdl.io/templates/dashboard/images/user.jpg';

/* eslint-disable no-alert */
const demo = () => (
  <Chip deletable contact={{ src: avatarImg }}>
    Deletable Contact Chip
  </Chip>
);

const caption = 'Contact Chip';
const code = `<Chip deletable contact={{ src: avatarImg }}>
  Deletable Contact Chip
</Chip>`;

export default { demo, caption, code };
