// External Libraries
import React from 'react'

// Components
import { Button } from '@components/buttons/Button'

// Styles
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Button label="Filled" />
      <Button
        label="Outline"
        variant="outlined"
        onClick={() => alert('aaaaa')}
      />
      <Button label="Text" variant="text" loading />
    </Container>
  )
}
