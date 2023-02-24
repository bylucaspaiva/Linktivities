import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
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
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  )
}

export default ActivityListItem