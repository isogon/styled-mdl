import { css } from 'styled-components'
import { getters as g } from '../util'

export function typoPreferredFont(usePreferred = true) {
  return usePreferred
    ? css`
        font-family: ${g.preferredFont};
      `
    : null
}

const contrast = (cc, opacity) => (cc ? `opacity: ${opacity};` : null)

export function typoDisplay4(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 112px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.04em;
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoDisplay3(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 56px;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.02em;
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoDisplay2(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 45px;
    font-weight: 400;
    line-height: 48px;
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoDisplay1(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoHeadline(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    -moz-osx-font-smoothing: grayscale;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoTitle(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.02em;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoSubhead(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.04em;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoSubhead2(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoBody2(colorContrast = false, usePreferred = false) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: ${usePreferred ? 500 : 'bold'};
    line-height: 24px;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoBody1(colorContrast = false, usePreferred = false) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoCaption(colorContrast = false, usePreferred = false) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoBlockquote(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    position: relative;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.35;
    letter-spacing: 0.08em;
    &:before {
      position: absolute;
      left: -0.5em;
      content: '“';
    }
    &:after {
      content: '”';
      margin-left: -0.05em;
    }
    ${contrast(colorContrast, 0.54)}
  `
}

export function typoMenu(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoButton(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoIcon() {
  return css`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    word-wrap: normal;
    font-feature-settings: 'liga';
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  `
}
