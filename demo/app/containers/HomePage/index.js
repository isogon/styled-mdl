import React from 'react';
import { Button } from 'material-components';
import styled from 'styled-components';

import buttons from './buttons';

const GroupLabel = styled.h3`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 1rem;
  margin-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  padding: 3rem 2rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-bottom: 4rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 0.8rem;
  color: #888;
  font-style: italic;
  margin-top: 0.75rem;
  margin-bottom: 0;
`;


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <h1>Buttons</h1>
        {buttons.map(({ title, examples }) => (
          <div key={title}>
            <GroupLabel>{title}</GroupLabel>
            <Container>
              {examples.map(({ content, label, props }) => (
                <ButtonGroup key={label}>
                  <Button {...props}>{content}</Button>
                  <Label>{label}</Label>
                </ButtonGroup>
              ))}
            </Container>
          </div>
        ))}
      </article>
    );
  }
}
