import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal, private router: Router) { }


  ngOnInit(): void {
    this.changingLoginQueryParams();
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
}