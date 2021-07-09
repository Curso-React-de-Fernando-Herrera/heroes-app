import { heroes as heroesList } from "data/heroes"

const getHeroesById = ({ heroeId }) => {
  const heroes = heroesList.find(({ id }) => heroeId === id)

  return {
    heroes
  }
}

export default getHeroesById
