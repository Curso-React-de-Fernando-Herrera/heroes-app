import React from 'react'
import Navbar from 'components/Navbar/Navbar'

import { Container } from './styles'
import Title from 'components/Title/Title'

const Header = () => {
  return (
    <Container>
      <Title />
      <Navbar />
    </Container>
  )
}

export default Header
