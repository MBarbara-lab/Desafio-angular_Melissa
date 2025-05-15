import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-table',
  imports: [],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})

export class CarTableComponent {
  @Input() vin:string = ""
  @Input() odometer:number = 0
  @Input() fuelLevel:number = 0
  @Input() status:string = ""
  @Input() lat:number = 0
  @Input() long:number = 0
}
