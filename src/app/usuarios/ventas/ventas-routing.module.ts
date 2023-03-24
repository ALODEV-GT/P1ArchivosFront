import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VenderComponent } from './pages/vender/vender.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'vender',
        component: VenderComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: '**',
        redirectTo: 'vender'
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
export class VentasRoutingModule { }
