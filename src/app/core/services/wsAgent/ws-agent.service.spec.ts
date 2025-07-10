import { TestBed } from '@angular/core/testing';

import { WsAgentService } from './ws-agent.service';

describe('WsAgentService', () => {
	let service: WsAgentService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(WsAgentService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
