import styled from 'styled-components';
import { shadow2dp } from 'material-components';

export const Bar = styled.div`
  box-sizing: border-box;
  background: #3F51B5;
  color: white;
  width: 100%;
  padding: 16px;
`;

export const Bg = styled.div`
  background: white;
  height: 148px;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 200px;
  text-align: ${({ align }) => align};
  ${shadow2dp()}
`;
