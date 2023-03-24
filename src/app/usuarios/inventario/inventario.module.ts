import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarInventarioComponent } from './components/navbar-inventario/navbar-inventario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { EstablecimientoComponent } from './pages/establecimiento/establecimiento.component';



@NgModule({
  declarations: [
    NavbarInventarioComponent,
    InicioComponent,
    EstablecimientoComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ],
  exports: [
  ]
})
export class InventarioModule { }
