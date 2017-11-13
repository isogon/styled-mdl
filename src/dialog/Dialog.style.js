import { compose, setDisplayName } from 'recompose';
import styled, { css, keyframes } from 'styled-components';
import { prop } from 'styled-tools';
import { multiply, parseInt } from 'lodash/fp';

import { getters } from '../util';
import { px } from '../util/units';
import { shadow24dp } from '../mixins';

const { dialog, animation } = getters;

const flyIn = keyframes`
  from {
    transform: translate3D(0, 5vh, 0);
  }
  to {
    transform: translate3D(0, 0, 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DialogStyle = setDisplayName('DialogStyle')(
  styled.div.attrs({
    width: compose(px, multiply(56), parseInt(10), prop('size', '5')),
  })`
    background: white;
    width: ${prop('width')};
    max-width: calc(100vw - 144px);
    max-height: 80vh;
    margin-top: -15vh;
    border-radius: 3px;
    ${shadow24dp()}
    overflow: auto;
    animation: ${fadeIn} 0.3s ${animation.default} forwards,
               ${flyIn} 0.3s ${animation.linearOutSlowIn} forwards;
  `);

export const DialogTitle = setDisplayName('DialogTitle')(
  styled.h1`
    padding: 24px 24px 0;
    margin: 0;
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
  `);

export const DialogContent = setDisplayName('DialogContent')(
  styled.div`
    padding: 20px 24px 24px;
    font-size: 16px;
    line-height: 24px;
    color: ${dialog.contentColor};
  `);

export const DialogActions = setDisplayName('DialogActions')(
  styled.div`
  position: relative;
    padding: 8px 0 8px 24px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    > * {
      margin-right: 8px;
      height: 36px;
    }
    ${({ fullWidth }) => fullWidth && css`
      padding: 0 0 8px 0;
      right: 0;
      > * {
        height: 48px;
        flex: 0 0 auto;
        width: 100%;
        padding-right: 16px;
        margin-right: 0;
        text-align: right;
        justify-content: flex-end;
        border-radius: 0;
      }
    `}
  `);
