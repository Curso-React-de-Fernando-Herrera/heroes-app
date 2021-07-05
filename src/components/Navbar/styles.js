import styled from '@emotion/styled'
import { NavLink as NavLinkRouter } from 'react-router-dom'

export const NavBlock = styled.nav`
  display: flex;
`

export const NavLink = styled(NavLinkRouter)`
  margin: 0 .5rem;
  text-decoration: none;
  font-size: 16;
  border-radius: 12px;
  color: #161616;
  padding: .25rem .5rem;
  background-color: #f0f0f0;
  min-width: 80px;
  text-align: center;
  box-shadow:  
    2px 2px 5px #cccccc,
    -2px -2px 5px #ffffff
  ;

  &:active {
    box-shadow: 
        2px 2px 5px #cccccc inset,
        -4px -4px 5px #ffffff inset
    ;
  }
`