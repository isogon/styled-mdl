import styled from 'styled-components'
import { ifProp } from 'styled-tools'

export const IconStyle = styled.span.attrs({
  children: ({ children, name }) => name || children,
  size: ({ size, lg, sm, xl }) =>
    size
    || xl && 48
    || lg && 32
    || sm && 16
    || 24,
})`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${ifProp('size', (p) => p.size / 16, 1.5)}rem;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  word-wrap: normal;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`
