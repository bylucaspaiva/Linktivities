import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, FormField, Label, Segment } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';

export default observer(function ActivityForm () {

  const {activityStore} = useStore();
  const { updateActivity, createActivity, loading, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
    category: Yup.string().required("The activity description is required"),
    date: Yup.string().required("The activity description is required"),
    venue: Yup.string().required("The activity description is required"),
    city: Yup.string().required("The activity description is required"),


  })
  
  useEffect(() => {
    if(id) loadActivity(id).then(activity => setActivity(activity!))
  }, [id, loadActivity]);

//   function handleSubmit() {
//     if(!activity.id) {
//       activity.id = uuid();
//       createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
//     }else{
//       updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
// ;
//     }
//   }

//   function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//     const {name, value} = event.target;
//     setActivity({...activity, [name]: value})
//   }

  if(loadingInitial) return <LoadingComponent content='Loading activity...'/>
  

  return (
    <Segment clearing>
      <Formik 
        validationSchema={validationSchema}
        enableReinitialize 
        initialValues={activity} 
        onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className='ui form'>
            <MyTextInput placeholder="Title"  name='title' />
            <MyTextArea rows={3} placeholder="Description"  name='description' />
            <MyTextInput placeholder="Category"  name='category' />
            <MyTextInput placeholder="Date"  name='date' />
            <MyTextInput placeholder="City" name='city' />
            <MyTextInput placeholder="Venue" name='venue' />
            <Button floated="right" positive type="submit" content="Submit" loading={loading} />
            <Button as={Link} to='/activities' floated="right" type="button" content="Cancel" />
        </Form>
        )}
      </Formik>
      
    </Segment>
  )
})
