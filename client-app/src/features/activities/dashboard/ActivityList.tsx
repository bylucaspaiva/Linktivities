import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer(function ActivityList () {
  const {activityStore} = useStore();
  const {deleteActivity, activitiesByDate, loading} = activityStore;
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }



  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map(activity => (
          
        ))}
      </Item.Group>
    </Segment>
  )
})
