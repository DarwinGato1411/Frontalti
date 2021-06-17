import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComsumoService } from '../comsumo.service';

@Component({
  selector: 'app-detalleorden',
  templateUrl: './detalleorden.component.html',
  styleUrls: ['./detalleorden.component.scss']
})
export class DetalleordenComponent implements OnInit {
  
  columnas: string[] = ['codart', 'nombre', 'precio'];
  listadoOrdenDet: any;
  
  idOrdenDet: String = "";


  constructor( private route: ActivatedRoute,
    private router: Router,private consumo: ComsumoService) { }

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.idOrdenDet = params.idOrdenParam;
          console.log(this.idOrdenDet); // price
        }
      );

      this.obtenerListado();
    }

    obtenerListado() {

      this.consumo.obtenerDetalleOrden(this.idOrdenDet)
        .subscribe(
          data => {
  
            this.listadoOrdenDet = data;
          },
          error => { }
        )
    }
    regresar(){
      this.router.navigate(["orden"]);

    }
}
