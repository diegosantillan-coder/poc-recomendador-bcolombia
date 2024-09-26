import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBankComponent } from './screen-bank.component';

describe('ScreenBankComponent', () => {
	let component: ScreenBankComponent;
	let fixture: ComponentFixture<ScreenBankComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ScreenBankComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ScreenBankComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
