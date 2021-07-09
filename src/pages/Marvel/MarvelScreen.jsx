import React from 'react'
import ListOfHeroes from 'components/ListOfHeroes/ListOfHeroes'

const MarvelScreen = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <ListOfHeroes publisher={"Marvel Comics"} />
    </>
  )
}

export default MarvelScreen
