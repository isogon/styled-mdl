import { ifProp } from 'styled-tools'
import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/fp/get'

import { shadow2dp } from '../../../mixins'
import Checkbox from '../../Checkbox'
import Table from '..'

export const DemoTable = styled(Table)`
  ${shadow2dp()};
`

// prettier-ignore
export const DemoTh = styled(Table.HeaderCell)`
  ${ifProp('sorted', css`
    color: ${get('theme.textColorPrimary')};
  `)};
`

export default () => (
  <DemoTable>
    <Table.Header>
      <Table.Row>
        <DemoTh>
          <Checkbox />
        </DemoTh>
        <DemoTh nonNumeric sorted>
          <Table.Icon name="arrow_downward" />
          Material
        </DemoTh>
        <DemoTh>Quantity</DemoTh>
        <DemoTh>Unit price</DemoTh>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row isSelected>
        <Table.Cell>
          <Checkbox defaultChecked />
        </Table.Cell>
        <Table.Cell nonNumeric>Acrylic (Transparent)</Table.Cell>
        <Table.Cell>25</Table.Cell>
        <Table.Cell>$2.90</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Checkbox />
        </Table.Cell>
        <Table.Cell nonNumeric>Laminate (Gold on Blue)</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>$2.35</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Checkbox />
        </Table.Cell>
        <Table.Cell nonNumeric>Plywood (Birch)</Table.Cell>
        <Table.Cell>50</Table.Cell>
        <Table.Cell>$1.25</Table.Cell>
      </Table.Row>
    </Table.Body>
  </DemoTable>
)
