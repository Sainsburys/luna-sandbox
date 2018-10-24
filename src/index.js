import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Card, PrimaryButton } from '../luna-react'
import { Favourites } from '../luna-react/icons'

import './index.scss'

function App() {
  return (
    <Container soft className="ln-u-soft-top" style={{ maxWidth: '600px', textAlign: 'center' }}>
      <Card padded className="c-example-component">
        <h1 className="ln-u-color-alpha">
          Welcome to Luna!
        </h1>
        <PrimaryButton onClick={() => alert('🎉')}><Favourites className="ln-u-margin-right"/> Tada!</PrimaryButton>
        <p className="ln-u-push-top">Fork this sandbox if you want to try out Luna for yourself.</p>
        <p>Check out our <a target="_blank" href="https://jsainsburyplc.github.io/luna-react/">documentation</a> to browse through the components that are available and how to customise these.</p>
      </Card>
    </Container>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
