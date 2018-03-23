import React from 'react'

import Chip from '..'

/* eslint-disable no-alert */
export default () => (
  <Chip deletable onClickDelete={() => alert('You clicked delete!')}>
    Basic Chip
  </Chip>
)
