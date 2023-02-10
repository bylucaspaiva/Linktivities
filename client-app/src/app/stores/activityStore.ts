import { makeAutoObservable } from "mobx";
import { Activity } from "../models/activity";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  constructor() {
    makeAutoObservable(this)
  }

  
}