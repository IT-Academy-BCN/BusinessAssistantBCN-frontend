import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, 
               private fb: FormBuilder, 
               private userService: UserService ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/');
  }

}
