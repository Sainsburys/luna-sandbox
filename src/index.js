import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Card } from '../luna-react'

import './index.scss'

function App() {
  return (
    <Container soft className="ln-u-soft-top">
      <Card padded className="c-example-component">
        <h1 className="ln-u-flush-bottom">
          Hello World
        </h1>
      </Card>
    </Container>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
