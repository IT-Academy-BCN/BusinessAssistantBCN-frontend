import { Component, OnInit } from '@angular/core'
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
import { LoginFormComponent } from 'src/app/modules/login/login-form/login-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-large-stablishments-detail-page',
  templateUrl: './large-stablishments-detail-page.component.html',
  styleUrls: ['./large-stablishments-detail-page.component.css'],
})
export class LargeStablishmentsDetailPageComponent implements OnInit {
  LargeEstablishmentsData: LargeStablishmentModel[] = []

  constructor(private LargeEstablishmentService: LargeStablishmentsService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.LargeEstablishmentService.sendSelectedData()
      .subscribe((resp: any) => {
        this.LargeEstablishmentsData = resp.results;
        console.log("resp desde detail page: ",resp.results)
      });
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
}
