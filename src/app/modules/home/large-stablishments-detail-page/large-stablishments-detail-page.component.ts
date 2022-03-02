import { Component, OnInit } from '@angular/core'
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
import jsPDF from "jspdf"


@Component({
  selector: 'app-large-stablishments-detail-page',
  templateUrl: './large-stablishments-detail-page.component.html',
  styleUrls: ['./large-stablishments-detail-page.component.css'],
})
export class LargeStablishmentsDetailPageComponent implements OnInit {
  LSData: LargeStablishmentModel[] = []
  file = new jsPDF();


  constructor(private lSservice: LargeStablishmentsService) {}

  ngOnInit(): void {
    this.lSservice.getBigMalls().subscribe((data) => {
      this.LSData = data.results

    })
  }

  openPDF(): void {
      /*Simplify object array to match data on view*/
      const clone = this.LSData.map(ls=>{
      const simpleLS:any = Object.assign({},ls);
      delete simpleLS.activities;
      return simpleLS;
    })
      /*pdf library to define line wrapping*/
      let lines:string[] =this.file.splitTextToSize(JSON.stringify(clone,null,"\t"), 200);

      /*Clean extra top lines*/
      lines.splice(0,2);
      let i=0
      let j=this.LSData.length/2; //to define number of pages


      while(i<j){

        const next = lines.splice(0,38);// fits two objects per page
        this.file.text(next,20,20);
        this.file.addPage();
        i++
      }

      this.file.save('BABCN_Search.pdf');
  }
}
