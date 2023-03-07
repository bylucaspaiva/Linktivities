import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search'/>
        Oops - We've looked everywhere but could not found what are you looking for!
      </Header>
      <Segment.Inline>
        <Button as={Link} to='./activities'>Return to activities page.</Button>
      </Segment.Inline>
    </Segment>
  )
}

export default NotFound