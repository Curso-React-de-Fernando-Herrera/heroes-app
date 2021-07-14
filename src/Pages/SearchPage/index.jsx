import { useState } from 'react'
import { useLocation } from 'wouter'

import TopTitle from 'Components/TopTitle'
import ListOfHeroes from 'Components/ListOfHeroes'

import { SearchBar } from './styles'

const SearchPage = ({ params }) => {
  const { nameHero } = params

  const [hero, setHero] = useState("")
  const [, setLocation] = useLocation()

  const handleSearchHero = e =>   {
    e.preventDefault()
    setLocation(`/search/${hero}`)
  }

  return (
    <>
    <TopTitle body="Buscador" />
    <form onSubmit={ handleSearchHero }>
      <SearchBar
        autoComplete="off"
        placeholder="Busca tu super heroe aqui"
        type="text"
        value={hero} onChange={
          (e) => setHero( e.target.value )
        }
      />
    </form>
    <section>
      {
        typeof nameHero === 'undefined'
          ? null
          : <ListOfHeroes name={nameHero} />
      }
      
    </section>
    </>
  )
}

export default SearchPage
