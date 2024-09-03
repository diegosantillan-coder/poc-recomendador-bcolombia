import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALogoComponent } from './a-logo.component';

describe('ALogoComponent', () => {
	let component: ALogoComponent;
	let fixture: ComponentFixture<ALogoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ALogoComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ALogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
