import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-password-in-page',
  templateUrl: './change-password-in-page.component.html',
  styleUrls: ['./change-password-in-page.component.scss']
})

export class ChangePasswordInPageComponent implements OnInit {

  hidePassword = true;
  hideNewPassword = true;
  hideRepeatPassword = true;
  passwordsIsMatch = false;
  state = 'changePass';

  changePasswordForm: any;
  verifyPassForm: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.createChangePasswordForm();
    this.createVerifyCodeForm();
  }

  createChangePasswordForm() {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      repeatPassword: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    });
  }

  createVerifyCodeForm() {
    this.verifyPassForm = new FormGroup({
      first: new FormControl(null, Validators.required),
      second: new FormControl(null, Validators.required),
      third: new FormControl(null, Validators.required),
      fourth: new FormControl(null, Validators.required)
    });
  }

  onChangePassword() {
    if (this.changePasswordForm.get('newPassword').value !== this.changePasswordForm.get('repeatPassword').value) {
      this.passwordsIsMatch = true;
      return;
    }
    this.passwordsIsMatch = false;
    this.state = 'verifyEmail';
  }

  onVerify() {
    this.state = 'loading';
    setTimeout(() => {
      this.state = 'result';
    }, 2000);
  }

  onForgotPass() {
    this.router.navigateByUrl('forgot-pass-in');
  }
}
