import styled from '@emotion/styled'
import { Link as LinkRouter } from 'react-router-dom'


export const Text = styled.h1`
  font-weight: 600;
  font-size: 16px;
  padding: .25rem 1rem;
  border-radius: 12px;
  background-color: #f0f0f0;
  color: #161616;
  box-shadow:  
    2px 2px 5px #cccccc,
    -2px -2px 5px #ffffff
  ;

  &:active {
    box-shadow: 
        2px 2px 5px #cccccc inset,
        -4px -4px 5px #ffffff inset
    ;
  }
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
`
