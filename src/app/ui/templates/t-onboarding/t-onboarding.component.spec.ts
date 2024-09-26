import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOnboardingComponent } from './t-onboarding.component';

describe('TOnboardingComponent', () => {
	let component: TOnboardingComponent;
	let fixture: ComponentFixture<TOnboardingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TOnboardingComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TOnboardingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
