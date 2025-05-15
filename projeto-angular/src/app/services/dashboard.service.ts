import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Car, VinInfos } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient)

  getVehicles(): Observable<Car[]> {
    return this.http.get<Car[]>("http://localhost:3001/vehicles")
  }

  getVinInfos(vin:string) {
    return this.http.post<VinInfos>("http://localhost:3001/vehicleData", { vin })
  }
}
