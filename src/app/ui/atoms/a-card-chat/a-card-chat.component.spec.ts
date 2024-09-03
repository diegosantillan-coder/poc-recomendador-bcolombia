import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACardChatComponent } from './a-card-chat.component';

describe('ACardChatComponent', () => {
	let component: ACardChatComponent;
	let fixture: ComponentFixture<ACardChatComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ACardChatComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ACardChatComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
