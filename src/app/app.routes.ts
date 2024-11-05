import { Routes } from '@angular/router';
import { checkOutRoutes } from './routes/checkout.routes';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'super-retail'
	},
	{
		path: 'super-retail',
		loadComponent: async () =>
			import('./components/olimpica/main/main.component').then((m) => m.MainComponent),
		children: [...checkOutRoutes],
	},
];
