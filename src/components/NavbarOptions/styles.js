import styled from '@emotion/styled'
import { Link as LinkStyled } from 'wouter'

import { colors } from 'Styles/variables'

export const NavLinks = styled.nav`
  display: grid;
  flex-direction: column;
  margin-top: 100px;
  row-gap: .5rem;
`

export const Link = styled(LinkStyled)`
  font-size: 24px;
  text-decoration: none;
  color: ${ ({ active }) => 
    active ? colors.white : colors.whiteTransparent
  };
`