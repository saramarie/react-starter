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
        <Button label="Click Here" color="alert" />
        <Button label="Click Here" color="warning" />
        <Button label="Click Here" color="success" />
      </div>
    )
  }
}

export default App
