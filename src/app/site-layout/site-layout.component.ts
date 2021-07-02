import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/dashboard', name: 'Dashboard', imgSrc: 'assets/images/menu-button/icon/home-select.png', isActive: true},
    {url: '/my-offers', name: 'My offers', imgSrc: 'assets/images/menu-button/icon/chart.png', isActive: false},
    {url: '/balance', name: 'Balance', imgSrc: 'assets/images/menu-button/icon/documents.png', isActive: false},
    {url: '/invests', name: 'Invests', imgSrc: 'assets/images/menu-button/icon/post.png', isActive: false},
    {url: '/reviews', name: 'Reviews', imgSrc: 'assets/images/menu-button/icon/message.png', isActive: false},
    {url: '/company-profile', name: 'Company profile', imgSrc: 'assets/images/menu-button/icon/user.png', isActive: false}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addOffer() {
    this.router.navigateByUrl('/add-offer');
  }

  isActiveLink(url) {
    if (this.router.url.includes(url)) {
      return 'selected';
    }
    return '';
  }

  goToMain() {
    this.router.navigateByUrl('/dashboard');
  }
}
