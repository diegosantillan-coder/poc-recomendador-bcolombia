import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCardShortcutComponent } from './m-card-shortcut.component';

describe('MCardShortcutComponent', () => {
	let component: MCardShortcutComponent;
	let fixture: ComponentFixture<MCardShortcutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MCardShortcutComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(MCardShortcutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
