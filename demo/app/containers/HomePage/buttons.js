import React from 'react';
import { MdAdd } from 'react-icons/lib/md';

const colored = true;
const raised = true;
const accent = true;
const fab = true;
const mini = true;
const icon = true;

export default [
  {
    title: 'Flat Buttons',
    examples: [
      {
        content: 'Action',
        label: 'Default',
        props: {},
      },
      {
        content: 'Action',
        label: 'Colored',
        props: { colored },
      },
      {
        content: 'Action',
        label: 'Accent',
        props: { accent },
      },
    ],
  }, {
    title: 'Raised Buttons',
    examples: [
      {
        content: 'Action',
        label: 'Default',
        props: { raised },
      },
      {
        content: 'Action',
        label: 'Colored',
        props: { raised, colored },
      },
      {
        content: 'Action',
        label: 'Accent',
        props: { raised, accent },
      },
    ],
  }, {
    title: 'Floating Action Buttons',
    examples: [
      {
        content: <MdAdd />,
        label: 'Default',
        props: { fab },
      },
      {
        content: <MdAdd />,
        label: 'Colored',
        props: { fab, colored },
      },
      {
        content: <MdAdd />,
        label: 'Accent',
        props: { fab, accent },
      },
      {
        content: <MdAdd />,
        label: 'mini',
        props: { fab, mini },
      },
    ],
  }, {
    title: 'Icon Buttons',
    examples: [
      {
        content: <MdAdd />,
        label: 'Default',
        props: { icon },
      },
      {
        content: <MdAdd />,
        label: 'Colored',
        props: { icon, colored },
      },
      {
        content: <MdAdd />,
        label: 'Accent',
        props: { icon, accent },
      },
    ],
  },
];
