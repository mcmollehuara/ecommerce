import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {
    private _apiRootUri: string;
    constructor(private httpClient: HttpClient) {
        this._apiRootUri = 'http://localhost:3000/';
    }


    public getItinerary(id): Promise<any> {
        // let url = `${this._apiRootUri}itinerary/item/${id}`;
        let url: string = '/assets/mock-data/itineraries.json';
        return this.httpClient.get(url).toPromise<any>();
    }
}