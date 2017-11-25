// deps
import React from 'react'

// styles
import './app.scss'

import Button from '../Button/Button'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Button label="Click Here" />
        <Button label="Click Here" color="primary" />
        <Button label="Click Here" color="secondary" />
      </div>
    )
  }
}

export default App
