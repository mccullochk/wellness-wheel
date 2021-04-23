import styled from 'styled-components'

export const Form = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 20px;

  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  height: 50px;
  border: 3px solid ${props => (props.error ? '#b10101' : '#0c1a65')};
  padding: 0 1.5rem;
  border-radius: 5px;

  min-width: 300px;

  font-size: 1rem;
  background: transparent;
  font-weight: 500;
  outline: none;
  transition: all 200ms ease;

  &::placeholder {
    color: black;
  }
  border-color: ${props => (props.error ? '#b10101' : '#0c1a65')};
`

export const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  background-color: #0c1a65;
  color: #fff;
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 200ms ease;

  flex-basis: 200px;
  flex-shrink: 0;

  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

export const Disclaimer = styled.p`
  font-size: 12px;
`
