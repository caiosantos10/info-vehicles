import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../interfaces/vehicle';
import { concatMap, of, tap } from 'rxjs';
import { NgxMaskDirective } from 'ngx-mask';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, NgxMaskDirective],
  providers: [VehiclesService],
  templateUrl: './vehicles-form.component.html',
  styleUrl: './vehicles-form.component.scss'
})
export class VehiclesFormComponent implements OnInit {
  form!: FormGroup;
  private id!: string;
  editEnable = false;

  constructor(
    private fb: FormBuilder,
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editEnable = false;
    this.formBuilder();
    this.fillFormByIdParam();
  }


  private fillFormByIdParam() {
    this.route.paramMap
      .pipe(
        tap(params => this.id = params.get('id') as string),
        concatMap(params => this.findVehicleById(params.get('id') as string)),
      ).subscribe(vehicles => {
        if (this.id) {
          this.form.patchValue(vehicles);
          this.editEnable = true;
        }
      });
  }

  private findVehicleById(id: string) {
    if (!id) return of();
    return this.vehiclesService.getVehicleById(id);
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', Validators.required],
    });
  }

  private register(): void {
    const vehicle = this.form.value as Vehicle;
    vehicle.placa
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLocaleUpperCase();

    this.vehiclesService.registerVehicle(vehicle)
      .pipe(tap(vehicle => console.log(vehicle)))
      .subscribe();
  }

  private update(): void {
    const vehicle = this.form.value as Vehicle;
    vehicle.placa.toLocaleUpperCase();
    this.vehiclesService.updateVehicle(this.id, vehicle)
      .pipe(tap(vehicle => console.log(vehicle)))
      .subscribe();
  }
  
  onSubmit(): void {
    if (!this.form.valid) return
    if (!!this.id) {
      this.update();
    } else {
      this.register();
    }

  }
}
