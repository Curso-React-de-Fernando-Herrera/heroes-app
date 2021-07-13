import { heroes } from "data/heroes"

export const getHeroesById = (name) => {
  return heroes.filter(({ superhero }) => name === superhero)
}