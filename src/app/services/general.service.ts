import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public ip = environment.ip;

  constructor(public http: Http) { }


  urlBuilder(urlString: string) {
    return this.ip + urlString;
  }

  public getAllShows() {
    var url = this.urlBuilder('schedule/full');
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.get(url, { headers: headers }).map((response: Response) => response.json());
     return this.http.get(url).map((response: Response) => response.json());

  }
}
