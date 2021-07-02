import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProfileService} from '../../../../services/profile.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {

  profileForm: any;
  profileData: any;
  industryList = [
    {name: 'Information technology'},
    {name: 'Information systems'}
  ];
  productList = [
    {name: 'Service'},
    {name: 'Service 2'},
  ];
  currentIndustry = this.industryList[0];
  currentProduct = this.productList[0];

  constructor(public router: Router,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileData = this.profileService.getProfile();
    this.createForm();
  }

  createForm() {
    this.profileForm = new FormGroup({
      companyName: new FormControl(this.profileData.companyName, Validators.required),
      industry: new FormControl(this.currentIndustry, Validators.required),
      productType: new FormControl(this.currentProduct, Validators.required),
      desc: new FormControl(this.profileData.description, Validators.required)
    });
  }

  onSave() {
    const companyName = this.profileForm.get('companyName').value;
    const industry = this.profileForm.get('industry').value.name;
    const productType = this.profileForm.get('productType').value.name;
    const desc = this.profileForm.get('desc').value;
    this.profileService.editProfile(companyName, industry, productType, desc);
    this.router.navigateByUrl('/company-profile');
  }
}
