import React, { useState } from 'react'

const FunctionBasedForm = () => {
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null);
  const [ attemptCount, setAttemptedCount] = useState(0);
  return (
    <h1>Function Based Form</h1>
  )
}

export default FunctionBasedForm
