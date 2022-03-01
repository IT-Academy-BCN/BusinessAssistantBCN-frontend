
import { EconomicActivityModel } from "./common/economic-activity.model";
export interface LargeStablishmentModel {
  
  name:string;
  web: string;
  email: string;
  phone: number| null;
  activities: EconomicActivityModel;
  addresses:Address[]
}

  interface Address{
    street_name:string;
    number: string;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
      x: number;
      y: number
    }
  }

