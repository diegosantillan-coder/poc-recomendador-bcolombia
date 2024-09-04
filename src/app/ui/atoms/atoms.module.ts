import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AButtonComponent } from './a-button/a-button.component';
import { ACardWelcomeComponent } from './a-card-welcome/a-card-welcome.component';
import { ACustomButtonComponent } from './a-custom-button/a-custom-button.component';
import { ACustomInputTextComponent } from './a-custom-input-text/a-custom-input-text.component';
import { ALogoComponent } from './a-logo/a-logo.component';
import { ATitleBankiaComponent } from './a-title-bankia/a-title-bankia.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AButtonComponent,
		ALogoComponent,
		ACustomButtonComponent,
		ACustomInputTextComponent,
		ACardWelcomeComponent,
		ATitleBankiaComponent
	],
	exports: [
		AButtonComponent,
		ALogoComponent,
		ACustomButtonComponent,
		ACustomInputTextComponent,
		ACardWelcomeComponent,
		ATitleBankiaComponent
	]
})
export class AtomsModule {}
