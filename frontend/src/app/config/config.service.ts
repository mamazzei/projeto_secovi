// app.component.ts or a service
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private config: any;

    constructor(private http: HttpClient) {
        this.loadConfig();
     }

    loadConfig(): Promise<any> {
        return this.http.get('/assets/env.json')
            .toPromise()
            .then(data => {
                this.config = data;
                return data;
            });
    }

    get apiUrl(): string {
        return this.config.apiUrl;
    }
}