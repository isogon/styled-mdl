import styled from 'styled-components';
import { setDisplayName } from 'recompose';

export const CardMenu = setDisplayName('CardMenu')(styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`);
