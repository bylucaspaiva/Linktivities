import { observer } from 'mobx-react-lite'
import React from 'react'
import { Card, Header, TabPane, Image } from 'semantic-ui-react'

export default observer( function ProfilePhotos() {
  return (
    <TabPane>
      <Header icon={`image`} content='Photos'/>
      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={`/assets/user.png`} />
        </Card>
        <Card>
          <Image src={`/assets/user.png`} />
        </Card>
        <Card>
          <Image src={`/assets/user.png`} />
        </Card>
      </Card.Group>
    </TabPane>
  )
})
