import React from 'react'
import { Word } from './styles'

const BigBannerRight = ({ word = 'Heroes' }) => {
  return (
    <Word>{word}</Word>
  )
}

export default React.memo(BigBannerRight)
