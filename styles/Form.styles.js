import LoadingButton from '@material-ui/lab/LoadingButton'
import styled from 'styled-components'

export const Form = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 40px;

  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  height: 50px;
  border: 3px solid ${props => (props.error ? '#b10101' : 'rgb(31, 131, 25)')};
  padding: 0 1.5rem;
  border-radius: 5px;
  margin-bottom: 12px;
  width: 80%;

  font-size: 1rem;
  background: transparent;
  font-weight: 500;
  outline: none;
  transition: all 200ms ease;

  &::placeholder {
    color: #656565;
  }
  border-color: ${props => (props.error ? '#b10101' : 'rgb(19, 88, 14)')};
`

export const Button = styled(LoadingButton)`
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  background-color: rgb(19, 88, 14) !important;
  color: #fff !important;
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 200ms ease;

  flex-basis: 200px;
  flex-shrink: 0;

  opacity: ${props => (props.disabled ? 0.3 : 1)};

  &:hover {
    background-color: rgba(19, 88, 14, 0.8);
  }
`

export const Disclaimer = styled.p`
  font-size: 12px;
`
