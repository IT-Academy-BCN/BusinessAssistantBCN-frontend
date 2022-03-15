import { Component, OnInit } from '@angular/core'
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-large-stablishments-detail-page',
  templateUrl: './large-stablishments-detail-page.component.html',
  styleUrls: ['./large-stablishments-detail-page.component.css'],
})
export class LargeStablishmentsDetailPageComponent implements OnInit {
  LSData: LargeStablishmentModel[] = [];





  constructor(private lSservice: LargeStablishmentsService) {}

  ngOnInit(): void {
    this.lSservice.getLgSt().subscribe((data) => {
      this.LSData = data.results

    })
  }

  generateDocument(){
    const clone = this.LSData.map(ls=>{
      const simpleLS:any = Object.assign({},ls);
      delete simpleLS.activities;
      return simpleLS;
    })
    const docDefinition = {content:JSON.stringify(clone,null,"\t")}
    pdfMake.createPdf(docDefinition).open();
  }


}
