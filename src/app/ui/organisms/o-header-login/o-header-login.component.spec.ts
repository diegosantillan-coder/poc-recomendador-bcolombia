import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OHeaderLoginComponent } from './o-header-login.component';

describe('OHeaderLoginComponent', () => {
	let component: OHeaderLoginComponent;
	let fixture: ComponentFixture<OHeaderLoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OHeaderLoginComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(OHeaderLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
