export class FilteredDataModel {

    zones: Array<number>;
    activities: Array<number>;
  
    constructor(zones: Array<number>, activities:Array<number>) {
      this.zones = zones;
      this.activities = activities;
    }
  
  }