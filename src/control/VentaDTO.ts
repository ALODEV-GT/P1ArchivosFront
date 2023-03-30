export class VentaDTO{
    constructor(
        public idVenta: number,
        public nitCliente: string,
        public idEmpleado: number,
        public total: number,
        public descuento: number,
        public porcentajeDescuento: number
    ){}
}