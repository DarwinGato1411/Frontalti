import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloMod, ClienteMod, DetalleOrdenMod, ordenCrear, Respuesta } from './Modelo/Modelo';

@Injectable({
  providedIn: 'root'
})
export class ComsumoService {

  constructor(private httpCliente: HttpClient) { }

  //METODOS DEL CLIENTE
  obtenerClientes() {
    return this.httpCliente.get<ClienteMod[]>("http://localhost:8087/api/clientes");
  }

  crearCliente(cliente: ClienteMod) {
    console.log("param", cliente)
    return this.httpCliente.post<ClienteMod>("http://localhost:8087/api/nuevocli", cliente);
  }

  eliminarCliente(cliente: ClienteMod) {
    console.log("param", cliente)
    return this.httpCliente.post<ClienteMod>("http://localhost:8087/api/eliminarcli", cliente);
  }
  obtenerClientedni(dni: String): Observable<any> {
    var urlFinal = "http://localhost:8087/api/clientedni/" + dni;
    return this.httpCliente.get<ClienteMod[]>(urlFinal)
  }

  obtenerClientecedula(dni: String)  {
    var urlFinal = "http://localhost:8087/api/clienteporcedula/" + dni;
    return this.httpCliente.get<ClienteMod>(urlFinal)
  }
  //METODOS DEL ARTICULO
  obtenerArticulos() {
    return this.httpCliente.get<ArticuloMod[]>("http://localhost:8087/api/articulos");
  }
  
  crearArticulo(articulo: ArticuloMod) {
    console.log("param articulo", articulo)
    return this.httpCliente.post<ArticuloMod>("http://localhost:8087/api/nuevoart", articulo);
  }

  eliminarArticulo(articulo: ArticuloMod) {
    console.log("param", articulo)
    return this.httpCliente.post<ArticuloMod>("http://localhost:8087/api/eliminarart", articulo);
  }

  obtenerArticulosLike(valor:String) {
    var urlFinal = "http://localhost:8087/api/articuloslike/" + valor;
    return this.httpCliente.get<ArticuloMod[]>(urlFinal);
  }
  //METODOS PARA ORDEN
  
  obtenerOrden() {
    return this.httpCliente.get<ArticuloMod[]>("http://localhost:8087/api/ordenes");
  }

  obtenerOrdenPorDni(dni: String) {
    var urlFinal = "http://localhost:8087/api/ordenesforcli/" + dni;
    return this.httpCliente.get<ArticuloMod[]>(urlFinal);
  }


  crearOrden(orden: ordenCrear){
    console.log("param articulo", orden)
    return this.httpCliente.post<Respuesta>("http://localhost:8087/api/crearorden", orden);
  }
   //METODOS PARA DETALLE DE LA ORDEN
   
  obtenerDetalleOrden(idOrden: String) {
    var urlFinal = "http://localhost:8087/api/detorden/" + idOrden;
    return this.httpCliente.get<DetalleOrdenMod[]>(urlFinal);
  }

}
