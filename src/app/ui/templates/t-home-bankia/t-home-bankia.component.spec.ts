import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THomeBankiaComponent } from './t-home-bankia.component';

describe('THomeBankiaComponent', () => {
	let component: THomeBankiaComponent;
	let fixture: ComponentFixture<THomeBankiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [THomeBankiaComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(THomeBankiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
