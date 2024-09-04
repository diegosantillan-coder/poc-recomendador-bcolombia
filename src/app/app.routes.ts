import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth/auth.guard';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	},
	{
		path: 'login',
		loadComponent: async () =>
			import('./components/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'welcome',
		loadComponent: async () =>
			import('./components/screen-bank/screen-bank.component').then(
				(m) => m.ScreenBankComponent
			)
	},
	{
		path: 'home',
		loadComponent: async () =>
			import('./components/home/home.component').then((m) => m.HomeComponent),
		canActivate: [AuthGuard]
	},
	{
		path: 'skeleton',
		loadComponent: async () =>
			import('./components/skeleton/skeleton.component').then(
				(m) => m.SkeletonComponent
			),
		canActivate: [AuthGuard]
	},
	{
		path: 'css-skeleton',
		loadComponent: async () =>
			import('./components/skeleton-css/skeleton-css.component').then(
				(m) => m.SkeletonCssComponent
			),
		canActivate: [AuthGuard]
	}
];
