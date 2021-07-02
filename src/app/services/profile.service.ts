import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profileObject = {
    companyName: 'NEO Tech',
    industry: 'Information Technology',
    productType: 'Service',
    description: 'NEO Tech offers their electronic SIM Cards and provides users with cellular data. The company started in 2019 and needs some investment in order to be spread and well-known world wide.'
  };

  public getProfile() {
    return this.profileObject;
  }

  public editProfile(companyName: string, industry: string, productType: string, description: string) {
    this.profileObject.companyName = companyName;
    this.profileObject.industry = industry;
    this.profileObject.productType = productType;
    this.profileObject.description = description;
  }
}
