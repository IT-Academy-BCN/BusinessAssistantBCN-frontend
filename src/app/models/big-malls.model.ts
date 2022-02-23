import { EconomicActivityModel } from "./common/economic-activity.model";

export interface BigMallsModel {
  name:string;
  web: string;
  email: string;
  phone: number| null;
  activities: EconomicActivityModel;
  addresses:Address[]
}

  interface Address{
    address_name:string;
    street_number: string;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
      x: number;
      y: number
    }
  }
