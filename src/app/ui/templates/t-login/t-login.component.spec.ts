import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginComponent } from './t-login.component';

describe('TLoginComponent', () => {
	let component: TLoginComponent;
	let fixture: ComponentFixture<TLoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TLoginComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
