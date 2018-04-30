import Color from 'color'

const lumaPercent = (c) => {
  const [r, g, b] = Color(c).rgbArray()

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma / 255
}

export default lumaPercent
