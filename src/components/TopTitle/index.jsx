import PropTypes from 'prop-types'
import { Title } from './styles'

const TopTitle = ({ title = "", body = "Heroes de" }) => {
  return (
    <Title>{ body } { title }</Title>
  )
}

TopTitle.propTipes = {
  title: PropTypes.string.isRequired
}

export default TopTitle
