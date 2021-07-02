import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-company-profile-pafe',
  templateUrl: './company-profile-pafe.component.html',
  styleUrls: ['./company-profile-pafe.component.scss']
})
export class CompanyProfilePafeComponent implements OnInit {

  profileData: any;

  constructor(public router: Router,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileData = this.profileService.getProfile();
  }

}
