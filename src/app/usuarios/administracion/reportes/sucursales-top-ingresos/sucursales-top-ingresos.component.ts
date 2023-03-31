import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { CuartoReporte } from '../../../../../control/reportesBean/CuartoReporte';

@Component({
  selector: 'app-sucursales-top-ingresos',
  templateUrl: './sucursales-top-ingresos.component.html',
  styleUrls: ['./sucursales-top-ingresos.component.css']
})
export class SucursalesTopIngresosComponent implements OnInit {

  registros!: CuartoReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) { 
    this.reportesService.sucursalesTopIngresos().subscribe((res: CuartoReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
