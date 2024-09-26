import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MScreenComponent } from './m-screen.component';

describe('MScreenComponent', () => {
	let component: MScreenComponent;
	let fixture: ComponentFixture<MScreenComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MScreenComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MScreenComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
