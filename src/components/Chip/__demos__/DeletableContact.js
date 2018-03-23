import React from 'react'

import Chip from '..'

const avatarImg = 'https://getmdl.io/templates/dashboard/images/user.jpg'

export default () => (
  <Chip deletable contact={{ src: avatarImg }}>
    Deletable Contact Chip
  </Chip>
)
