import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CrearordenComponent } from './crearorden/crearorden.component';
import { DetalleordenComponent } from './detalleorden/detalleorden.component';
import { OrdenComponent } from './orden/orden.component';

const routes: Routes = [
  {path:'clientenav',component:ClienteComponent},
  {path:'articulo',component:ArticuloComponent},
  {path:'orden',component:OrdenComponent},
  {path:'detorden',component:DetalleordenComponent},
  {path:'crearord',component:CrearordenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
