import styled from 'styled-components'
import { Paper } from '@material-ui/core';

export const WheelPage = styled.div`
  padding: 10px;
  padding-bottom: 50px;
  text-align: center;
  
  & h1 {
    text-align: left;
    margin-left: 20px;
    letter-spacing: 1;
    font-family: cursive;
    font-size: 50px;
    margin-bottom: 10px;
  }
`

export const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 50px;
  background-color: white;
  border-radius: 4px;
  width: 75%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
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
  margin-top: 50px;
  border-radius: 4px;
  width: max-content;
`

export const WheelInstructions = styled.div`
  flex: 50%;
`

export const CallToAction = styled.div`
  font-size: 18px;
`

export const Svg = styled.svg`
  margin: 0 10px;
`
