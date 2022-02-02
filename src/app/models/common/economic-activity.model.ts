export class EconomicActivityModel {

    codeActivity: Number;
    activityName: string;
  
    constructor(element: any) {
      this.codeActivity = element.codeActivity;
      this.activityName = element.activityName;
    }
  
  }
  