import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WodService {

  constructor(private httpClient: HttpClient) { }

  findByDate(date: string) {
    return this.httpClient.get('http://localhost:8080/wodController/findByDate/' + date);
  }
 // wodController/findByDate/12.12.2020.1





}
