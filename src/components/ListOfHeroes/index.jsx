import SingleHero from 'Components/SingleHero'
import { getHeroesByPublisher } from 'services/getHeroesByPublisher'
import { getHeroesByName } from 'services/getHeroesByName'

import { Container } from './styles'

const ListOfHeroes = ({publisher, name}) => {
  const heroes = (publisher && getHeroesByPublisher(publisher)) || (name && getHeroesByName(name))
  
  return (
    <Container>
      {
        heroes.map((hero) => <SingleHero key={hero.id} hero={hero} />)
      }
    </Container>
  )
}

export default ListOfHeroes
