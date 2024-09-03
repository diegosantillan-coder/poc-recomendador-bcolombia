import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACustomButtonComponent } from './a-custom-button.component';

describe('ACustomButtonComponent', () => {
	let component: ACustomButtonComponent;
	let fixture: ComponentFixture<ACustomButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ACustomButtonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ACustomButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
