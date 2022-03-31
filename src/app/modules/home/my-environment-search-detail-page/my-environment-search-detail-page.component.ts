import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
import { LoginFormComponent } from 'src/app/modules/login/login-form/login-form.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MunicipalMarketsService } from 'src/app/services/municipal-markets.service';
import { MunicipalMarketModel } from 'src/app/models/municipal-market.model';
import { CommonService } from 'src/app/services/common.service';

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
    this.LargeEstablishmentService.sendSelectedData()
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
  open( modal: any ){
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
