import { RolEmpleadoDTO } from './RolEmpleadoDTO';
import { EstablecimientoDTO } from './EstablecimientoDTO';
export class EmpleadoDTO {
    constructor(
        public idEmpleado: number,
        public idRolEmpleado: number,
        public usuario: string,
        public contrasena: string,
        public nombre: string,
        public rolEmpleado: RolEmpleadoDTO,
        public establecimiento: EstablecimientoDTO
    ) { }
}