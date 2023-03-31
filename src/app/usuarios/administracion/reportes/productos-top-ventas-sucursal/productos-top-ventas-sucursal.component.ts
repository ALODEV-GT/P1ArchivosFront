import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { NovenoReporte } from '../../../../../control/reportesBean/NovenoReporte';
import { EstablecimientoService } from 'src/app/usuarios/inventario/services/establecimiento.service';
import { EstablecimientoDTO } from 'src/control/EstablecimientoDTO';

@Component({
  selector: 'app-productos-top-ventas-sucursal',
  templateUrl: './productos-top-ventas-sucursal.component.html',
  styleUrls: ['./productos-top-ventas-sucursal.component.css']
})
export class ProductosTopVentasSucursalComponent implements OnInit {

  registros!: NovenoReporte[];

  establecimientos: EstablecimientoDTO[] = [];

  btnNameActive: string = "Establecimiento";
  establecimientoElegido!: EstablecimientoDTO;

  //Paginacion
  public page!: number;

  constructor(
    private reportesService: ReportesService,
    private establecimientoService: EstablecimientoService
  ) {
    this.listarEstablecimientos();
  }

  ngOnInit(): void {
  }

  listarEstablecimientos() {
    this.establecimientoService.lista().subscribe((res: EstablecimientoDTO[]) => {
      this.establecimientos = res;
    });
  }

  cargarReporte(establecimiento: EstablecimientoDTO){
    this.btnNameActive = establecimiento.nombre;
    this.establecimientoElegido = establecimiento;
    this.reportesService.productosTopVentasSucursal(establecimiento.idEstablecimiento).subscribe((res: NovenoReporte[]) => {
      this.registros = res;
    });
    
  }

}
