import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { SextoReporte } from '../../../../../control/reportesBean/SextoReporte';
@Component({
  selector: 'app-empleado-top-ingresos',
  templateUrl: './empleado-top-ingresos.component.html',
  styleUrls: ['./empleado-top-ingresos.component.css']
})
export class EmpleadoTopIngresosComponent implements OnInit {

  registros!: SextoReporte[];
  
  //Paginacion
  public page!: number;

  constructor(private reportesService: ReportesService) { 
    this.reportesService.empleadosTopIngresos().subscribe((res: SextoReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
