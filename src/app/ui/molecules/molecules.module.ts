import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MCardIaComponent } from './m-card-ia/m-card-ia.component';
import { MCardShortcutComponent } from './m-card-shortcut/m-card-shortcut.component';
import { MScreenComponent } from './m-screen/m-screen.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MCardIaComponent,
		MScreenComponent,
		MCardShortcutComponent
	],
	exports: [MCardIaComponent, MScreenComponent, MCardShortcutComponent]
})
export class MoleculesModule {}
