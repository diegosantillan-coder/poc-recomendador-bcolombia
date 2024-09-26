import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginBankiaComponent } from './t-login-bankia.component';

describe('TLoginBankiaComponent', () => {
	let component: TLoginBankiaComponent;
	let fixture: ComponentFixture<TLoginBankiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TLoginBankiaComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TLoginBankiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
