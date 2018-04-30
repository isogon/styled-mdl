#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const startCase = require('lodash/startCase')
const dest = path.resolve(__dirname, '../stories')
const source = path.resolve(__dirname, '../src')

const components = glob.sync('/components/*', { root: source })

const createContents = (component, demos) =>
  `import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

${demos.map((demo) => `import ${demo.component} from '${demo.path}'`).join('\n')}

storiesOf('${component}', module)
  .addDecorator(wrapStory())
  ${demos.map(
    (demo) => `.add('${demo.name}', () => <${demo.component} />)`
  ).join('\n  ')}
`

const writeStoryForDemos = (demoDir) => {
  const componentName = path.basename(demoDir)
  const storyFileName = path.resolve(dest, `${componentName}.stories.js`)
  const demos = glob
    .sync(`/components/${componentName}/__demos__/*.js`, { root: source })
    .filter((file) => !file.endsWith('_shared.js'))
    .map((demo) => ({
      path: path.relative(dest, demo),
      component: startCase(path.basename(demo).replace(/.js$/, '')).replace(/\s/g, ''),
      name: startCase(path.basename(demo).replace(/.js$/, '')),
    }))

  if (demos.length) {
    fs.writeFileSync(storyFileName, createContents(startCase(componentName), demos))
  }
}

console.log(`====================
   watching demos
====================`)

components.forEach((component) => {
  writeStoryForDemos(component)

  if (fs.existsSync(`${component}/__demos__`)) {
    fs.watch(`${component}/__demos__`, (type) => {
      if (type === 'rename') {
        console.log('updating stories for', path.basename(component))
        writeStoryForDemos(component)
      }
    })
  }
})
