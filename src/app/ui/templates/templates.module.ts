import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { THomeComponent } from './t-home/t-home.component';
import { TLoginComponent } from './t-login/t-login.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, THomeComponent, TLoginComponent],
	exports: [THomeComponent, TLoginComponent]
})
export class TemplatesModule {}
