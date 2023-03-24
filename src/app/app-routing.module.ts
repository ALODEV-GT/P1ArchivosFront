import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const rutas: Routes = [
  {
    //LazyLoad
    path: 'autenticacion',
    loadChildren: () => import('./authentication/authentication.module').then(
      m => m.AuthenticationModule
    )
  },
  {
    path: 'administrador',
    loadChildren: () => import('./usuarios/administracion/administracion.module').then(
      m => m.AdministracionModule
    )
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./usuarios/ventas/ventas.module').then(
      m => m.VentasModule
    )
  },
  {
    path: "inventario",
    loadChildren: () => import('./usuarios/inventario/inventario.module').then(
      m => m.InventarioModule
    )
  },
  {
    path: "bodeguero",
    loadChildren: () => import('./usuarios/bodega/bodega.module').then(
      m => m.BodegaModule
    )
  },
  {
    path: '', redirectTo: 'autenticacion/login', pathMatch: 'full'
  },
  {
    path: '404', //Pagina de error
    component: ErrorPageComponent //Componente relacionado con el path.
  },
  {
    path: '**', //Cualquier otra pagina que no existe.
    redirectTo: '404'
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
