import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { Subscription, tap } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [VehiclesService],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit {
  @ViewChild('actionsCol') actionsCol!: ElementRef;

  vehicles: Vehicle[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehiclesService
      .getVehicles()
      .pipe(tap(vehicle => vehicle.map(item => item = { ...item, showActions: false })))
      .subscribe(vehicles => this.vehicles = vehicles as Vehicle[]);
  }

  deleteVehicle(id: string): void {
    this.vehiclesService.deleteVehicle(id).subscribe();
  }

  clickActionsMenu(item: Vehicle) {
    item.showActions = !item.showActions;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.actionsCol?.nativeElement?.contains(event.target)) {
      this.vehicles?.map(vehicle => vehicle.showActions = false);
    }
  }
}
