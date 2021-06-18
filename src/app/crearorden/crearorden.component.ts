import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ComsumoService } from '../comsumo.service';
import { ArticuloMod, ClienteMod, DetalleOrdenMod, ordenCrear, OrdenMod } from '../Modelo/Modelo';

@Component({
  selector: 'app-crearorden',
  templateUrl: './crearorden.component.html',
  styleUrls: ['./crearorden.component.scss']
})
export class CrearordenComponent implements OnInit {


  cantidadAgrega!:number;
  dniBuscar: String = "";
  codigoBucar: String = "";
  listadoArticulo: ArticuloMod[] = []
  listadoArticuloSelected: ArticuloMod[] = [];
  articuloselect: ArticuloMod = new ArticuloMod(0, "", "", 0,0,0);
  columnas: string[] = ['cantidad','codigo', 'nombre', 'precio', 'editar'];
  
  columnasSelect: string[] = ['cantidad','codigo', 'nombre', 'precio', 'editar'];

  clienteBuscado: ClienteMod = new ClienteMod(0, "", "", "");

  orden!: OrdenMod;
  ordenCrear!: ordenCrear;

  @ViewChild('tabla3')
  tabla3!: MatTable<ArticuloMod>;


  constructor(private consumo: ComsumoService, private route: Router) { }



  ngOnInit(): void {
    this.obtenerListadoArticulos();
  }


  obtenerListadoPorDni() {
    this.consumo.obtenerClientecedula(this.dniBuscar)
      .subscribe(
        data => {

          this.clienteBuscado = data;
        },
        error => { }
      )

  }
  obtenerListadoArticulos() {
    if (this.codigoBucar != "") {
      this.consumo.obtenerArticulosLike(this.codigoBucar)
        .subscribe(
          data => {

            this.listadoArticulo = data;
          },
          error => { }
        )

    } else {
      this.consumo.obtenerArticulos()
        .subscribe(
          data => {

            this.listadoArticulo = data;
          },
          error => { }
        )

    }

  }


  agregar22(cod: ArticuloMod) {

    this.listadoArticuloSelected.push(cod);
    console.log(this.listadoArticuloSelected)
    this.tabla3.dataSource = this.listadoArticuloSelected;
    this.tabla3.renderRows();
    //this.articuloselect = new Articulo(0, "", 0);
  }

  agregar(cod: ArticuloMod) {
    console.log(cod.artStock,'   ',this.cantidadAgrega   )
  //  if(this.cantidadAgrega>cod.artStock){
   //   alert('La cantidad es superior al stock')
   // return;
    //}
//ingreso la cantidad al item

    cod.cantidadRegistra=this.cantidadAgrega;
    
    let data: ArticuloMod[] = [];
    if (this.tabla3.dataSource) {
      data = (this.tabla3.dataSource as ArticuloMod[]);
    }
    data.push(cod);
    this.tabla3.dataSource = data;
    this.tabla3.renderRows();
  }

  borrarFila(cod: number) {
    //if (confirm("Realmente quiere borrarlo?")) {
    this.listadoArticuloSelected.splice(cod, 1);
    this.tabla3.renderRows();
    //}
  }

  crearOrden() {

    if (this.clienteBuscado.cliCedula == "") {
      alert("Verifique la información...!")
      return;
    }
    this.ordenCrear = new ordenCrear(this.clienteBuscado, this.listadoArticuloSelected);
    this.consumo.crearOrden(this.ordenCrear).
      subscribe(data => {
        // alert("Guardado con exito")

        if (data.codigo=='001'){
        alert(data.descripcion)
        return;
        }
        this.route.navigate(["orden"])
      })
  }
  regresar(){

    this.route.navigate(["orden"])
  }
}
