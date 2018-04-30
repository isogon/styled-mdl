import { setDisplayName } from 'recompose'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

import { typoIcon } from '../../mixins'

export const IconStyle = setDisplayName('IconStyle')(styled.i`
  ${typoIcon()}
  font-size: ${ifProp('size', (p) => `${p.size}px`, 'inherit')};
  line-height: ${ifProp('size', (p) => `${p.size}px`, 'inherit')};;
`)
