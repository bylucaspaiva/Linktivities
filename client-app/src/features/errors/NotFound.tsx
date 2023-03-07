import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header>
        <Icon name='search'/>
        Oops - We've looked everywhere but could not found what are you looking for!
      </Header>
      <Segment.Inline>
        <Button as={Link} to='./activities'></Button>
      </Segment.Inline>
    </Segment>
  )
}

export default NotFound