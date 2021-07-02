import {Component, EventEmitter, Inject, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {getValidationConfigFromCardNo} from '../../../helper/CardValidation/card-helper';

@Component({
  selector: 'app-update-balance-modal',
  templateUrl: './update-balance-modal.component.html',
  styleUrls: ['./update-balance-modal.component.scss']
})
export class UpdateBalanceModalComponent implements OnInit, OnChanges {

  itemsPayType = [
    {name: 'Credit card', src: 'assets/images/ic_card-black.png', srcSelected: 'assets/images/ic_card.png', selected: false, type: 0},
    {name: 'Bank account', src: 'assets/images/ic_bank-black.png', srcSelected: 'assets/images/ic_bank.png', selected: false, type: 1}
  ];
  savedCard = [
    {name: '1234', src: 'assets/images/Visa.png', selected: false, balance: 10000000}
  ];
  savedBank = [
    {name: '1234', src: 'assets/images/ic_bank-black.png', selected: false, balance: 100000},
  ];

  nextState = 'addingAmount';
  cardSelectedState: boolean;
  bankSelectedState: boolean;
  selectPayType: boolean;
  currentConfirm = this.savedCard[0];
  currentConfirmBank = this.savedBank[0];
  showResult: boolean;
  result: boolean;
  payTypeId: number;

  addCardForm: any;
  addBankForm: any;
  amountSum = new FormControl(null, [Validators.required, Validators.min(1)]);

  onPassDate = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<UpdateBalanceModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  ngOnInit(): void {
    this.createAddCardForm();
    this.createAddBankForm();
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  createAddCardForm() {
    this.addCardForm = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required]),
      date: new FormControl(null, Validators.required),
      cvc: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    });
  }

  createAddBankForm() {
    this.addBankForm = new FormGroup({
      routingNumber: new FormControl(null, Validators.required),
      accountNumber: new FormControl(null, Validators.required),
    });
  }

  onNext(state?) {
    this.nextState = state;
    if (state === 'addingAmount') {
      this.dialogRef.updateSize('368px', '288px');
    }
    if (state === 'confirmUpdate') {
      this.dialogRef.updateSize('448px', '525px');
    }
    if (state === 'confirmUpdateBank') {
      this.dialogRef.updateSize('448px', '525px');
    }
    if (state === 'selectCardState') {
      this.dialogRef.updateSize('448px', '376px');
    }
    if (state === 'savedCard') {
      this.savedCard.push({
        name: '3214',
        src: 'assets/images/Visa.png',
        selected: false,
        balance: 40000
      });
    }
    if (state === 'savedBank') {
      this.savedBank.push({
        name: '3214',
        src: 'assets/images/ic_bank-black.png',
        selected: false,
        balance: 40000
      });
    }
    if (state === 'addingAmount') {
      this.dialogRef.updateSize('368px', '288px');
    }
    if (this.payTypeId === 0) {
      this.nextState = 'fillCard';
      this.payTypeId = null;
    } else if (this.payTypeId === 1) {
      this.nextState = 'fillBank';
      this.payTypeId = null;
    }
  }

  onClicked(item, i) {
    item.selected = !item.selected;
    this.payTypeId = item.type;
    this.itemsPayType.forEach((el, index) => {
      if (i !== index) {
        this.itemsPayType[index].selected = false;
      }
    });
    this.selectPayType = item.selected;
  }

  onClickedSavedCard(item, i) {
    item.selected = !item.selected;
    this.savedCard.forEach((el, index) => {
      if (i !== index) {
        this.savedCard[index].selected = false;
      }
    });
    this.cardSelectedState = item.selected;
  }

  onClickedSavedBank(item, i) {
    item.selected = !item.selected;
    this.savedBank.forEach((el, index) => {
      if (i !== index) {
        this.savedBank[index].selected = false;
      }
    });
    this.bankSelectedState = item.selected;
  }

  getCardNumberControl(): AbstractControl | null {
    return this.addCardForm && this.addCardForm.get('cardNumber');
  }

  cardMaskFunction(rawValue: string): Array<RegExp> {
    const card = getValidationConfigFromCardNo(rawValue);
    if (card) {
      return card.mask;
    }
    return [/\d/];
  }

  onAddCard() {
    this.nextState = 'fillCard';
    this.addCardForm.reset();
  }

  onAddBank() {
    this.nextState = 'fillBank';
    this.addBankForm.reset();
  }

  onConfirm() {
    this.nextState = 'loading';
    setTimeout(() => {
      if (this.currentConfirm.balance > this.amountSum.value) {
        this.showResult = false;
        this.nextState = 'showResult';
        this.result = true;
      } else {
        this.showResult = true;
        this.nextState = 'showResult';
        this.result = false;
      }
      if (this.currentConfirmBank.balance > this.amountSum.value) {
        this.showResult = false;
        this.nextState = 'showResult';
        this.result = true;
      } else {
        this.showResult = true;
        this.nextState = 'showResult';
        this.result = false;
      }
    }, 2000);
  }

  onClose(result) {
    if (result) {
      this.dialogRef.close(true);
      this.onPassDate.emit(this.amountSum.value);
    } else {
      this.dialogRef.close(false);
    }
  }
}
