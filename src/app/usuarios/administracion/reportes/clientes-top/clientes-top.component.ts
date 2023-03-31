import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { SegundoReporte } from '../../../../../control/reportesBean/SegundoReporte';

@Component({
  selector: 'app-clientes-top',
  templateUrl: './clientes-top.component.html',
  styleUrls: ['./clientes-top.component.css']
})
export class ClientesTopComponent implements OnInit {

  registros!: SegundoReporte[];

  //Paginacion
  public page!: number;
  
  constructor(private reportesService: ReportesService) { 
    this.reportesService.clientesTop().subscribe((res: SegundoReporte[]) => {
      this.registros = res;
    });
  }

  ngOnInit(): void {
  }

}
