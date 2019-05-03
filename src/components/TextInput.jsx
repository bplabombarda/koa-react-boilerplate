import React, { useState } from 'react'

const TextInput = () => {
  const [ text, setText ] = useState('')

  return (
    <input
      onChange={ (event) => setText(event.target.value) }
      value={ text }
    />
  )
}

export default TextInput
