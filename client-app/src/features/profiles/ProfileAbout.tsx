import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import * as Yup from "yup";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Profile } from "../../app/models/profile";

const validationSchema = Yup.object({
  displayName: Yup.string().required("The activity title is required"),
  bio: Yup.string().required("The activity description is required"),
});

export default observer(function ProfileAbout() {
  const { profileStore } = useStore();
  const { profile, updateProfile } = profileStore;

  const [isClicked, setIsClicked] = useState(false);

  function handleFormSubmit(values: Profile) {
    updateProfile(values);
  }

  useEffect(() => {
    setIsClicked(false);
  }, [profile])

  return (
    <Segment>
      {isClicked ? (
        <Formik
        validationSchema={validationSchema}
        onSubmit={(values: Profile) => handleFormSubmit(values)}
        enableReinitialize
        initialValues={profile!}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form onSubmit={handleSubmit} className="ui form">
            <MyTextInput placeholder="Name" name="displayName" />
            <MyTextArea rows={8} placeholder="Bio" name="bio" />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              floated="right"
              positive
              type="submit"
              onClick={() => setIsClicked(true)}
              content="Submit"
              loading={isSubmitting}
            />
          <Button
           onClick={() => setIsClicked(false)} content="Cancel" 
           negative
           floated="right"
          />
          </Form>
        )}
      </Formik>
      ) : (
        <Grid>
          <Grid.Column width='16'>
            <Header floated='left' icon='user' content={`About ${profile?.displayName}`}/>
            <Button
             onClick={() => setIsClicked(true)} content="Edit" 
             floated="right"
             basic
            />  
          </Grid.Column>
          <Grid.Column width='16'>
            <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>
          </Grid.Column>
          {/* <h2>Bio</h2>
          <p>{profile?.bio}</p> */}
        </Grid>
      )}
    </Segment>
  );
});
