import React, { useState } from 'react'
import { Form, Input, Button , Disclaimer } from '../styles/Form.styles'

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function Subscription() {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  
  function validateInput(input) {
    return !re.test(email)  
  }
  function handleSubmit() {}
  function handleInputChange(value) {
    if (!re.test(value)) {
      setError(true)
    } else {
      setError(false)
    }
    setEmail(value)
  }

  return (
    <Form method="post" onSubmit={handleSubmit} disabled={error}>
      <Input
        type="text"
        aria-label="Your email"
        name="email_address"
        placeholder="Email address"
        onChange={event => handleInputChange(event.target.value)}
        value={email}
        error={error}
      />
      <Button type="submit" disabled={error}>
        Submit
      </Button>
      <Disclaimer>We promise not to use your email for any other purposes</Disclaimer>
    </Form>
  )
}
export default Subscription
