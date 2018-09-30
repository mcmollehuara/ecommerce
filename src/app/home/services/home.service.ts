import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { toPromise } from 'rxjs/operators/toPromise';

@Injectable()
export class HomeService {
    private _apiRootUri: string;
    constructor(private httpClient: HttpClient) {
        this._apiRootUri = 'http://localhost:3000/';
    }

    public getItineraryList(departure, arrival): Promise<any> {
        let url = `${this._apiRootUri}itinerary/departure/arrival`;
        return this.httpClient.get(
            url
        ).toPromise();
    }

    public getItineraryDeparture(departure): Promise<any> {
        let url = `http://localhost:3000/itinerary/departure/${departure}`;
        return this.httpClient.get(
            url
        ).toPromise();
    }

    public getItineraryArrival(arrival): Promise<any> {
        let url = `http://localhost:3000/itinerary/arrival/${arrival}`;
        return this.httpClient.get(url).toPromise();
    }

    public getDepartures(): Promise<any> {
        // let url = `http://localhost:3000/departure`;
        let url = '/assets/mock-data/departures.json';
        return this.httpClient.get(url).toPromise<any>();
    }


    public getArrivals(): Promise<any> {
        // let url = `http://localhost:3000/arrival`;
        let url = '/assets/mock-data/arrivals.json';
        return this.httpClient.get(url).toPromise<any>();
    }
}