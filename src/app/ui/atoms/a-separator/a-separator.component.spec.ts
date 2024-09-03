import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASeparatorComponent } from './a-separator.component';

describe('ASeparatorComponent', () => {
	let component: ASeparatorComponent;
	let fixture: ComponentFixture<ASeparatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ASeparatorComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ASeparatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
