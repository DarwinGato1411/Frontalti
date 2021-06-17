import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import{ComsumoService} from './comsumo.service';
import { ClienteComponent } from './cliente/cliente.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { OrdenComponent } from './orden/orden.component';
import { BuscarclienteComponent } from './buscarcliente/buscarcliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleordenComponent } from './detalleorden/detalleorden.component';
import { CrearordenComponent } from './crearorden/crearorden.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ArticuloComponent,
    OrdenComponent,
    BuscarclienteComponent,
    DetalleordenComponent,
    CrearordenComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ComsumoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
