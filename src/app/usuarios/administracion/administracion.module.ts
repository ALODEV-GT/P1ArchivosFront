import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdministracionComponent } from './components/navbar-administracion/navbar-administracion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { MasVendidosComponent } from './reportes/mas-vendidos/mas-vendidos.component';
import { ClientesTopComponent } from './reportes/clientes-top/clientes-top.component';
import { SucursalesTopVentasComponent } from './reportes/sucursales-top-ventas/sucursales-top-ventas.component';
import { SucursalesTopIngresosComponent } from './reportes/sucursales-top-ingresos/sucursales-top-ingresos.component';
import { EmpleadoTopVentasComponent } from './reportes/empleado-top-ventas/empleado-top-ventas.component';
import { EmpleadoTopIngresosComponent } from './reportes/empleado-top-ingresos/empleado-top-ingresos.component';
import { ProductosTopVentasComponent } from './reportes/productos-top-ventas/productos-top-ventas.component';
import { ProductosTopIngresosComponent } from './reportes/productos-top-ingresos/productos-top-ingresos.component';
import { ProductosTopVentasSucursalComponent } from './reportes/productos-top-ventas-sucursal/productos-top-ventas-sucursal.component';
import { ProductosTopIngresosSucursalComponent } from './reportes/productos-top-ingresos-sucursal/productos-top-ingresos-sucursal.component';
import { ListadoComponent } from './reportes/listado/listado.component';



@NgModule({
  declarations: [
    NavbarAdministracionComponent,
    InicioComponent,
    ReporteComponent,
    ColaboradoresComponent,
    MasVendidosComponent,
    ClientesTopComponent,
    SucursalesTopVentasComponent,
    SucursalesTopIngresosComponent,
    EmpleadoTopVentasComponent,
    EmpleadoTopIngresosComponent,
    ProductosTopVentasComponent,
    ProductosTopIngresosComponent,
    ProductosTopVentasSucursalComponent,
    ProductosTopIngresosSucursalComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ],
  exports: [
  ]
})
export class AdministracionModule { }
