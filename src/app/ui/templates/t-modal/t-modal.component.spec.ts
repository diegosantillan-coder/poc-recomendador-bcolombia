import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TModalComponent } from './t-modal.component';

describe('TModalComponent', () => {
	let component: TModalComponent;
	let fixture: ComponentFixture<TModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TModalComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
