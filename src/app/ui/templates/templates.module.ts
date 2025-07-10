import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THomeBankiaComponent } from './t-home-bankia/t-home-bankia.component';
import { TLoginBankiaComponent } from './t-login-bankia/t-login-bankia.component';
import { TOnboardingComponent } from './t-onboarding/t-onboarding.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, TLoginBankiaComponent, THomeBankiaComponent, TOnboardingComponent],
	exports: [TLoginBankiaComponent, THomeBankiaComponent, TOnboardingComponent]
})
export class TemplatesModule {}
