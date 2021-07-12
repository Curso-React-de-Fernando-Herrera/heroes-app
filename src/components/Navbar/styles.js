import styled from '@emotion/styled'
import { colors } from 'Styles/variables'

export const Background = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${ colors.primaryTransparent };
  max-width: 290px;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`