import React from 'react'
import { TitleContent } from './styles'

const Title = () => {
  return (
    <TitleContent>Busca a tus heroes <br/> favoritos</TitleContent>
  )
}

export default React.memo(Title)
