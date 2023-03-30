import { EstablecimientoDTO } from './EstablecimientoDTO';
export class ProductoDTO {

    constructor(
        public idProducto: number,
        public idEstablecimiento: number,
        public nombre: string,
        public precio: number,
        public disponible: boolean,
        public establecimiento: EstablecimientoDTO
    ) { }
}

