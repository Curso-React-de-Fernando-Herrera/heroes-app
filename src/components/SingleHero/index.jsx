import PropTypes from 'prop-types'
import {
  Container,
  Image,
  Information,
  Title,
  HeroeName,
  FirstAppearance,
  ViewMoreButton
} from './styles'

const SingleHero = ({hero}) => {
  const { id, superhero, first_appearance, alter_ego } = hero

  return (
    <Container>
      <Image src={`assets/heroes/${id}.jpg`} alt={superhero} />
      <Information>
        <Title>{superhero}</Title>
        <HeroeName>{alter_ego}</HeroeName>
        <FirstAppearance>{first_appearance}</FirstAppearance>
        <ViewMoreButton>Ver mas</ViewMoreButton>
      </Information>
    </Container>
  )
}

SingleHero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default SingleHero
