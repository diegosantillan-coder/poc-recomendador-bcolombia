import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THomeBankiaComponent } from './t-home-bankia/t-home-bankia.component';
import { THomeComponent } from './t-home/t-home.component';
import { TLoginBankiaComponent } from './t-login-bankia/t-login-bankia.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		THomeComponent,
		TLoginBankiaComponent,
		THomeBankiaComponent
	],
	exports: [THomeComponent, TLoginBankiaComponent, THomeBankiaComponent]
})
export class TemplatesModule {}
