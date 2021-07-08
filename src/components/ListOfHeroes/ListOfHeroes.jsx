import React from 'react'
import { handleGetHeroes } from 'hooks/handleGetHeroes'
import Hero from 'components/Hero/Hero'

const ListOfHeroes = () => {
  const { heroes } = handleGetHeroes()

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
