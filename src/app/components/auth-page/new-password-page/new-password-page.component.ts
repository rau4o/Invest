import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-password-page',
  templateUrl: './new-password-page.component.html',
  styleUrls: ['./new-password-page.component.scss']
})
export class NewPasswordPageComponent implements OnInit {

  hidePassword = true;
  newPassForm: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.newPassForm = new FormGroup({
      first: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      second: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  moveTo() {
    this.router.navigateByUrl('/auth/login');
  }
}
