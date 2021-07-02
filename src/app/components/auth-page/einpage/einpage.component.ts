import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-einpage',
  templateUrl: './einpage.component.html',
  styleUrls: ['./einpage.component.scss']
})
export class EINPageComponent implements OnInit {

  ein = '';
  loading = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    if (this.ein !== '') {
      this.loading = true;
      setTimeout(() => {
        this.router.navigateByUrl('/auth/login');
      }, 2000);
    }
  }
}
