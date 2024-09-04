import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THomeComponent } from './t-home/t-home.component';
import { TLoginBankiaComponent } from './t-login-bankia/t-login-bankia.component';
import { TLoginComponent } from './t-login/t-login.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		THomeComponent,
		TLoginComponent,
		TLoginBankiaComponent
	],
	exports: [THomeComponent, TLoginComponent, TLoginBankiaComponent]
})
export class TemplatesModule {}
