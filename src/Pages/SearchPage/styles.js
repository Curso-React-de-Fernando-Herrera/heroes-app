import { colors } from 'Styles/variables'
import styled from '@emotion/styled'

export const SearchBar = styled.input`
  width: 40%;
  padding: .5rem 1rem;
  border-radius: 30px;
  border: 1px solid ${colors.gray};
  outline: none;
  font-size: 16px;
  font-family: 'poppins-light';
  margin-bottom: 50px;
`