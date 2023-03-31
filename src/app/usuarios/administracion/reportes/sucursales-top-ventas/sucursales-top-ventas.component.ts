import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { TercerReporte } from '../../../../../control/reportesBean/TercerReporte';

@Component({
  selector: 'app-sucursales-top-ventas',
  templateUrl: './sucursales-top-ventas.component.html',
  styleUrls: ['./sucursales-top-ventas.component.css']
})
export class SucursalesTopVentasComponent implements OnInit {

  registros!: TercerReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) { 
    this.reportesService.sucursalesTopVentas().subscribe((res: TercerReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
