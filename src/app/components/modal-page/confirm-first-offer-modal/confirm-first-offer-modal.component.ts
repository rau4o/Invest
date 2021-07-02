import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-first-offer-modal',
  templateUrl: './confirm-first-offer-modal.component.html',
  styleUrls: ['./confirm-first-offer-modal.component.scss']
})
export class ConfirmFirstOfferModalComponent implements OnInit {

  pdfList = [];
  loading = false;
  result = new EventEmitter();
  aboutText = '';
  specialOfferData: any;
  productType: any;
  companyName = '';
  industryText = '';
  loanAmount: any;
  days: any;
  benefit: any;


  constructor(private dialog: MatDialogRef<ConfirmFirstOfferModalComponent>) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.loading = true;
    setTimeout(() => {
      this.result.emit(true);
      this.dialog.close();
    }, 2000);
  }

  onSave() {
    this.result.emit(false);
    this.dialog.close();
  }
}
