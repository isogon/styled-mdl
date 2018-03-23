import styled from 'styled-components'
import { setDisplayName } from 'recompose'
import { getters as g } from '../../util'

const CardMedia = setDisplayName('CardMedia')(styled.div`
  background-color: ${g.cardImagePlaceholderColor};
  background-repeat: repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-origin: padding-box;
  background-attachment: scroll;
  box-sizing: border-box;
`)

export default CardMedia
