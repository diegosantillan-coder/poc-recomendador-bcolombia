import { Routes } from '@angular/router';

export const onboardingRoutes: Routes = [
	{
		path: 'step-1',
		loadComponent: async () =>
			import('../components/onboarding/step-1/step-1.component').then((m) => m.Step1Component)
	},
	{
		path: 'step-2',
		loadComponent: async () =>
			import('../components/onboarding/step-2/step-2.component').then((m) => m.Step2Component)
	},
	{
		path: 'step-3',
		loadComponent: async () =>
			import('../components/onboarding/step-3/step-3.component').then((m) => m.Step3Component)
	},
];
