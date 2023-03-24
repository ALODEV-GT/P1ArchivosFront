import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBodegaComponent } from './components/navbar-bodega/navbar-bodega.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BodegaRoutingModule } from './bodega-routing.module';
import { EstablecimientoComponent } from './pages/establecimiento/establecimiento.component';



@NgModule({
  declarations: [
    NavbarBodegaComponent,
    InicioComponent,
    EstablecimientoComponent,
  ],
  imports: [
    CommonModule,
    BodegaRoutingModule
  ],
  exports: [
  ]
})
export class BodegaModule { }
