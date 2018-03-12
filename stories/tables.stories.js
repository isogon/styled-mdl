import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import DataTable from '../src/components/tables/demos/DataTable.js';

storiesOf('Tables', module)
  .addDecorator(wrapStory)
  .add('Data Table', () => <DataTable />);
