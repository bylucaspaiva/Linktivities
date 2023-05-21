import { observer } from 'mobx-react-lite'
import React from 'react'
import { Card, Header, TabPane, Image } from 'semantic-ui-react'
import { Profile } from '../../app/models/profile'

interface Props {
  profile: Profile | null;
}

export default observer( function ProfilePhotos({profile}: Props) {
  return (
    <TabPane>
      <Header icon={`image`} content='Photos'/>
      <Card.Group itemsPerRow={5}>
        {profile?.photos?.map(photo => (
          <Card key={photo.id}>
            <Image src={photo.url} />
          </Card>
        ))}
      </Card.Group>
    </TabPane>
  )
})
