import * as defaults from './defaults'
import createThemer from '../createThemer'

export default createThemer(defaults, (theme) => ({
  footerHeadingLineHeight: 1.7 * theme.footerHeadingFontSize,
  miniFooterHeadingLineHeight: 1.5 * theme.miniFooterHeadingFontSize,
}))
