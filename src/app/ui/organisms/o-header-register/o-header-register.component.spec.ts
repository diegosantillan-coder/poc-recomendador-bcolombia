import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHeaderRegisterComponent } from './o-header-register.component';

describe('OHeaderRegisterComponent', () => {
	let component: OHeaderRegisterComponent;
	let fixture: ComponentFixture<OHeaderRegisterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OHeaderRegisterComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(OHeaderRegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
