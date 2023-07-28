import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'

export default observer (function ProfileAbout() {

  const { profileStore } = useStore();
  const {} = profileStore;

  return (
    <Segment>
      <Header content="About me" />
    </Segment>
  )
})
