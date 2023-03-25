import { ClienteDTO } from './ClienteDTO';
import { EmpleadoDTO } from './EmpleadoDTO';
export class VentaDTO{
    constructor(
        public idVenta: number,
        public fecha: Date,
        public nitCliente: string,
        public idEmpleado: number,
        public total: number,
        public descuento: number,
        public porcentajeDescuento: number,
        public cliente: ClienteDTO,
        public empleado: EmpleadoDTO
    ){}
}