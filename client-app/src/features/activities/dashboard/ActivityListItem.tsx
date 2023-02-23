import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label } from 'semantic-ui-react'

const ActivityListItem = () => {
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