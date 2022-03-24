import { BasicBusinessModel } from './common/basicBusinessModel.model';

export interface BigMallModel extends BasicBusinessModel {
    addresses: Address[]
}
interface Address {
    address_name: string;
    street_number: string;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
        x: number;
        y: number
    }
}