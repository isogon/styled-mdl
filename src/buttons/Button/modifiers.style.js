import { css } from 'styled-components';

import { getters as g, makeModifier, darken } from '../../util';

const raised = makeModifier('raised', css`
  background: ${g.gray};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
              0 3px 1px -2px rgba(0,0,0,.2),
              0 1px 5px 0 rgba(0,0,0,.12);
  &:hover, &:focus {
    background: ${g.gray};
  }
  &:active {
    background: ${g.mediumGray};
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),
                0 1px 10px 0 rgba(0,0,0,.12),
                0 2px 4px -1px rgba(0,0,0,.2);
  }
`);

const fabSize = ({ mini }) => (mini ? '2.5rem' : '3.5rem');

const fab = makeModifier('fab', css`
  border-radius: 50%;
  font-size: 1.5rem;
  height: ${fabSize};
  margin: auto;
  min-width: ${fabSize};
  width: ${fabSize};
  padding: 0;
  overflow: hidden;
  background: ${g.gray};
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),
              0 1px 1px 0 rgba(0,0,0,.24);
  position: relative;
  line-height: normal;
  &:active {
     box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),
                 0 1px 10px 0 rgba(0,0,0,.12),
                 0 2px 4px -1px rgba(0,0,0,.2);
  }
`);

const icon = makeModifier('icon', css`
  border-radius: 50%;
  font-size: 1.5rem;
  height: 2rem;
  margin-left: 0;
  margin-right: 0;
  min-width: 2rem;
  width: 2rem;
  padding: 0;
  overflow: hidden;
  color: inherit;
  line-height: normal;
`);

const raisedColorize = (color) => css`
  background: ${g[color]};
  color: #fff;
  &:hover, &:focus {
    background: ${g[color]};
  }
  &:active {
    background: ${({ theme }) => darken(theme[color], 0.2)};
  }
`;

const colorize = (color) => css`
  color: ${g[color]};
  ${(props) => (props.raised || props.fab) && raisedColorize(color)}
`;

const colored = makeModifier('colored', colorize('primary'));
const accent = makeModifier('accent', colorize('accent'));

const modifiers = [raised, fab, icon, colored, accent];

export default modifiers;
