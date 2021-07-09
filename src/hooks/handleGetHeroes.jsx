import getAllHeroes from 'services/getAllHeroes'

export const handleGetHeroes = () => {
  const heroes = getAllHeroes()

  return {
    heroes
  }
}
