import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { PrimerReporte } from '../../../../../control/reportesBean/PrimerReporte';

@Component({
  selector: 'app-mas-vendidos',
  templateUrl: './mas-vendidos.component.html',
  styleUrls: ['./mas-vendidos.component.css']
})
export class MasVendidosComponent implements OnInit {

  registros!: PrimerReporte[];

  //Paginacion
  public page!: number;
  
  constructor(
    private reportesService: ReportesService
  ) {
    this.reportesService.masVendido().subscribe((res: PrimerReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
