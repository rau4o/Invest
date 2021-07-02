import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-verify-email-page',
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.scss']
})
export class VerifyEmailPageComponent implements OnInit {

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
      this.router.navigateByUrl('/auth/ein');
    }, 2000);
  }
}
