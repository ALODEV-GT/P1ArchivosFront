import { Component, OnInit } from '@angular/core';
import { QuintoReporte } from 'src/control/reportesBean/QuintoReporte';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-empleado-top-ventas',
  templateUrl: './empleado-top-ventas.component.html',
  styleUrls: ['./empleado-top-ventas.component.css']
})
export class EmpleadoTopVentasComponent implements OnInit {

  registros!: QuintoReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) { 
    this.reportesService.empleadosTopVentas().subscribe((res: QuintoReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
