import { LargeStablishmentModel } from 'src/app/models/large-stablishment.model';
import { BigMallModel } from '../big-mall.model';
import { CommercialGalleryModel } from '../commercial-gallery.model';
import { MarketFairModel } from '../market-fair.model';
import { MunicipalMarketModel } from '../municipal-market.model';


export class SavedSearchesModel {

    name: string;
    data:  Date;
    detail: LargeStablishmentModel[] | BigMallModel[] | CommercialGalleryModel[] | MarketFairModel[] |MunicipalMarketModel[]
  
    constructor(name: string, data: Date, detail: LargeStablishmentModel[] | BigMallModel[] | CommercialGalleryModel[] | MarketFairModel[] |MunicipalMarketModel[]) {
      this.name = name;
      this.data = data;
      this.detail = detail; 
    }
  
  }