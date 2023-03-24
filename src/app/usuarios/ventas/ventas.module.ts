import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarVentasComponent } from './components/navbar-ventas/navbar-ventas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { VenderComponent } from './pages/vender/vender.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    NavBarVentasComponent,
    InicioComponent,
    VenderComponent,
    ProductosComponent,
    ClientesComponent,
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ],
  exports: [
    
  ]
})
export class VentasModule { }
