import getAllHeroes from 'services/getAllHeroes'

export const handleGetHeroes = ({ condition } = {}) => {
  const heroes = getAllHeroes()

  return {
    heroes
  }
}
