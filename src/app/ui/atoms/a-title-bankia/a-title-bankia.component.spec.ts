import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATitleBankiaComponent } from './a-title-bankia.component';

describe('ATitleBankiaComponent', () => {
	let component: ATitleBankiaComponent;
	let fixture: ComponentFixture<ATitleBankiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ATitleBankiaComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ATitleBankiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
