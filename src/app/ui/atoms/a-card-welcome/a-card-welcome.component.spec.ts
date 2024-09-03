import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACardWelcomeComponent } from './a-card-welcome.component';

describe('ACardWelcomeComponent', () => {
	let component: ACardWelcomeComponent;
	let fixture: ComponentFixture<ACardWelcomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ACardWelcomeComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ACardWelcomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
