import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHeaderAchComponent } from './o-header-ach.component';

describe('OHeaderAchComponent', () => {
	let component: OHeaderAchComponent;
	let fixture: ComponentFixture<OHeaderAchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OHeaderAchComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(OHeaderAchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
