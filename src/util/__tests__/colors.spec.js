import { random, round } from 'lodash'
import { rgb, rgba } from '..'

describe('rgb', () => {
  it('should wrap its input with rgb(<input>)', () => {
    const color = new Array(3)
      .fill()
      .map(() => random(0, 255))
      .join(',')
    expect(rgb(color)).toEqual(`rgb(${color})`)
  })
})

describe('rgba', () => {
  it('should wrap its inputs with rgba(<input0>, <input1>)', () => {
    const color = new Array(3)
      .fill()
      .map(() => random(0, 255))
      .join(',')
    const alpha = round(Math.random(), 2)
    expect(rgba(color, alpha)).toEqual(`rgba(${color},${alpha})`)
  })
})
