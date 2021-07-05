import React from 'react'
import { NavBlock, NavLink } from './styles'

const Navbar = () => {
  return (
    <NavBlock>
      <NavLink to="/Marvel" >
        Marvel
      </NavLink>

      <NavLink to="/dc" >
        DC
      </NavLink>

      <NavLink to="/login" >
        Login
      </NavLink>
    </NavBlock>
  )
}

export default Navbar
