import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavbarComponent } from './m-navbar.component';

describe('MNavbarComponent', () => {
	let component: MNavbarComponent;
	let fixture: ComponentFixture<MNavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MNavbarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MNavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
