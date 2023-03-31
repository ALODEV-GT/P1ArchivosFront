import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { SeptimoReporte } from '../../../../../control/reportesBean/SeptimoReporte';

@Component({
  selector: 'app-productos-top-ventas',
  templateUrl: './productos-top-ventas.component.html',
  styleUrls: ['./productos-top-ventas.component.css']
})
export class ProductosTopVentasComponent implements OnInit {

  registros!: SeptimoReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) {
    this.reportesService.productosTopVentas().subscribe((res: SeptimoReporte[]) => {
      this.registros = res;
    });
   }

  ngOnInit(): void {
  }

}
