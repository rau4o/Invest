import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgSelectModule} from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { LoginPageComponent } from './components/auth-page/login-page/login-page.component';
import { RegistrationPageComponent } from './components/auth-page/registration-page/registration-page.component';
import { ForgotPasswordComponent } from './components/auth-page/forgot-password/forgot-password.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CustomMaterialModule} from './shared/Custom-Material/custom-material.module';
import { VerifyEmailPageComponent } from './components/auth-page/verify-email-page/verify-email-page.component';
import { NewPasswordPageComponent } from './components/auth-page/new-password-page/new-password-page.component';
import { AddOfferFirstTimeComponent } from './components/site-page/add-offer-first-time/add-offer-first-time.component';
import { MyOffersPageComponent } from './components/site-page/my-offers-page/my-offers-page.component';
import { DashboardPageComponent } from './components/site-page/dashboard-page/dashboard-page.component';
import { BalancePageComponent } from './components/site-page/balance-page/balance-page.component';
import { InvestsPageComponent } from './components/site-page/invests-page/invests-page.component';
import { ReviewsPageComponent } from './components/site-page/reviews-page/reviews-page.component';
import { CompanyProfilePafeComponent } from './components/site-page/company-profile-pafe/company-profile-pafe.component';
import { AddOfferPageComponent } from './components/site-page/add-offer-page/add-offer-page.component';
import { MyOfferViewPageComponent } from './components/site-page/my-offers-page/my-offer-view-page/my-offer-view-page.component';
import { MyOfferEditPageComponent } from './components/site-page/my-offers-page/my-offer-edit-page/my-offer-edit-page.component';
import { SpecialOfferModalComponent } from './components/modal-page/special-offer-modal/special-offer-modal.component';
import { RaiseToTopModalComponent } from './components/modal-page/raise-to-top-modal/raise-to-top-modal.component';
import { UpdateBalanceModalComponent } from './components/modal-page/update-balance-modal/update-balance-modal.component';
import {TextMaskModule} from 'angular2-text-mask';
import { WithdrawBalanceModalComponent } from './components/modal-page/withdraw-balance-modal/withdraw-balance-modal.component';
import { EditProfilePageComponent } from './components/site-page/company-profile-pafe/edit-profile-page/edit-profile-page.component';
import { ChangePasswordInPageComponent } from './components/site-page/company-profile-pafe/change-password-in-page/change-password-in-page.component';
import { ForgotPasswordInPageComponent } from './components/site-page/company-profile-pafe/forgot-password-in-page/forgot-password-in-page.component';
import { ReturnInvestorModalComponent } from './components/modal-page/return-investor-modal/return-investor-modal.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import { EINPageComponent } from './components/auth-page/einpage/einpage.component';
import { ConfirmFirstOfferModalComponent } from './components/modal-page/confirm-first-offer-modal/confirm-first-offer-modal.component';
import {MatNativeDateModule} from "@angular/material/core";
import { VerifyEmailPassPageComponent } from './components/auth-page/verify-email-page/verify-email-pass-page/verify-email-pass-page.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ForgotPasswordComponent,
    AuthLayoutComponent,
    VerifyEmailPageComponent,
    NewPasswordPageComponent,
    AddOfferFirstTimeComponent,
    MyOffersPageComponent,
    DashboardPageComponent,
    BalancePageComponent,
    InvestsPageComponent,
    ReviewsPageComponent,
    CompanyProfilePafeComponent,
    AddOfferPageComponent,
    MyOfferViewPageComponent,
    MyOfferEditPageComponent,
    SpecialOfferModalComponent,
    RaiseToTopModalComponent,
    UpdateBalanceModalComponent,
    WithdrawBalanceModalComponent,
    EditProfilePageComponent,
    ChangePasswordInPageComponent,
    ForgotPasswordInPageComponent,
    ReturnInvestorModalComponent,
    EINPageComponent,
    ConfirmFirstOfferModalComponent,
    VerifyEmailPassPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TextMaskModule,
        MatProgressBarModule,
        NgbModule,
        MatNativeDateModule,
        NgxMaskModule.forRoot(options)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
