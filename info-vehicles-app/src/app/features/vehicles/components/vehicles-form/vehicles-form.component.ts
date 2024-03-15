import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../interfaces/vehicle';
import { tap } from 'rxjs';
@Component({
  selector: 'app-vehicles-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  providers: [VehiclesService],
  templateUrl: './vehicles-form.component.html',
  styleUrl: './vehicles-form.component.scss'
})
export class VehiclesFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.formBuilder();
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

  onSubmit() {
    const vehicle = this.form.value as Vehicle;
    console.log(vehicle)
    this.vehiclesService.registerVehicle(vehicle)
      .pipe(tap(vehicle => console.log(vehicle)))
      .subscribe();
  }
}
