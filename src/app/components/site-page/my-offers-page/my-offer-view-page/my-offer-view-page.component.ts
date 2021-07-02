import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RaiseToTopModalComponent} from '../../../modal-page/raise-to-top-modal/raise-to-top-modal.component';
import {OfferService} from '../../../../services/offer.service';

@Component({
  selector: 'app-my-offer-view-page',
  templateUrl: './my-offer-view-page.component.html',
  styleUrls: ['./my-offer-view-page.component.scss']
})
export class MyOfferViewPageComponent implements OnInit {

  offerModel: any;

  constructor(public router: Router,
              private matDialog: MatDialog,
              private offerService: OfferService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.offerModel = this.offerService.getOffer(id);
  }

  // tslint:disable-next-line:typedef
  onEditOffer(id: number) {
    this.router.navigate(['/my-offer-edit', id]);
  }

  // tslint:disable-next-line:typedef
  onOpenRaise() {
    const dialogRef = this.matDialog.open(RaiseToTopModalComponent, {
      width: '464px',
      height: '394px'
    });
  }
}
