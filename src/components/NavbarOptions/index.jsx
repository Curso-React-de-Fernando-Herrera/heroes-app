import { useLocation } from 'wouter'
import { NavLinks, Link } from './styles'

const NavbarOptions = () => {
  const [location] = useLocation()

  return (
    <NavLinks>

      <Link href='/marvel' actualurl={location}>
        Marvel
      </Link>

      <Link href='/dc' actualurl={location}>
        DC
      </Link>

      <Link href='/search' actualurl={location}>
        Buscador
      </Link>

    </NavLinks>
  )
}

export default NavbarOptions
