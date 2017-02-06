import React from 'react';
import styled from 'styled-components';
import { Theme } from 'material-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App(props) {
  return (
    <Theme>
      <AppWrapper>
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </Theme>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};
