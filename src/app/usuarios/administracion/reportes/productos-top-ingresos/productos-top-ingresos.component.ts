import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { OctavoReporte } from '../../../../../control/reportesBean/OctavoReporte';

@Component({
  selector: 'app-productos-top-ingresos',
  templateUrl: './productos-top-ingresos.component.html',
  styleUrls: ['./productos-top-ingresos.component.css']
})
export class ProductosTopIngresosComponent implements OnInit {

  registros!: OctavoReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) { 
    this.reportesService.productosTopIngresos().subscribe((res: OctavoReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
