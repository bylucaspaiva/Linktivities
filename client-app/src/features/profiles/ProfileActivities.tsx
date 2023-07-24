import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useStore } from '../../app/stores/store';
import { Card, CardContent, CardHeader, CardMeta, Grid, Header, Image, Tab, TabProps } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserActivity } from '../../app/models/profile';
import { format } from 'date-fns';

const panes = [
  {menuItem: 'Future Events', pane: {key: 'future'}},
  {menuItem: 'Past Events', pane: {key: 'past'}},
  {menuItem: 'Hosting', pane: {key: 'hosting'}},
]


export default observer(function ProfileActivities() {
  const {profileStore} = useStore();

  const {loadUserActivities, profile, loadingActivities, userActivities} = profileStore;

  useEffect(() => {
    loadUserActivities(profile!.username);

  }, [loadUserActivities, profile]);

  const handleTableChange = (e: any, data: TabProps) => {
    loadUserActivities(profile!.username, panes[data.activeIndex as number].pane.key)
  }

  return (
    <Tab.Pane loading={loadingActivities}>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left' icon='calendar' content={'Activities'} />
        </Grid.Column>
        <Grid.Column width={16}>
          <Tab panes={panes} menu={{secondary: true, pointing: true}} onTabChange={(e, data) => handleTableChange(e, data)}/>
          <br />
          <Card.Group itemsPerRow={4}>
            {userActivities.map((activity: UserActivity) => (
              
              <Card
                as={Link}
                to={`/activities/${activity.id}`}
                key={activity.id}
              >
                <Image
                  src={`/assets/categoryImages/${activity.category}.jpg`}
                />
                <CardContent>
                  <CardHeader textAlign='center'>
                    {activity.title}
                  </CardHeader>
                  <CardMeta textAlign='center'>
                    <div>{format(new Date(activity.date), 'do LLL')}</div>
                    <div>{format(new Date(activity.date), 'h: mm a')}</div>
                  </CardMeta>
                </CardContent>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  )
})
