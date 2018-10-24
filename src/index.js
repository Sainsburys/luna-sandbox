import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Card, PrimaryButton } from '../luna-react'
import { Favourites } from '../luna-react/icons'

function App() {
  return (
    <Container soft className="ln-u-soft-top" style={{ maxWidth: '600px', textAlign: 'center' }}>
      <Card padded>
        <h1 className="ln-u-color-alpha">
          Welcome to Luna!
        </h1>
        <PrimaryButton onClick={() => alert('🎉')}><Favourites className="ln-u-margin-right"/> Tada!</PrimaryButton>
        <p className="ln-u-push-top">Fork this sandbox if you want to try out Luna for yourself.</p>
        <p>Browse the <a target="_blank" href="https://jsainsburyplc.github.io/luna-react/">documentation</a> to see what components are available and information on how to configure these.</p>
      </Card>
    </Container>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
