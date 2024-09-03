import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACustomInputTextComponent } from './a-custom-input-text.component';

describe('ACustomInputTextComponent', () => {
	let component: ACustomInputTextComponent;
	let fixture: ComponentFixture<ACustomInputTextComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ACustomInputTextComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ACustomInputTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
