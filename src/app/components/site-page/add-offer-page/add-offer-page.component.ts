import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SpecialOfferModalComponent} from "../../modal-page/special-offer-modal/special-offer-modal.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-add-offer-page',
  templateUrl: './add-offer-page.component.html',
  styleUrls: ['./add-offer-page.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class AddOfferPageComponent implements OnInit {

  addOfferForm: any;
  state = 'default';
  showDetails = false;
  showSpecial = false;
  specialOfferData: any;
  totalAmount = 100000;
  nextState = 'offer';
  pdfList = [];
  fileToUpload: File;

  constructor(public router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addOfferForm = new FormGroup({
      loanAmount: new FormControl(null, Validators.required),
      fundraiser: new FormControl(null, Validators.required),
      benefit: new FormControl(null, Validators.required),
      minInvestAmount: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required)
    });
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

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  onSend() {
    this.nextState = 'pdf';
  }

  onNext() {
    this.router.navigateByUrl('/dashboard');
  }

  removeFileByIndex(idx: number) {
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
}
