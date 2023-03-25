import { VentaDTO } from './VentaDTO';
import { ProductoDTO } from './ProductoDTO';
export class DetalleDTO {
    constructor(
        public venta: VentaDTO,
        public producto: ProductoDTO
    ) { }
}