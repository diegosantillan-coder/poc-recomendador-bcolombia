import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface OptionsHttp {
	context?: HttpContext;
	headers?: HttpHeaders;
	params?: HttpParams;
	body?: unknown;
	timeout?: number; // Añadido para especificar el tiempo de espera
}
