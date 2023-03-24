import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { EstablecimientoComponent } from './pages/establecimiento/establecimiento.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'establecimiento',
        component: EstablecimientoComponent
      },
      {
        path: '**',
        redirectTo: 'establecimiento'
      }
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
export class InventarioRoutingModule { }
