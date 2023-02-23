import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store';

interface Props {
  activity: Activity;
}

const ActivityListItem = ({activity} : Props) => {

  const {activityStore} = useStore();
  const {deleteActivity, loading} = activityStore;
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  content="Delete"
                  name={activity.id}
                  loading={loading && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated="right"
                  color="red"
                /> 
                <Button
                  as={Link} to={`/activities/${activity.id}`}
                  content="View"
                  floated="right"
                  color="blue"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
  )
}

export default ActivityListItem