import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCssComponent } from './skeleton-css.component';

describe('SkeletonCssComponent', () => {
	let component: SkeletonCssComponent;
	let fixture: ComponentFixture<SkeletonCssComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SkeletonCssComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SkeletonCssComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
