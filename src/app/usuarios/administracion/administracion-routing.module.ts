import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { ClientesTopComponent } from './reportes/clientes-top/clientes-top.component';
import { EmpleadoTopIngresosComponent } from './reportes/empleado-top-ingresos/empleado-top-ingresos.component';
import { EmpleadoTopVentasComponent } from './reportes/empleado-top-ventas/empleado-top-ventas.component';
import { ListadoComponent } from './reportes/listado/listado.component';
import { MasVendidosComponent } from './reportes/mas-vendidos/mas-vendidos.component';
import { ProductosTopIngresosComponent } from './reportes/productos-top-ingresos/productos-top-ingresos.component';
import { ProductosTopVentasComponent } from './reportes/productos-top-ventas/productos-top-ventas.component';
import { SucursalesTopIngresosComponent } from './reportes/sucursales-top-ingresos/sucursales-top-ingresos.component';
import { SucursalesTopVentasComponent } from './reportes/sucursales-top-ventas/sucursales-top-ventas.component';
import { ProductosTopVentasSucursalComponent } from './reportes/productos-top-ventas-sucursal/productos-top-ventas-sucursal.component';
import { ProductosTopIngresosSucursalComponent } from './reportes/productos-top-ingresos-sucursal/productos-top-ingresos-sucursal.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'colaboradores',
        component: ColaboradoresComponent
      },
      {
        path: 'reportes',
        component: ReporteComponent,
        children: [
          {
            path: 'listado',
            component: ListadoComponent
          },
          {
            path: 'mas-vendido',
            component: MasVendidosComponent
          },
          {
            path: 'clientes-top',
            component: ClientesTopComponent
          },
          {
            path: 'sucursales-top-ventas',
            component: SucursalesTopVentasComponent
          },
          {
            path: 'sucursales-top-ingresos',
            component: SucursalesTopIngresosComponent
          },
          {
            path: 'empleado-top-ventas',
            component: EmpleadoTopVentasComponent
          },
          {
            path: 'empleado-top-ingresos',
            component: EmpleadoTopIngresosComponent
          },
          {
            path: 'productos-top-ventas',
            component: ProductosTopVentasComponent
          },
          {
            path: 'productos-top-ingresos',
            component: ProductosTopIngresosComponent
          },
          {
            path: 'productos-top-ventas-sucursal',
            component: ProductosTopVentasSucursalComponent
          },
          {
            path: 'productos-top-ingresos-sucursal',
            component: ProductosTopIngresosSucursalComponent
          },
          {
            path: "**",
            redirectTo: 'listado'
          }
        ]
      },
      {
        path: "**",
        redirectTo: 'reportes'
      }
      //{
      // path: 'generales',
      //component: PaginaGeneralesComponent
      //},
      //{
      // path: 'lista-anuncios',
      // component: ListaAnunciosComponent
      //}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ], exports: [
    RouterModule
  ]
})
export class AdministracionRoutingModule { }
