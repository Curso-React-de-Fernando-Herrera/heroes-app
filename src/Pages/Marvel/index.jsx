import TopTitle from 'Components/TopTitle'
import ListOfHeroes from 'Components/ListOfHeroes'
import BigBannerRight from 'Components/BigBannerRight'

const MarvelPage = () => {
  return (
    <>
      <TopTitle title="Marvel" />
      <ListOfHeroes publisher={"Marvel Comics"} />
      <BigBannerRight />
    </>
  )
}

export default MarvelPage
