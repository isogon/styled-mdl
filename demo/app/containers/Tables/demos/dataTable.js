import React from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  Row,
  HeaderCell,
  TableIcon,
  Cell,
  shadow2dp,
  Checkbox,
} from 'material-components';

const DemoTable = Table.extend`
  ${shadow2dp()};
  border: 0;
  border-radius: 3px;
  ${Row}:last-child ${Cell} {
    border-bottom: 0;
  }
`;

const demo = () => (
  <DemoTable>
    <TableHeader>
      <Row>
        <HeaderCell>
          <Checkbox />
        </HeaderCell>
        <HeaderCell nonNumeric sorted>
          <TableIcon name="arrow_downward" />
          Material
        </HeaderCell>
        <HeaderCell>Quantity</HeaderCell>
        <HeaderCell>Unit price</HeaderCell>
      </Row>
    </TableHeader>
    <TableBody>
      <Row isSelected>
        <Cell>
          <Checkbox defaultChecked />
        </Cell>
        <Cell nonNumeric>Acrylic (Transparent)</Cell>
        <Cell>25</Cell>
        <Cell>$2.90</Cell>
      </Row>
      <Row>
        <Cell>
          <Checkbox />
        </Cell>
        <Cell nonNumeric>Laminate (Gold on Blue)</Cell>
        <Cell>10</Cell>
        <Cell>$2.35</Cell>
      </Row>
      <Row>
        <Cell>
          <Checkbox />
        </Cell>
        <Cell nonNumeric>Plywood (Birch)</Cell>
        <Cell>50</Cell>
        <Cell>$1.25</Cell>
      </Row>
    </TableBody>
  </DemoTable>
);

const caption = 'Data table';
const code = `<DemoTable>
  <TableHeader>
    <Row>
      <DemoTh><Checkbox /></DemoTh>
      <DemoTh nonNumeric sorted>
        <TableIcon name="arrow_downward" />
        Material
      </DemoTh>
      <DemoTh>Quantity</DemoTh>
      <DemoTh>Unit price</DemoTh>
    </Row>
  </TableHeader>
  <TableBody>
    <Row isSelected>
      <Cell><Checkbox defaultChecked /></Cell>
      <Cell nonNumeric>Acrylic (Transparent)</Cell>
      <Cell>25</Cell>
      <Cell>$2.90</Cell>
    </Row>
    <Row>
      <Cell><Checkbox /></Cell>
      <Cell nonNumeric>Laminate (Gold on Blue)</Cell>
      <Cell>10</Cell>
      <Cell>$2.35</Cell>
    </Row>
    <Row>
      <Cell><Checkbox /></Cell>
      <Cell nonNumeric>Plywood (Birch)</Cell>
      <Cell>50</Cell>
      <Cell>$1.25</Cell>
    </Row>
  </TableBody>
</DemoTable>`;

export default { demo, caption, code };
