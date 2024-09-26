import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACardShortcutComponent } from './a-card-shortcut.component';

describe('ACardShortcutComponent', () => {
	let component: ACardShortcutComponent;
	let fixture: ComponentFixture<ACardShortcutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ACardShortcutComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ACardShortcutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
