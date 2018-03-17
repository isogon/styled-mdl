import { css } from 'styled-components'
import { curry } from 'lodash/fp'

export const arrowTop = curry((size, color) => css`
  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: ${color};
    border-width: ${size};
    margin-left: -${size};
  }
`)

export const arrowRight = curry((size, color) => css`
  &:after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-left-color: ${color};
    border-width: ${size};
    margin-top: -${size};
  }
`)

export const arrowBottom = curry((size, color) => css`
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-top-color: ${color};
    border-width: ${size};
    margin-left: -${size};
  }
`)

export const arrowLeft = curry((size, color) => css`
  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-right-color: ${color};
    border-width: ${size};
    margin-top: -${size};
  }
`)
