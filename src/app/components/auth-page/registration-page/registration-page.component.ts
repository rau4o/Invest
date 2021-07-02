import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  hidePassword = true;
  registrationForm: any;
  loading = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/auth/verify-email');
    }, 2000);
  }
}
