export class ClienteMod {
    constructor(public idCliente: number, public cliCedula: string, public cliNombre: string, public cliApellido: string) {
    }

}

export class ArticuloMod {
    constructor(public idArticulo: number, public artCodigo: string, public artNombre: string, public artPrecio: number,public artStock:number,public cantidadRegistra:number) {
    }

}


export class OrdenMod {
    constructor(public idOrden: number, public ordNumero: number, public ordFecha: Date, public idArticulo: ArticuloMod, public idCliente: ClienteMod) {
    }
    

}


export class DetalleOrdenMod {
    constructor(public idDetalle: number, public detCantidad: number, public detSubtotal: number,public setTotal:number, public idArticulo: ArticuloMod, public idOrden: OrdenMod) {
    }

    

}

export class ordenCrear {
    constructor(public idCliente: ClienteMod,public idrticulos:ArticuloMod[]) {
    }

}

export class Respuesta {
    constructor(public codigo: string,public descripcion:string) {
    }

}