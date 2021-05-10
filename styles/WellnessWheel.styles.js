import styled from 'styled-components'
import { Paper, Divider } from '@material-ui/core'

export const WheelPage = styled.div`
  overflow: hidden;
  padding-bottom: 50px;
  text-align: center;
  
  & h1 {
    text-align: left;
    margin-left: 20px;
    letter-spacing: 1;
    font-family: cursive;
    font-size: 40px;
    margin-bottom: 20px;
  }
`

export const ItemList = styled(Paper)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  height: max-content;
  background-color: #efefef !important;
  border: 1px solid #00000036;
  margin-bottom: 36px !important;
  border-radius: 4px;
  width: max-content;
  margin: auto;
`

export const WheelInstructions = styled.div`
  margin-bottom: 20px;

`

export const CallToAction = styled.div`
  font-size: 18px;
  font-family: ${props => props.font ? props.font : ''};
`

export const Svg = styled.svg`
  margin: 0 10px;
`

export const Break = styled(Divider)`
  margin-top: 30px !important;
  margin-bottom: 20px !important;
`
