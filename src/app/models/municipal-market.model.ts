export interface MunicipalMarketModel {
    name: string;
    web: string[] | null;
    email: string[] | null;
    phone: number[] | null;
    location: {
        x: number;
        y: number
    },
    addresses: Address[]
}
interface Address {
    street_name: string;
    street_number: number; // Different than the rest of models (+ var type too).
    zip_code: string;
    town: string;
    district_id: string;
}
