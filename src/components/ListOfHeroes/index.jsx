import SingleHero from 'Components/SingleHero'
import { getHeroesByPublisher } from 'services/getHeroesByPublisher'

import { Container } from './styles'

const ListOfHeroes = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <Container>
      {
        heroes.map((hero) => <SingleHero key={hero.id} hero={hero} />)
      }
    </Container>
  )
}

export default ListOfHeroes
