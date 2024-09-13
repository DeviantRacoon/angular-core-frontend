import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {
  private apiKey = environment.apiKey;

  private headers = {
    'X-Shopify-Access-Token': this.apiKey
  };

  constructor(private http: HttpClient) { }

  getProducts(): Promise<any> {
    const url = "/api/products.json";
    return lastValueFrom(this.http.get(url, { headers: this.headers }));
  }
}
