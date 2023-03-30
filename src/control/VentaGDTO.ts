import { VentaDTO } from './VentaDTO';
import { ProductoDTO } from './ProductoDTO';
export class VentaGDTO{
    constructor(
        public venta: VentaDTO,
        public productos: ProductoDTO[]
    ){}
}