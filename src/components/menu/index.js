import { MenuDivider, MenuItem, MenuList } from './Menu.style'
import Menu from './Menu.component'
import withRipple from '../../higherOrderComponents/withRipple'

Menu.Divider = MenuDivider
Menu.Item = withRipple()(MenuItem)
Menu.List = MenuList

export default Menu
