import React, { useState } from 'react'
import { Form, Input, Button, Disclaimer } from '../styles/Form.styles'

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function Subscription({ handleSubmit, loading }) {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')

  function handleInputChange(value) {
    if (!re.test(value) && value !== "") {
      setError(true)
    } else {
      setError(false)
    }
    setEmail(value)
  }

  function onSubmit(event) {
    event.preventDefault()
    handleSubmit(email)
  }

  return (
    <Form method="post" onSubmit={onSubmit} disabled={error}>
      <Input
        type="text"
        aria-label="Your email"
        name="email_address"
        placeholder="Email address"
        onChange={event => handleInputChange(event.target.value)}
        value={email}
        error={error}
      />
      <Button type="submit" disabled={error} loading={loading} >
        Submit
      </Button>
      <Disclaimer>
        We promise to not use your email for any other purposes
      </Disclaimer>
    </Form>
  )
}
export default Subscription
