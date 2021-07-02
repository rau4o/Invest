import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UpdateBalanceModalComponent} from "../../modal-page/update-balance-modal/update-balance-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ReturnInvestorModalComponent} from "../../modal-page/return-investor-modal/return-investor-modal.component";
import {OfferService} from "../../../services/offer.service";

@Component({
  selector: 'app-invests-page',
  templateUrl: './invests-page.component.html',
  styleUrls: ['./invests-page.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class InvestsPageComponent implements OnInit {

  invests = [];

  state = 'default';
  showDetails = true;

  constructor(private dialog: MatDialog,
              private offerService: OfferService){ }

  ngOnInit(): void {
    this.invests = this.offerService.getOfferList();
  }

  onToggle() {
    this.showDetails = !this.showDetails;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  onReturn() {
    const dialogRef = this.dialog.open(ReturnInvestorModalComponent, {
      width: '480px',
      height: '553px',
    });
  }
}
