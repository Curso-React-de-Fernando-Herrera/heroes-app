import Title from 'Components/Title'
import NavbarOptions from 'Components/NavbarOptions'
import LogInOut from 'Components/LogInOut'

import { Background } from './styles'

const Navbar = () => {
  return (
    <Background>
      <Title />
      <NavbarOptions />
      <LogInOut />
    </Background>
  )
}

export default Navbar
