import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ComsumoService } from '../comsumo.service';
import { ClienteMod } from '../Modelo/Modelo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  columnas: string[] = ['cedula', 'nombre', 'apellido', 'borrar', 'editar'];
  //columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  accion: String = "Agregar";
  dniBuscar: String = "";
  articuloselect: ClienteMod = new ClienteMod(0, "", "", "");

  @ViewChild(MatTable)
  tabla1!: MatTable<ClienteMod>;

  listado: any;

  constructor(private consumo: ComsumoService, private route: Router) {


  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dniBuscar = "";
    this.obtenerListado();
  }

  obtenerListado() {
    if (this.dniBuscar != "") {
      this.consumo.obtenerClientedni(this.dniBuscar)
        .subscribe(
          data => {

            this.listado = data;
          },
          error => { }
        )

    } else {
      this.consumo.obtenerClientes()
        .subscribe(
          data => {

            this.listado = data;
          },
          error => { }
        )


    }

  }

  obtenerListadoPorDni() {

    this.obtenerListado();
  }


  borrarFila(cod: ClienteMod) {
    console.log("COD ", cod);
    if (confirm("Realmente quiere borrarlo?")) {
      this.consumo.eliminarCliente(cod).
        subscribe(data => {
          this.obtenerListado();
        })
    }
  }

  agregar() {
    //var clienteparam=new ClienteMod(0, this.articuloselect.cliCedula, this.articuloselect.cliNombre, this.articuloselect.cliApellido)


    if (this.articuloselect.cliCedula == "" || this.articuloselect.cliApellido == ""
      || this.articuloselect.cliNombre == "") {
      alert("Verifique la informacion ingresada")
      return;
    }
    console.log(this.articuloselect)
    this.consumo.crearCliente(this.articuloselect).
      subscribe(data => {
       // alert("Guardado con exito")
        this.obtenerListado();
      })
    this.articuloselect = new ClienteMod(0, "", "", "");
  }


  seleccionar(cod: ClienteMod) {
    this.accion = "Modificar";
    this.articuloselect = cod;
  }
  nuevo() {
    this.accion = "Agregar";
    this.articuloselect = new ClienteMod(0, "", "", "");
  }

}




