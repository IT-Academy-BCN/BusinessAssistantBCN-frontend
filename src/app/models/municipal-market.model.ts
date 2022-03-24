   export interface MunicipalMarketModel {
      name:      string;
      web:       string[];
      email:     string[];
      phone:     string[];
      location: {
          x: number;
          y: number
      };
      addresses: Address[];
  }
  
  export interface Address {
      street_name:   string;
      street_number: number;
      zip_code:      string;
      town:          string;
      district_id:   string;
  }
  
  // export interface Location {
  //     x: number;
  //     y: number;
  // }
