import { EconomicActivityModel } from "./economic-activity.model";

export interface BasicBusinessModel {
    name: string;
    web: string | null;
    email: string | null;
    phone: number | null;
    activities: EconomicActivityModel[];
}
