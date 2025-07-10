import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCardInfoComponent } from './m-card-info.component';

describe('MCardInfoComponent', () => {
	let component: MCardInfoComponent;
	let fixture: ComponentFixture<MCardInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MCardInfoComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MCardInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
