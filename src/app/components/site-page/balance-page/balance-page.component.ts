import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UpdateBalanceModalComponent} from "../../modal-page/update-balance-modal/update-balance-modal.component";
import {WithdrawBalanceModalComponent} from "../../modal-page/withdraw-balance-modal/withdraw-balance-modal.component";

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.scss']
})
export class BalancePageComponent implements OnInit {

  historyItems = [
    {name: 'Update account', date: '14.04.2021, 10:45', amount: '+$10 000'},
    {name: 'Benefit from invesment', date: '14.04.2021, 10:45', amount: '+$12 000'},
    {name: 'Withdraw money', date: '14.04.2021, 10:45', amount: '-$10 000'},
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onUpdate() {
    const dialogRef = this.dialog.open(UpdateBalanceModalComponent, {
      width: '368px',
      height: '288px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    dialogRef.componentInstance.onPassDate.subscribe(res => {
        this.historyItems.push({
          name: 'Update account',
          date: '14.04.2021, 10:45',
          amount: `+$${res}`
        });
      });
  }

  onWithdraw() {
    const dialogRef = this.dialog.open(WithdrawBalanceModalComponent, {
      width: '368px',
      height: '288px',
    });
    dialogRef.componentInstance.onPassDate.subscribe(res => {
      this.historyItems.push({
        name: 'Withdraw money',
        date: '14.04.2021, 10:45',
        amount: `-$${res}`
      })
    })
  }
}
