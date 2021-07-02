import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-special-offer-modal',
  templateUrl: './special-offer-modal.component.html',
  styleUrls: ['./special-offer-modal.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(-180deg)' })),
      state('rotated', style({ transform: 'rotate(0)' })),
      transition('rotated => default', animate('400ms ease-in')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class SpecialOfferModalComponent implements OnInit {

  offerModel: any;
  specialOfferForm: any;
  showDetails = true;
  state = 'default';
  totalAmount = 10000;
  onPassData = new EventEmitter();

  constructor(private dialog: MatDialogRef<SpecialOfferModalComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.specialOfferForm = new FormGroup({
      loanAmount: new FormControl(this.offerModel?.amount ? this.offerModel?.amount : null, Validators.required),
      fundraiser: new FormControl(this.offerModel?.days ? this.offerModel?.days : null, Validators.required),
      benefit: new FormControl(this.offerModel?.benefit ? this.offerModel?.benefit : null, Validators.required),
      deadline: new FormControl(this.offerModel?.date ? this.offerModel?.date : null, Validators.required)
    });
  }

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  onAdd() {
    const specialOffer = {
      amount: this.specialOfferForm.get('loanAmount').value,
      fundraiser: this.specialOfferForm.get('fundraiser').value,
      benefit: this.specialOfferForm.get('benefit').value
    };
    this.onPassData.emit(specialOffer);
    this.dialog.close();
  }

  onCancel() {
    this.dialog.close();
  }
}
