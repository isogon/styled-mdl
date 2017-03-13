import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles';

const DemoGroupLiteral = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 96px;
`;

const DemoWrap = styled.div`
  display: table;
`;

const Demos = styled.div`
  display: table-row;
`;

const AlignLeft = styled.span`
  text-align: left;

`;

const Demo = styled.div`
  padding: 0 40px 40px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const DemoCaptions = styled.div`
  display: table-row;
  vertical-align: middle;
  text-align: center;
  background: #fff;
  height: 48px;
`;

const DemoCaption = styled.div`
  display: table-cell;
  font-size: 13px;
  padding: 0 40px;
  height: 48px;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  position: relative;
  color: #757575;
`;

const Code = styled(SyntaxHighlighter)`
  padding: 16px 40px !important;
  background-color: rgba(0,0,0,.06) !important;
  font-size: 12px !important;
  margin: 0;
  &:first-of-type {
    padding-top: 32px !important;
  }
  &:last-of-type {
    padding-bottom: 32px !important;
  }
`;

const Padding = styled.div`
  width: 50%;
  display: table-cell;
`;

const DemoGroup = ({ demos }) => (
  <DemoGroupLiteral>
    <DemoWrap>
      <Demos>
        <Padding />
        {demos.map(({ demo }, i) => (
          <Demo key={i}><AlignLeft>{demo}</AlignLeft></Demo>
        ))}
        <Padding />
      </Demos>
      <DemoCaptions>
        <Padding />
        {demos.map(({ caption }, i) => (
          <DemoCaption key={i}>{caption}</DemoCaption>
        ))}
        <Padding />
      </DemoCaptions>
    </DemoWrap>
    {demos.map(({ code }, i) => (
      <Code key={i} language="javascript" style={tomorrow}>
        {code}
      </Code>
    ))}
  </DemoGroupLiteral>
);

DemoGroup.propTypes = {
  demos: React.PropTypes.array,
};

export default DemoGroup;
