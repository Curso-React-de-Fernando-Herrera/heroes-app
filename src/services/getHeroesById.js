import { heroes } from "data/heroes"

export const getHeroesById = (heroId) => {
  return heroes.filter(({ id }) => heroId === id)
}