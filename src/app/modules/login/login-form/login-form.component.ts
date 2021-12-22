import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal, private router: Router,
    private f: FormBuilder, private auth: AuthenticationService) {
  }

  loginForm!: FormGroup;
  submitted = false;


  ngOnInit(): void {
    this.changingLoginQueryParams();
    this.createLoginForm();
  }

  //Change params URL Login component Modal
  private changingLoginQueryParams() {
    const queryParams: Params = {
      home: 'login'
    };
    this.router.navigate(
      [],
      {
        queryParams: queryParams,
      });
  }

  // Close Login Modal and navigates to URL /home
  public closeLoginForm() {
    this.activeModal.close(LoginFormComponent);
    this.router.navigate(['/home']);
  }

  public createLoginForm() {
    this.loginForm = this.f.group({
      email: [" ", [Validators.required, Validators.email]],
      password: [" ", [Validators.required]]
    }, { updateOn: 'submit' });
  }

  // Getter method to access formcontrols
  get getControl(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }

  //Submit Login form
  public submitForm() {

    this.submitted = true;

    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.auth.login(this.loginForm.value).subscribe(() => {
        console.log('User is log');
      });
      this.resetForm();
      return this.loginForm.value;
    }
  }
  //Reset Login Form
  public resetForm() {
    this.loginForm.reset();
    this.submitted = false;
  }
}
