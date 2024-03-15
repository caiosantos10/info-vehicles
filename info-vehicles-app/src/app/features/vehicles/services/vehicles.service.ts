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

  getVehicles(): Observable<Object[]> {
    return this.http.get(`${this.BASE_URL}/vehicles`) as Observable<Vehicle[]>;
  }
  getVehicleById(id: string): Observable<Object> {
    return this.http.get(`${this.BASE_URL}/vehicles/${id}`);
  }
  registerVehicle(vehicle: Vehicle): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/vehicles`, vehicle);
  }
  updateVehicle(id: string, vehicle: Vehicle): Observable<Object> {
    return this.http.put(`${this.BASE_URL}/vehicles/${id}`, vehicle);
  }
  deleteVehicle(id: string): Observable<Object> {
    return this.http.delete(`${this.BASE_URL}/vehicles/${id}`);
  }
}
