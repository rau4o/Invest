import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {SpecialOfferModalComponent} from "../../modal-page/special-offer-modal/special-offer-modal.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ConfirmFirstOfferModalComponent} from "../../modal-page/confirm-first-offer-modal/confirm-first-offer-modal.component";

@Component({
  selector: 'app-add-offer-first-time',
  templateUrl: './add-offer-first-time.component.html',
  styleUrls: ['./add-offer-first-time.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class AddOfferFirstTimeComponent implements OnInit {

  nextState = 'first';
  state = 'default';
  fileToUpload: File;
  companyForm: any;
  addOfferForm: any;
  industryList = [
    {name: 'Information technology'},
    {name: 'Information systems'}
  ];
  productList = [
    {name: 'Service'},
    {name: 'Service 2'},
  ];
  textAreaModel = '';
  pdfList = [];
  specialOfferData: any;
  showSpecial = false;
  showDetails = false;
  totalAmount = 10000;

  constructor(public router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createCompanyForm();
    this.createAddOfferForm();
  }

  createCompanyForm() {
    this.companyForm = new FormGroup({
      companyName: new FormControl(null, Validators.required),
      industry: new FormControl(null, Validators.required),
      productType: new FormControl(null, Validators.required),
    });
  }

  createAddOfferForm() {
    this.addOfferForm = new FormGroup({
      loanAmount: new FormControl(null, Validators.required),
      fundraiser: new FormControl(null, Validators.required),
      benefit: new FormControl(null, Validators.required),
      minInvestAmount: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required)
    });
  }

  removeFileByIndex(idx) {
    this.pdfList.splice(idx, 1);
  }

  handleFiles(files: FileList) {
    this.fileToUpload = files.item(0);
    // @ts-ignore
    this.pdfList.push({name: files.item(0).name, show: true});
    setTimeout(() => {
      this.pdfList.forEach(el => {
        if (el.show === true) {
          el.show = false;
        }
      });
    }, 2000);
  }

  onNext1() {
    this.nextState = 'second';
  }

  onNext2() {
    this.nextState = 'third';
  }

  onNext3() {
    this.nextState = 'fourth';
  }

  onSend() {
    const dialogRef = this.dialog.open(ConfirmFirstOfferModalComponent, {
      width: '544px',
      height: '750px'
    });
    dialogRef.componentInstance.pdfList = this.pdfList;
    dialogRef.componentInstance.aboutText = this.textAreaModel;
    dialogRef.componentInstance.companyName = this.companyForm.get('companyName').value;
    dialogRef.componentInstance.productType = this.companyForm.get('productType').value;
    dialogRef.componentInstance.industryText = this.companyForm.get('industry').value;
    dialogRef.componentInstance.benefit = this.addOfferForm.get('benefit').value;
    dialogRef.componentInstance.days = this.addOfferForm.get('fundraiser').value;
    dialogRef.componentInstance.loanAmount = this.addOfferForm.get('loanAmount').value;
    dialogRef.componentInstance.specialOfferData = this.specialOfferData;
    dialogRef.componentInstance.result.subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/my-offers');
      } else {
        this.router.navigateByUrl('/my-offers');
      }
    });
  }

  onLater() {
    this.router.navigateByUrl('/dashboard');
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
    dialogRef.componentInstance.onPassData.subscribe(res => {
      this.specialOfferData = res;
      this.showSpecial = true;
    });
  }
}
