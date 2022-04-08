import { Component, OnInit, TemplateRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
import { LoginFormComponent } from 'src/app/modules/login/login-form/login-form.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MunicipalMarketsService } from 'src/app/services/municipal-markets.service';
import { MunicipalMarketModel } from 'src/app/models/municipal-market.model';
import { CommonService } from 'src/app/services/common.service';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-my-environment-search-detail-page',
  templateUrl: './my-environment-search-detail-page.component.html',
  styleUrls: ['./my-environment-search-detail-page.component.css']
})
export class MyEnvironmentSearchDetailPageComponent implements OnInit {

  LargeEstablishmentsData: LargeStablishmentModel[] = []
  municipalMarketsData: MunicipalMarketModel[]=[]

  constructor(
    private LargeEstablishmentService: LargeStablishmentsService,
    private auth: AuthenticationService,
    private modalService: NgbModal,
    private fb:FormBuilder,
    private municipalMarketsService: MunicipalMarketsService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    if(this.commonService.largeStablishmentsClicked===true){
    this.LargeEstablishmentService.getLargeStablishmentsData()
      .subscribe((resp: any) => {
        this.LargeEstablishmentsData = resp.results;
        console.log("resp desde detail page: ",resp.results)
      });
    }
    if(this.commonService.municipalMarketsClicked===true){
      this.municipalMarketsService.sendSelectedData()
      .subscribe((resp: any) => {
        this.LargeEstablishmentsData = resp.results;
        console.log("resp desde detail page: ",resp.results)
      });
    }
  }

    ngOnDestroy() {
        // if( this.zones$ != undefined ) this.zones$.unsubscribe();
    }

  // This function opens login component modal service
  public openLoginForm() {
    const modalRef = this.modalService.open(LoginFormComponent, {
      windowClass: 'modal-holder',
      modalDialogClass:'modal-sizer',
      centered: true,
    });
  }

  // Save Search Modal Form
  saveSearchForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    detalles: ['', Validators.required]
  })
  private submitted: boolean = false;

  // Save Search Modal Behavior
  open( modal: TemplateRef<any> ){
    if( !this.userLogged() ){ return }   // To be replaced when user login works
    this.submitted = false;
    this.saveSearchForm.reset()
    this.modalService.open(modal, { centered: true,})
  }

  closeModal(){
    this.modalService.dismissAll();
  }
  
  inputInvalid( input: string ): boolean {
    return  this.saveSearchForm.controls[input].invalid && this.submitted
  }

  

    generateDocument() {
        //definition of content array for the pdf table
        const dataArray: string[][] = [];
        this.LargeEstablishmentsData.forEach(element => {
            const values:any[]=[];
            values.push(element.name);
            values.push(element.web);
            values.push(element.email);
            //create a string from the address object
            values.push(`${element.addresses[0].street_name} ${element.addresses[0].number}, ${element.addresses[0].zip_code}, ${element.addresses[0].town}`)
            dataArray.push(values)
        })
        //first element is an array of the table headers
        dataArray.unshift(['Name' , 'Web' , 'E-mail' , 'Address'])


        const dd = {
            pageOrientation: 'landscape' ,

            content: [

                {
                    image: 'bactiva' ,
                    width: 120
                } ,
                {
                    text:""
                },
                {

                    layout: 'lightHorizontalLines' , // optional
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1 ,
                        widths: ['auto' , 'auto' , 'auto' , 'auto'] ,

                        body: [
                            ...dataArray

                        ]
                    },
                    margin:30
                }
            ] ,
            images: {
                bactiva: 'https://www.barcelonactiva.cat/image/layout_set_logo?img_id=37024&t=1646291579168'
            }
        };


        // @ts-ignore
        //pdfMake.createPdf(dd).open();
        return dd
    }

    openPdf(){
        // @ts-ignore
        pdfMake.createPdf(this.generateDocument()).open();
    }

    savePdf(){
        // @ts-ignore
        pdfMake.createPdf(this.generateDocument()).download();

    }



  onSubmit(){
    if( this.saveSearchForm.invalid ){
      this.submitted = true
      return
    }
    console.log( this.saveSearchForm.value );
    this.closeModal()
  }
  
  // To be replaced when user login works
  userLogged():boolean {
    if( !this.auth.userLogged ){
      this.openLoginForm()
      return false;
    }
    return true
  }
  
}
