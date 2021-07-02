import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {OfferService} from "../../../services/offer.service";

@Component({
  selector: 'app-my-offers-page',
  templateUrl: './my-offers-page.component.html',
  styleUrls: ['./my-offers-page.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class MyOffersPageComponent implements OnInit {

  // offers = [
  //   {amount: '$10 000', days: '90', benefit: '15%', date: '23 june 2021', status: 1, statusName: 'In review', views: 1, pdfCount: [1, 2]},
  //   {amount: '$12 000', days: '30', benefit: '25%', date: '25 june 2021', status: 2, statusName: 'Published', views: 2, pdfCount: [1, 2, 3]},
  //   {amount: '$14 000', days: '35', benefit: '35%', date: '27 june 2021', status: 3, statusName: 'Draft', views: 3, pdfCount: [1]}
  // ];
  offerList = [];
  archiveOffers = [
    {amount: '$10 000', days: '90', benefit: '15%', date: '23 june 2021', status: 1, views: 1, pdfCount: [1, 2]},
  ];

  state = 'default';
  showArchive = true;

  constructor(private router: Router,
              private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerList = this.offerService.getOfferList();
  }

  onShowArchive() {
    this.showArchive = !this.showArchive;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  onOpenOffer(id: number) {
    this.router.navigate(['/my-offer-view', id]);
  }
}
