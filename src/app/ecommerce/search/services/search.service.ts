import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { toPromise } from 'rxjs/operators/toPromise';

@Injectable()
export class SearchService {
    private _apiRootUri: string;
    constructor(private httpClient: HttpClient) {
        this._apiRootUri = 'http://localhost:3000/';
    }

    public getItineraryList(arrival, departure, serviceTypeSelected): Promise<any> {
        // TODO
        // let url = '';
        // let url: string = '/assets/mock-data/itineraries.json';
        // if (arrival && departure) {
        //     url = `${this._apiRootUri}itinerary/list/${arrival}/${departure}`;
        // }
        // if (arrival && this.isUndefined(departure)) {
        //     url = `${this._apiRootUri}itinerary/list/${arrival}`;
        // }

        let url: string = '/assets/mock-data/itineraries.json';
        return this.httpClient.get(url).toPromise<any>();
    }

    public getArrivals(): Promise<any> {
        // let url = `http://localhost:3000/arrival`;
        let url = '/assets/mock-data/arrivals.json';
        return this.httpClient.get(url).toPromise<any>();
    }

    public getDepartures(): Promise<any> {
        // let url = `http://localhost:3000/arrival`;
        let url = '/assets/mock-data/departures.json';
        return this.httpClient.get(url).toPromise<any>();
    }

    public getServiceType(): Promise<any> {
        // let url = `http://localhost:3000/arrival`;
        let url = '/assets/mock-data/serviceTypes.json';
        return this.httpClient.get(url).toPromise<any>();
        
    }

    private isUndefined(param: any): boolean {
        if (param === undefined)
            return true;
        else
            return false;
    }

    private isStringEmpty(param: string): boolean {
        if (param == null || param === '')
            return true;
        else
            return false;
    }
}