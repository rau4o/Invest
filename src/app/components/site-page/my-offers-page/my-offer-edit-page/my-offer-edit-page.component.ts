import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SpecialOfferModalComponent} from '../../../modal-page/special-offer-modal/special-offer-modal.component';
import {OfferService} from "../../../../services/offer.service";
import {escapeRegExp} from "tslint/lib/utils";

@Component({
  selector: 'app-my-offer-edit-page',
  templateUrl: './my-offer-edit-page.component.html',
  styleUrls: ['./my-offer-edit-page.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class MyOfferEditPageComponent implements OnInit {

  myOfferEditForm: any;
  offerEditModel: any;
  showDetails = true;
  state = 'default';
  fileToUpload: File;
  totalAmount = 10000;
  fileList = [
    {name: 'Agreement with wholesale areas b...', show: false},
    {name: 'Confidentiality Agreement', show: false}
  ];
  id: number;
  showSpecial = false;
  specialOfferData: any;

  constructor(public router: Router,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private offerService: OfferService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.offerEditModel = this.offerService.getOffer(this.id);
    this.createForm();
  }

  createForm() {
    this.myOfferEditForm = new FormGroup({
      loanAmount: new FormControl(this.offerEditModel.amount ? this.offerEditModel.amount : null, Validators.required),
      fundraiser: new FormControl(this.offerEditModel.days ? this.offerEditModel.days : null, Validators.required),
      benefit: new FormControl(this.offerEditModel.benefit ? this.offerEditModel.benefit : null, Validators.required),
      minInvestAmount: new FormControl(1000, Validators.required),
      deadline: new FormControl(this.offerEditModel.date ? this.offerEditModel.date : null, Validators.required)
    });
  }


  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  onOpenModal() {
    const dialogRef = this.dialog.open(SpecialOfferModalComponent, {
      width: '544px',
      height: '620px'
    });
    dialogRef.componentInstance.offerModel = this.offerEditModel;
    dialogRef.componentInstance.onPassData.subscribe(res => {
      this.specialOfferData = res;
      this.showSpecial = true;
    });
  }

  handleFiles(files: FileList) {
    this.fileToUpload = files.item(0);
    // @ts-ignore
    this.offerEditModel.pdfCount.push({name: files.item(0).name, show: true});
    setTimeout(() => {
      this.offerEditModel.pdfCount.forEach(el => {
        if (el.show === true) {
          el.show = false;
        }
      });
    }, 2000);
  }

  removeFileByIndex(idx) {
    this.fileList.splice(idx, 1);
  }

  onSave() {
    console.log(this.myOfferEditForm);
    const amount = this.myOfferEditForm.get('loanAmount').value;
    const days = this.myOfferEditForm.get('fundraiser').value;
    const benefit = this.myOfferEditForm.get('benefit').value;
    const date = this.myOfferEditForm.get('deadline').value;
    const pdfCount = this.offerEditModel.pdfCount;
    this.offerService.updateOffer(this.id, amount, days, benefit, date, pdfCount);
    this.router.navigate(['/my-offer-view', this.id]);
  }
}
