import { NavLinks, Link } from './styles'

const NavbarOptions = () => {
  return (
    <NavLinks>

      <Link href='/marvel' active={ true }>
        Marvel
      </Link>

      <Link href='/dc'>
        DC
      </Link>

      <Link href='/search'>
        Buscador
      </Link>

    </NavLinks>
  )
}

export default NavbarOptions
