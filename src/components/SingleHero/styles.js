import styled from '@emotion/styled'
import { colors } from 'Styles/variables'

export const Container = styled.article`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  max-height: 216px;
  border-radius: 30px;
`

export const Information = styled.div`
  background-color: ${ colors.gray };
  padding: 1rem 1rem 0;
  border-radius: 0 30px 30px 0;
  min-width: 240px;
  overflow: hidden;
  position: relative;
`

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-family: 'poppins-light';
  font-weight: 400;
  text-align: right;
`

export const HeroeName = styled.span`
  font-size: 14px;
  font-family: 'poppins-light';
  font-weight: 400;
  display: block;
  text-align: right;
  `

export const FirstAppearance = styled.p`
  font-size: 16px;
  font-family: 'poppins-light';
`

export const ViewMoreButton = styled.button`
  display: flex;      
  width: 120px;
  position: relative;
  margin-left: auto;
  left: 1rem;
  background-color: ${colors.primary};
  border: none;
  padding: .25rem 1rem;
  font-size: 14px;
  border-top-left-radius: 15px;
  color: ${colors.white};
  font-family: 'poppins-light';
  cursor: pointer;

  :hover {
    text-shadow: 0 0 4px ${colors.whiteTransparent};
  }
`