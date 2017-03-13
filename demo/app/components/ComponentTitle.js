import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Content from './Content';

const Wrap = styled.div`
  margin-bottom: 60px;
  margin-left: 32px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 80px 0 24px;
  text-transform: uppercase;
  color: rgba(0,0,0,.54);
  line-height: 40px;
`;

const Text = styled(Content)`
  margin-top: 16px;
  margin-bottom: 16px;
  color: rgba(0,0,0,.54);
`;

const ComponentTitle = ({ title, subtitle }) => (
  <Wrap>
    <Title>{title}</Title>
    <Text>{subtitle}</Text>
  </Wrap>
);

ComponentTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ComponentTitle;
