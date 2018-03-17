import { setDisplayName } from 'recompose'
import styled from 'styled-components'

export const SnackbarMessage = setDisplayName('SnackbarMessage')(styled.div`
  padding: 14px 12px 14px 24px;
  vertical-align: middle;
  color: white;
  float: left;
`)
