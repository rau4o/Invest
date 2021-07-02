import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-raise-to-top-modal',
  templateUrl: './raise-to-top-modal.component.html',
  styleUrls: ['./raise-to-top-modal.component.scss']
})

export class RaiseToTopModalComponent implements OnInit {

  items = [
    {name: 'My balance', icon: ''},
    {name: '1234', icon: 'assets/images/Mastercard.png'},
    {name: '3214', icon: 'assets/images/Visa.png'}
  ];
  current = this.items[0];
  state = 'noLoading';
  showResult: boolean;

  constructor(public dialogRef: MatDialogRef<RaiseToTopModalComponent>) { }

  ngOnInit(): void {
  }

  onPay() {
    this.state = 'loading';
    setTimeout(() => {
      this.state = 'success';
      this.showResult = this.current.name === 'My balance';
    }, 2000);
  }

  onClose() {
    this.dialogRef.close();
  }
}
