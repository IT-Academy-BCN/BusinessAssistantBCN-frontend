import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginFormComponent } from '../../login/login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, 
              private router: Router,
              private f: FormBuilder, 
              private auth: AuthenticationService,
              private modalService: NgbModal) { }

    registerForm!: FormGroup;
    submitted = false;

  ngOnInit(): void {
    this.changingRegisterQueryParams();
    this.createRegisterForm();
  }

  private changingRegisterQueryParams() {
    const queryParams: Params = {
      home: 'register'
    };
    this.router.navigate(
      [],
      {
        queryParams: queryParams,
      });
  }

  // Close Register Modal and navigates to URL /home
  public closeRegisterForm() {
    this.activeModal.close(RegisterFormComponent);
    this.router.navigate(['/home']);
  }

  redirectLogin(){
    this.activeModal.close(RegisterFormComponent);
    this.modalService.open(LoginFormComponent, {
      windowClass: 'modal-holder',
      modalDialogClass:'modal-sizer',
      centered: true,
    });
  }

  public createRegisterForm() {
    this.registerForm = this.f.group({
      email: [" ", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    }, { updateOn: 'submit' });
  }

    // Getter method to access formcontrols
    get getControl(): { [key: string]: AbstractControl; } {
      return this.registerForm.controls;
    }

      //Submit Login form
  public submitForm() {

    this.submitted = true;

    const val = this.registerForm.value;

    if (val.email && val.password) {
      this.auth.register(this.registerForm.value).subscribe(() => {
        console.log('User is registered');
      });
      this.resetForm();
      return this.registerForm.value;
    }
  }

  //Reset Login Form
  public resetForm() {
    this.registerForm.reset();
    this.submitted = false;
  }
}
