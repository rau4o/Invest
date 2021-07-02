import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-verify-email-pass-page',
  templateUrl: './verify-email-pass-page.component.html',
  styleUrls: ['./verify-email-pass-page.component.scss']
})
export class VerifyEmailPassPageComponent implements OnInit {

  verifyForm: any;
  loading = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.verifyForm = new FormGroup({
      first: new FormControl(null, Validators.required),
      second: new FormControl(null, Validators.required),
      third: new FormControl(null, Validators.required),
      fourth: new FormControl(null, Validators.required)
    });
  }

  moveTo() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/auth/new-password');
    }, 2000);
  }

}
