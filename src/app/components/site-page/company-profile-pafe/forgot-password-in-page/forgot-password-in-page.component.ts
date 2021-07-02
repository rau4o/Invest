import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password-in-page',
  templateUrl: './forgot-password-in-page.component.html',
  styleUrls: ['./forgot-password-in-page.component.scss']
})
export class ForgotPasswordInPageComponent implements OnInit {

  state = 'forgotPass';
  emailForm: any;
  verifyPassForm: any;
  newPassForm: any;
  hideNewPassword = true;
  hideRepeatPassword = true;
  isMatchPassword = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
    this.createVerifyForm();
    this.createNewPassForm();
  }

  createVerifyForm() {
    this.verifyPassForm = new FormGroup({
      first: new FormControl(null, Validators.required),
      second: new FormControl(null, Validators.required),
      third: new FormControl(null, Validators.required),
      fourth: new FormControl(null, Validators.required)
    });
  }

  createNewPassForm() {
    this.newPassForm = new FormGroup({
      newPassword: new FormControl(null, [Validators.minLength(10), Validators.required]),
      repeatPassword: new FormControl(null, [Validators.minLength(10), Validators.required])
    });
  }

  onNext() {
    this.state = 'verifyEmail';
  }

  onVerify() {
    this.state = 'newPassword';
  }

  onChangePass() {
    if (this.newPassForm.get('newPassword').value !== this.newPassForm.get('repeatPassword').value) {
      this.isMatchPassword = false;
      return;
    }
    this.isMatchPassword = true;
    this.state = 'loading';
    setTimeout(() => {
      this.state = 'result';
    }, 2000);
  }
}
