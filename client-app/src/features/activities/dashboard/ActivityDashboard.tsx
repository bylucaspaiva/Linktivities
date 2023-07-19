import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";
import { PagingParams } from "../../../app/models/pagination";

export default observer (function ActivityDashboard() {

  const { activityStore } = useStore();
  const {loadActivities, actitivyRegistry, setPagingParams, pagination} = activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1))
    loadActivities().then(() => setLoadingNext(false));
  }

  useEffect(() => {
    if(actitivyRegistry.size <= 1) loadActivities();
  }, [loadActivities, actitivyRegistry.size])

  if (activityStore.loadingInitial && !loadingNext) return <LoadingComponent content='Loading Activities...' />

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
        <Button
          floated="right"
          content="More..."
          positive
          onClick={handleGetNext}
          loading={loadingNext}
          disabled={pagination?.totalPages === pagination?.currentPage}
        />
      </Grid.Column>
      <GridColumn width={6}>
        <ActivityFilters />
      </GridColumn>
    </Grid>

  )
}) 