import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComsumoService } from '../comsumo.service';
import { OrdenMod } from '../Modelo/Modelo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { BuscarclienteComponent } from '../buscarcliente/buscarcliente.component';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {


  dniBuscar :String="";
  columnas: string[] = ['codord', 'fecha', 'cedula', 'nombre', 'apellido',"total", 'detalle'];
  listadoOrden: any;


  constructor(private consumo: ComsumoService, private route: Router, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.obtenerListado();
  }

  verDetalle(cod: OrdenMod) {
    console.log("COD ", cod);
    
    this.route.navigate(["detorden"],{ queryParams: { idOrdenParam: cod.idOrden }});
  }

  nuevaorden() {        
    this.route.navigate(["crearord"]);
  }



  obtenerListado() {

    this.consumo.obtenerOrden()
      .subscribe(
        data => {

          this.listadoOrden = data;
        },
        error => { }
      )
  }

  buscarCliente(cod: OrdenMod) {
    console.log("COD ", cod);
    const ref = this.modalService.open(BuscarclienteComponent);
    ref.componentInstance.cod = cod;

    ref.result.then((yes) => {
      console.log("ok")
    },
      (cancel) => {
        console.log("cancel")
      })
  }


  obtenerListadoPorDni() {

    this.consumo.obtenerOrdenPorDni(this.dniBuscar)
      .subscribe(
        data => {

          this.listadoOrden = data;
        },
        error => { }
      )
  }


}
