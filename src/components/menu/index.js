import { MenuDivider, MenuItem } from './Menu.style'
import Menu from './Menu.component'
import withRipple from '../../higherOrderComponents/withRipple'

Menu.Divider = MenuDivider
Menu.Item = withRipple()(MenuItem)

export default Menu
