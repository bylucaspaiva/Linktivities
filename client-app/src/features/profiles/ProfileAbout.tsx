import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import * as Yup from "yup";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";

const validationSchema = Yup.object({
  displayName: Yup.string().required("The activity title is required"),
  bio: Yup.string().required("The activity description is required"),
});

export default observer(function ProfileAbout() {
  const { profileStore } = useStore();
  const {profile, loading, updateProfile} = profileStore;

  function handleFormSubmit(values: any) {
    console.log("console:", values)
    updateProfile(values)
  }

  return (
    <Segment>
      <Header content="About me" />
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values: any) => handleFormSubmit(values!)}
        enableReinitialize
        initialValues={profile!}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form onSubmit={handleSubmit} className='ui form'>
            <MyTextInput placeholder="Name" name="displayName" />
            <MyTextArea rows={3} placeholder="Bio" name="bio" />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              floated="right" positive 
              type="submit" content="Submit" 
              loading={isSubmitting} 
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
