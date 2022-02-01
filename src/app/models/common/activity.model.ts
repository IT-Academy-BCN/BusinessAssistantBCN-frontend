export class ActivityModel {

    idActivity: Number;
    activityName: string;
  
    constructor(element: any) {
      this.idActivity = element.idActivity;
      this.activityName = element.activityName;
    }
  
  }