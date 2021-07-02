import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../../services/offer.service';
import {ReturnInvestorModalComponent} from "../../modal-page/return-investor-modal/return-investor-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  invests = [];

  constructor(private dialog: MatDialog,
              private offerService: OfferService) { }

  ngOnInit(): void {
    this.invests = this.offerService.getOfferList();
  }

  onReturn() {
    const dialogRef = this.dialog.open(ReturnInvestorModalComponent, {
      width: '480px',
      height: '553px',
    });
  }
}
