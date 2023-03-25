import { EstablecimientoDTO } from './EstablecimientoDTO';
import { TipoProductoDTO } from './TipoProductoDTO';
export class ProductoDTO {

    constructor(
        public idProducto: number,
        public idEstablecimiento: number,
        public idTipoProducto: number,
        public precio: number,
        public establecimiento: EstablecimientoDTO,
        public tipoProducto: TipoProductoDTO
    ) { }
}

