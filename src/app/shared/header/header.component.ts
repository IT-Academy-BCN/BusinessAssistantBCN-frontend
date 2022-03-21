import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LoginFormComponent } from 'src/app/modules/login/login-form/login-form.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user:string|null="user"; //This user is a mockup to be replaced with a real user object when that exists
  constructor(
    private modalService: NgbModal, 
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.user ? this.auth.setUserLogged(true) : this.auth.setUserLogged(false)   // To be replaced when user login works
  }

  // This function opens login component modal service
  public openLoginForm() {
    const modalRef = this.modalService.open(LoginFormComponent, {
      windowClass: 'modal-holder',
      modalDialogClass:'modal-sizer',
      centered: true,
    });
  }

  logout(){
    this.auth.setUserLogged(false)
    this.user=null;
  }
}
