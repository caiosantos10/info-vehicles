import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get(`${this.BASE_URL}/vehicles`) as Observable<Vehicle[]>;
  }
}
