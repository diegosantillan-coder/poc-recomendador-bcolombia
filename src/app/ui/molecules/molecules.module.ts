import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MCardIaComponent } from './m-card-ia/m-card-ia.component';
import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { MScreenComponent } from './m-screen/m-screen.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, MNavbarComponent, MCardIaComponent, MScreenComponent],
	exports: [MNavbarComponent, MCardIaComponent, MScreenComponent]
})
export class MoleculesModule {}
