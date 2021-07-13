import styled from '@emotion/styled'
import { colors } from 'Styles/variables'

export const Word = styled.h1`
  writing-mode: vertical-rl;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  color: ${colors.gray};
  font-family: 'poppins-light';
  letter-spacing: 4rem;
  text-align: center;
  font-size: 144px;
  z-index: -1;
`