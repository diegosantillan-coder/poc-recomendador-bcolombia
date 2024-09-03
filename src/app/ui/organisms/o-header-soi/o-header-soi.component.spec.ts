import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OHeaderSoiComponent } from './o-header-soi.component';

describe('OHeaderSoiComponent', () => {
	let component: OHeaderSoiComponent;
	let fixture: ComponentFixture<OHeaderSoiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OHeaderSoiComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(OHeaderSoiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
