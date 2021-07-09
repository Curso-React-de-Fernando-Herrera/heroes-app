import React from 'react'
import { handleGetHeroes } from 'hooks/handleGetHeroes'
import getHeroesByPublisher from 'services/getHeroesByPublisher'
import Hero from 'components/Hero/Hero'

const ListOfHeroes = ({ publisher }) => {
  const { heroes } = publisher
    ? getHeroesByPublisher({ publisher })
    : handleGetHeroes()

  return (
    heroes.map(({ id, superhero, publisher }) => 
      <Hero
        hey={id}
        superhero={superhero}
        publisher={publisher}
      />
    )
  )
}

export default ListOfHeroes
