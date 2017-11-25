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
        <p>
          <Button label="Click Here" color="primary" size="small" />
        </p>
        <p>
          <Button label="Click Here" color="primary" isGhosted />
        </p>
        <p>
          <Button label="Click Here" color="primary" size="large" />
        </p>
      </div>
    )
  }
}

export default App
