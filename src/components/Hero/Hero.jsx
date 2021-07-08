import React from 'react'

const Hero = ({ superhero, publisher }) => {
  return (
    <article>
      <p>{superhero} - {publisher}</p>
    </article>
  )
}

export default Hero
