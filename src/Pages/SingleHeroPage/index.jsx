import { getHeroesById } from 'services/getHeroesById'
import TopTitle from 'Components/TopTitle'
import { Image, BlockContent, BlickInformation, NameHero, NameCaracter } from './styles'

const heroImages = require.context('assets/heroes', true) 


const SingleHeroPage = ({ params: { hero } }) => {

  const [heroInfo] = getHeroesById(hero)

  return (
    <>
      <TopTitle body="" title={heroInfo.superhero} />
      <BlockContent>
        <Image src={ heroImages(`./${heroInfo.id}.jpg`).default } alt={heroInfo.superhero} />
        <BlickInformation>
          <NameHero>Superheroe de {heroInfo.publisher}</NameHero>
          <p>
            Conocido como {
              heroInfo.characters
                .split(', ')
                .map(hero => <NameCaracter>{hero}</NameCaracter>)
            }
          </p>
          <p>Su primera aparicion fue en {heroInfo.first_appearance}</p>
        </BlickInformation>
      </BlockContent>
    </>
  )
}

export default SingleHeroPage
