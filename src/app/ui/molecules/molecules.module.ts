import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MBannerOlimpicaComponent } from './m-banner-olimpica/m-banner-olimpica.component';
import { MCardIaComponent } from './m-card-ia/m-card-ia.component';
import { MCardInfoComponent } from './m-card-info/m-card-info.component';
import { MCardShortcutComponent } from './m-card-shortcut/m-card-shortcut.component';
import { MNavbarOlimpicaComponent } from './m-navbar-olimpica/m-navbar-olimpica.component';
import { MScreenComponent } from './m-screen/m-screen.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MCardIaComponent,
		MScreenComponent,
		MCardShortcutComponent,
		MCardInfoComponent,
		MNavbarOlimpicaComponent,
		MBannerOlimpicaComponent
	],
	exports: [MCardIaComponent, MScreenComponent, MCardShortcutComponent, MCardInfoComponent,MNavbarOlimpicaComponent,MBannerOlimpicaComponent]
})
export class MoleculesModule {}
