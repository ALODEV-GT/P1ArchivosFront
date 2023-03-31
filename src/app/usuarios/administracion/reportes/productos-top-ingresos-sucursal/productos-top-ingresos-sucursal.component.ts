import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { DecimoReporte } from '../../../../../control/reportesBean/DecimoReporte';
import { EstablecimientoService } from 'src/app/usuarios/inventario/services/establecimiento.service';
import { EstablecimientoDTO } from 'src/control/EstablecimientoDTO';

@Component({
  selector: 'app-productos-top-ingresos-sucursal',
  templateUrl: './productos-top-ingresos-sucursal.component.html',
  styleUrls: ['./productos-top-ingresos-sucursal.component.css']
})
export class ProductosTopIngresosSucursalComponent implements OnInit {

  registros!: DecimoReporte[];

  establecimientos: EstablecimientoDTO[] = [];

  btnNameActive: string = "Establecimiento";
  establecimientoElegido!: EstablecimientoDTO;

  //Paginacion
  public page!: number;

  constructor(
    private reportesService: ReportesService,
    private establecimientoService: EstablecimientoService,
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

  cargarReporte(establecimiento: EstablecimientoDTO) {
    this.btnNameActive = establecimiento.nombre;
    this.establecimientoElegido = establecimiento;
    this.reportesService.productosTopIngresosSucursal(establecimiento.idEstablecimiento).subscribe((res: DecimoReporte[]) => {
      this.registros = res;
    });
  }

}
