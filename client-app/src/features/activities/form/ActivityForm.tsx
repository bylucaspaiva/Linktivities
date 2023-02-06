import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';

interface Props {
  closeForm: () => void;
  activity: Activity | undefined;
}

const ActivityForm = ({ closeForm, activity: selectedActivity} : Props) => {
  
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity);
  }

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" />
        <Form.Input placeholder="Description" />
        <Form.Input placeholder="Category" />
        <Form.Input placeholder="Date" />
        <Form.Input placeholder="City" />
        <Form.Input placeholder="Venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button onClick={closeForm} floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  )
}

export default ActivityForm