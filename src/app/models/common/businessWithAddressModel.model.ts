import { BasicBusinessModel } from './basicBusinessModel.model';
export interface BusinessWithAddressModel extends BasicBusinessModel {
    addresses: Address[]
}
interface Address {
    street_name: string;
    number: string;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
        x: number;
        y: number
    }
}