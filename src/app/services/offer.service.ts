import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offersList = [
    {id: 1, name: 'Almat Kurmashev', amount: 10000, days: '90', benefit: '15%', benefitSum: 1200, date: '20.08.2021', status: 1, statusName: 'In review', views: 1, pdfCount: [
        {name: 'Agreement with wholesale areas b...', show: false},
        {name: 'Confidentiality Agreement', show: false}]
    },
    {id: 2, name: 'Almat Kurmashev', amount: 12000, days: '30', benefit: '25%', benefitSum: 1200, date: '25.09.2021', status: 2, statusName: 'Published', views: 2, pdfCount: [
        {name: 'Agreement with wholesale areas b...', show: false},
        {name: 'Confidentiality Agreement', show: false},
        {name: 'Confidentiality Agreement', show: false}
      ]},
    {id: 3, name: 'Almat Kurmashev', amount: 14000, days: '35', benefit: '35%', benefitSum: 1200, date: '27.10.2021', status: 3, statusName: 'Draft', views: 3, pdfCount: [
        {name: 'Agreement with wholesale areas b...', show: false}
      ]}
  ];

  constructor() { }

  public getOfferList() {
    return this.offersList;
  }

  public getOffer(id: number) {
    const offer = this.offersList.find(h => h.id === id)!;
    return offer;
  }

  public updateOffer(id: number, amount: number, days: string, benefit: string, date: string, pdfCount: any[]) {
    const offer = this.offersList.find(h => h.id === id)!;
    offer.amount = amount;
    offer.days = days;
    offer.benefit = benefit;
    offer.date = date;
    offer.pdfCount = pdfCount;
  }

  public addOffer(idd: number, amountt: number, dayss: string, benefitt: string, datee: string, pdfCountt: any[]) {
    this.offersList.push({id: idd, name: 'Almat Kurmashev', amount: amountt, days: dayss, benefit: benefitt, benefitSum: 1200, date: datee, status: 3, statusName: 'Draft', views: 3, pdfCount: pdfCountt});
  }
}
