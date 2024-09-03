import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OHeaderAchComponent } from './o-header-ach/o-header-ach.component';
import { OHeaderLoginComponent } from './o-header-login/o-header-login.component';
import { OHeaderRegisterComponent } from './o-header-register/o-header-register.component';
import { OHeaderSoiComponent } from './o-header-soi/o-header-soi.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		OHeaderAchComponent,
		OHeaderSoiComponent,
		OHeaderLoginComponent,
		OHeaderRegisterComponent
	],
	exports: [
		OHeaderSoiComponent,
		OHeaderAchComponent,
		OHeaderLoginComponent,
		OHeaderRegisterComponent
	]
})
export class OrganismsModule {}
