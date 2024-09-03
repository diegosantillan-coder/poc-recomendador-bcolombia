import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THomeComponent } from './t-home.component';

describe('THomeComponent', () => {
	let component: THomeComponent;
	let fixture: ComponentFixture<THomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [THomeComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(THomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
