import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-return-investor-modal',
  templateUrl: './return-investor-modal.component.html',
  styleUrls: ['./return-investor-modal.component.scss']
})
export class ReturnInvestorModalComponent implements OnInit {

  savedCard = [
    {name: '1234', src: 'assets/images/Visa.png', selected: false, balance: 10000000},
    {name: '4321', src: 'assets/images/ic_bank-black.png', selected: false, balance: 100000},
    {name: '3333', src: 'assets/images/Mastercard.png', selected: false, balance: 100000},
  ];

  users = [
    {name: 'Almat Kurmashev'},
    {name: 'Galymzhan Bayseyit'},
    {name: 'Kate Green'}
  ];

  currentConfirm = this.savedCard[0];
  currentUser = this.users[0];

  constructor(public dialogRef: MatDialogRef<ReturnInvestorModalComponent>) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
