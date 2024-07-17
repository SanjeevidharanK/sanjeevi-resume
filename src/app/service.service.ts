import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:3000/submit';

  post(data:any){
    return this.http.post(this.apiUrl,data)
  }
}
