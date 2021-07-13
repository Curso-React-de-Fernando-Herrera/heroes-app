import styled from '@emotion/styled'
import { colors } from 'Styles/variables'

export const Button = styled.button`
  background-color: ${ colors.whiteTransparent };
  border: none;
  padding: .5rem 40px;
  width: max-content;
  font-size: 14px;
  font-family: 'poppins-medium';
  border-radius: 30px;
  margin-top: auto;
  align-self: flex-end;

  :hover {
    background-color: ${colors.white};
    box-shadow: 0 0 4px ${colors.whiteTransparent};
    cursor: pointer;
  }
`