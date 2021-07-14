import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import {
  Container,
  Image,
  Information,
  Title,
  HeroeName,
  FirstAppearance,
  ViewMoreButton
} from './styles'

const heroImages = require.context('assets/heroes', true)

const SingleHero = ({hero}) => {
  const [, setLocation] = useLocation()
  const { id, superhero, first_appearance, alter_ego } = hero

  const handleGoHero = () => setLocation(`/hero/${id}`)

  return (
    <Container>
      <Image src={heroImages(`./${id}.jpg`).default} alt={superhero} />
      <Information>
        <Title>{superhero}</Title>
        <HeroeName>{alter_ego}</HeroeName>
        <FirstAppearance>{first_appearance}</FirstAppearance>
        <ViewMoreButton onClick={ handleGoHero }>Ver mas</ViewMoreButton>
      </Information>
    </Container>
  )
}

SingleHero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default SingleHero
