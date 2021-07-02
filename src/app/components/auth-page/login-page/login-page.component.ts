import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hidePassword = true;
  loading = false;

  loginForm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  submit() {
    this.loginForm.reset();
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/add-offer-first-time');
    }, 2000);
  }

  goTo() {
    this.router.navigateByUrl('/auth/forgot-password');
  }
}
