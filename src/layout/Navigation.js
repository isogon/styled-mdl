import styled from 'styled-components';

export const alignment = ({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start');

export default styled.nav`
  display: flex;
  flex-wrap: nowrap;
  user-select: none;
  flex: 1;
  justify-content: ${alignment};
`;
