import { Injectable } from '@angular/core';
import { AgentResponse } from '@core/interfaces/agent.interface';
import { QuestionRequest } from '@core/interfaces/question.interface';
import { OptionsHttp } from '@core/models/options-http.interface';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
	providedIn: 'root'
})
export class AgentService extends HttpService {
	async getResponseAgentAsync(question: QuestionRequest): Promise<AgentResponse> {
		this.addHeader('x-api-key', 'o6HDjcuRP61vHwEgmq0Fl41Bk9sRX8PB9L6TIjfl');
		const options: OptionsHttp = {
			headers: this.getHeaders()
		};
		try {
			const response: AgentResponse = await firstValueFrom(
				this.httpPOST(
					'https://vhg5cimh87.execute-api.us-east-1.amazonaws.com/dev/bedrock-agent',
					question,
					options
				)
			);
			return response;
		} catch (error) {
			console.error('Error en getResponseAgentAsync:', error);
			throw error;
		}
	}
}
