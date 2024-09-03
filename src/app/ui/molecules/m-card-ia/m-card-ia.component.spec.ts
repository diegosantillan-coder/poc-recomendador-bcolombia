import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCardIaComponent } from './m-card-ia.component';

describe('MCardIaComponent', () => {
	let component: MCardIaComponent;
	let fixture: ComponentFixture<MCardIaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MCardIaComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MCardIaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
