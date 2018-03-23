import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import DataTable from '../src/components/Table/__demos__/DataTable.js'

storiesOf('Table', module)
  .addDecorator(wrapStory)
  .add('Data Table', () => <DataTable />)
