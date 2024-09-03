import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MCardIaComponent } from './m-card-ia/m-card-ia.component';
import { MNavbarComponent } from './m-navbar/m-navbar.component';

@NgModule({
	declarations: [],
	imports: [CommonModule, MNavbarComponent, MCardIaComponent],
	exports: [MNavbarComponent, MCardIaComponent]
})
export class MoleculesModule {}
