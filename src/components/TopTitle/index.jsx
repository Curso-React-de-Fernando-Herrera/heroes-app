import PropTypes from 'prop-types'
import { Title } from './styles'

const TopTitle = ({ title }) => {
  return (
    <Title>Heroes de { title }</Title>
  )
}

TopTitle.propTipes = {
  title: PropTypes.string.isRequired
}

export default TopTitle
