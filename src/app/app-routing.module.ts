import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {LoginPageComponent} from './components/auth-page/login-page/login-page.component';
import {RegistrationPageComponent} from './components/auth-page/registration-page/registration-page.component';
import {ForgotPasswordComponent} from './components/auth-page/forgot-password/forgot-password.component';
import {VerifyEmailPageComponent} from './components/auth-page/verify-email-page/verify-email-page.component';
import {NewPasswordPageComponent} from './components/auth-page/new-password-page/new-password-page.component';
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {AddOfferFirstTimeComponent} from './components/site-page/add-offer-first-time/add-offer-first-time.component';
import {MyOffersPageComponent} from './components/site-page/my-offers-page/my-offers-page.component';
import {DashboardPageComponent} from './components/site-page/dashboard-page/dashboard-page.component';
import {BalancePageComponent} from './components/site-page/balance-page/balance-page.component';
import {CompanyProfilePafeComponent} from './components/site-page/company-profile-pafe/company-profile-pafe.component';
import {ReviewsPageComponent} from './components/site-page/reviews-page/reviews-page.component';
import {InvestsPageComponent} from './components/site-page/invests-page/invests-page.component';
import {AddOfferPageComponent} from './components/site-page/add-offer-page/add-offer-page.component';
import {MyOfferViewPageComponent} from './components/site-page/my-offers-page/my-offer-view-page/my-offer-view-page.component';
import {MyOfferEditPageComponent} from './components/site-page/my-offers-page/my-offer-edit-page/my-offer-edit-page.component';
import {EditProfilePageComponent} from './components/site-page/company-profile-pafe/edit-profile-page/edit-profile-page.component';
import {ChangePasswordInPageComponent} from './components/site-page/company-profile-pafe/change-password-in-page/change-password-in-page.component';
import {ForgotPasswordInPageComponent} from "./components/site-page/company-profile-pafe/forgot-password-in-page/forgot-password-in-page.component";
import {EINPageComponent} from "./components/auth-page/einpage/einpage.component";
import {VerifyEmailPassPageComponent} from "./components/auth-page/verify-email-page/verify-email-pass-page/verify-email-pass-page.component";

const routes: Routes = [
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      {path: 'auth', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegistrationPageComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'verify-email', component: VerifyEmailPageComponent},
      {path: 'verify-email-pass', component: VerifyEmailPassPageComponent},
      {path: 'new-password', component: NewPasswordPageComponent},
      {path: 'ein', component: EINPageComponent},
    ]
  },
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'my-offers', component: MyOffersPageComponent},
      {path: 'my-offer-view/:id', component: MyOfferViewPageComponent},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'balance', component: BalancePageComponent},
      {path: 'invests', component: InvestsPageComponent},
      {path: 'reviews', component: ReviewsPageComponent},
      {path: 'company-profile', component: CompanyProfilePafeComponent},
    ]
  },
  {path: 'add-offer-first-time', component: AddOfferFirstTimeComponent},
  {path: 'add-offer', component: AddOfferPageComponent},
  {path: 'edit-company-profile', component: EditProfilePageComponent},
  {path: 'change-pass-in', component: ChangePasswordInPageComponent},
  {path: 'forgot-pass-in', component: ForgotPasswordInPageComponent},
  {path: 'my-offer-edit/:id', component: MyOfferEditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
