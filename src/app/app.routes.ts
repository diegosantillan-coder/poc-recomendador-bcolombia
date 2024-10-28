import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'olimpica'
	},
	{
		path: 'olimpica',
		loadComponent: async () =>
			import('./components/olimpica/home-olimpica/home-olimpica.component').then((m) => m.HomeOlimpicaComponent),
	},
];
