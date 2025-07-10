import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OptionsHttp } from '@core/models/options-http.interface';
import { catchError, Observable, throwError, timeout } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	headers = new HttpHeaders();
	params!: HttpParams;
	private http: HttpClient = inject(HttpClient);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addParams(params: any): void {
		this.params = new HttpParams({ fromObject: params });
	}

	getParams(): HttpParams {
		return this.params;
	}

	cleanParams(): void {
		this.params = new HttpParams({ fromObject: {} });
	}

	addHeader(nombre: string, valor: string): void {
		this.headers = this.headers.set(nombre, valor);
	}

	getHeaders(): HttpHeaders {
		return this.headers;
	}

	httpGET<T>(url: string, opciones?: OptionsHttp): Observable<T> {
		return this.http.get<T>(url, opciones);
	}

	httpPOST<T, R>(url: string, body: T, opciones?: OptionsHttp): Observable<R> {
		const timeoutValue = opciones?.timeout ?? 29000;
		return this.http
			.post<R>(url, body, opciones)
			.pipe(timeout(timeoutValue), catchError(this.handleError));
	}

	httpPOSTtext<T>(url: string, body: T): Observable<string> {
		return this.http.post(url, body, { responseType: 'text' });
	}

	httpPUT<T, R>(url: string, body: T, opciones?: OptionsHttp): Observable<R> {
		return this.http.put<R>(url, body, opciones);
	}

	httpDELETE<R>(url: string, opciones?: OptionsHttp): Observable<R> {
		return this.http.delete<R>(url, opciones);
	}

	private handleError(error: HttpErrorResponse) {
		console.error('Error:', error);
		return throwError('Ocurrió un error; por favor, intente de nuevo más tarde.');
	}
}
