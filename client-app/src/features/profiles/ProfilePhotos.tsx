import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useState } from 'react'
import { Card, Header, TabPane, Image, Grid, GridColumn, Button } from 'semantic-ui-react'
import { Photo, Profile } from '../../app/models/profile'
import { useStore } from '../../app/stores/store';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';

export default observer(function ProfilePhotos() {
  const { profileStore: { isCurrentUser, uploadPhoto, uploading, loading, deletePhoto, setMainPhoto, profile } } = useStore();
  const [addPhotoMode, setAddPhotoMode] = useState<boolean>(false);
  const [target, setTarget] = useState('');

  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  function handleSetMainPhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
    setTarget(e.currentTarget.name);
    setMainPhoto(photo);
  }

  function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
    setTarget(e.currentTarget.name);
    deletePhoto(photo);
  }

  return (
    <TabPane>
      <Grid>
        <GridColumn width={16} >
          <Header icon={`image`} content='Photos' />
          {isCurrentUser && (
            <Button
              floated='right' basic
              content={addPhotoMode ? 'Cancel' : 'Add Photo'}
              onClick={() => setAddPhotoMode(!addPhotoMode)}
            />
          )}
        </GridColumn>
        <GridColumn width={16}>
          {addPhotoMode ? (
            <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
          ) : (
            <Card.Group itemsPerRow={5}>
              {profile?.photos?.map(photo => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  {isCurrentUser && (
                    <Button.Group fluid widths={2}>
                      <Button 
                        basic
                        color='green'
                        content='Main'
                        name={'main' + photo.id}
                        disabled={photo.isMain}
                        loading={target === 'main' + photo.id && loading}
                        onClick={e => handleSetMainPhoto(photo, e)}
                      />
                      <Button 
                        basic 
                        color='red' 
                        icon='trash'
                        loading={target === photo.id && loading}
                        onClick={e => handleDeletePhoto(photo, e)}
                        disabled={photo.isMain}
                        name={photo.id}
                      />
                    </Button.Group>
                  )}
                </Card>
              ))}
            </Card.Group>
          )}
        </GridColumn>
      </Grid>

    </TabPane>
  )
})


