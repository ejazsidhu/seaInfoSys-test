import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public ip = environment.ip;

  constructor(public http: Http) { }

  


  public getAllShows(){
    var url='';
  }
}
