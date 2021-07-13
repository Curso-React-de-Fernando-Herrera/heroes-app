import { heroes } from "data/heroes"

export const getHeroesByPublisher = (publisher) => {
  return heroes.filter(({publisher: _publisher}) => _publisher === publisher)
}