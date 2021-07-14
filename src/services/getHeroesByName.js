import { heroes } from "data/heroes"

export const getHeroesByName = (name) => {
  return heroes.filter(({ superhero }) => decodeURI(name).trim() === superhero.toLowerCase().trim())
}