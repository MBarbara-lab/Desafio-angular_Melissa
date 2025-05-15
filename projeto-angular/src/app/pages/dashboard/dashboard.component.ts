import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarTableComponent } from '../../components/car-table/car-table.component';
import { DashboardService } from '../../services/dashboard.service';
import { Car, VinInfos } from '../../models/car';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService);

  cars: Car[] = [];

  selectedCar: Car = {
    id: -1,
    vehicle: '',
    totalVolume: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: '',
    img: '',
  };

  vinInfos: VinInfos = {
    id: 0,
    odometer: 0,
    fuelLevel: 0,
    status: '',
    lat: 0,
    long: 0,
  };

  ngOnInit() {
    this.dashboardService.getVehicles().subscribe({
      error: () => {},
      next: (cars) => {
        this.cars = Object.values(cars) as Car[];
        this.selectedCar = cars[0];

        this.dashboardService.getVinInfos(this.selectedCar.vin).subscribe({
          error: () => {},
          next: (vinInfos) => {
            this.vinInfos = vinInfos;
          },
        });
      },
    });
  }

  onChangeSelect(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    const car = this.cars.find((car) => car.id === id);

    if (car) {
      this.selectedCar = car;
    }

    this.dashboardService.getVinInfos(this.selectedCar.vin).subscribe({
      error: () => {},
      next: (vinInfos) => {
        this.vinInfos = vinInfos;
      },
    });
  }
}
