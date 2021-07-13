import TopTitle from 'Components/TopTitle'
import ListOfHeroes from 'Components/ListOfHeroes'
import BigBannerRight from 'Components/BigBannerRight'

const DCPage = () => {
  return (
    <>
      <TopTitle title="DC" />
      <ListOfHeroes publisher={"DC Comics"} />
      <BigBannerRight />
    </>
  )
}

export default DCPage
