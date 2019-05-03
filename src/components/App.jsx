import React, { useState } from 'react'

import TextInput from './TextInput'

const App = () => {
  const [ count, setCount ] = useState(0)

  return (
    <section>
      <h1 onClick={ () => setCount(count + 1) }>Frigg Off, Barb!</h1>
      <p>Those are my { count } personal burgers!</p>
      <TextInput />
      <TextInput />
    </section>
  )
}

export default App
