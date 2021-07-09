import { heroes as heroesList } from "data/heroes"

const getHeroesByPublisher = ({ publisher }) => {
  const heroes = heroesList.filter(({ publisher: _publisher }) => _publisher === publisher)
  return {
    heroes
  }
}

export default getHeroesByPublisher
