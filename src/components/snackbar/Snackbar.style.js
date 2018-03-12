import { setDisplayName } from 'recompose';
import styled from 'styled-components';

import { getters as g } from '../../util';

export const SnackbarStyle = setDisplayName('SnacbarStyle')(styled.div`
  background-color: #323232;
  display: flex;
  justify-content: space-between;
  font-family: ${g.preferredFont};
  @media(max-width: ${({ theme }) => theme.snackbarTabletBreakpoint - 1}px) {
    width: 100%;
    min-height: 48px;
  }
  @media(min-width: ${g.snackbarTabletBreakpoint}px) {
    min-width: 288px;
    max-width: 568px;
    border-radius: 2px;
    margin: 0 16px 16px 16px;
  }
`);
