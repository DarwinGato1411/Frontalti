import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComsumoService } from '../comsumo.service';
import { ArticuloMod } from '../Modelo/Modelo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  accion: String = "Agregar";
  codigoBucar: String = "";

  columnas: string[] = ['codigo', 'nombre', 'precio', 'borrar', 'editar'];
  listadoArticulo: any;

  articuloselect: ArticuloMod = new ArticuloMod(0, "", "", 0,0,0);

  constructor(private consumo: ComsumoService, private route: Router) { }

  ngOnInit(): void {

    this.obtenerListado();
  }

  borrarFila(cod: ArticuloMod) {
    console.log("COD ", cod);
    if (confirm("Realmente quiere borrarlo?")) {
      this.consumo.eliminarArticulo(cod).
        subscribe(data => {
          this.obtenerListado();
        })
    }
  }


  obtenerArticulosLike() {
    this.obtenerListado();

  }
  obtenerListado() {
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
  agregar() {
    //var articuloparam = new ArticuloMod(0, this.articuloselect.artCodigo, this.articuloselect.artNombre, this.articuloselect.artPrecio)
    if(this.articuloselect.artCodigo==""
    ||this.articuloselect.artNombre==""){
      alert("Verifique la informacion..!! ")
      return;
    }
    console.log(this.articuloselect)
    this.consumo.crearArticulo(this.articuloselect).
      subscribe(data => {
       // alert("Guardado con exito")
        this.obtenerListado();
      })
    this.articuloselect = new ArticuloMod(0, "", "", 0,0,0);
  }
  nuevo() {
    this.articuloselect = new ArticuloMod(0, "", "", 0,0,0);

  }

  seleccionar(cod: ArticuloMod) {
    this.accion = "Modificar";
    this.articuloselect = cod;
  }

}
