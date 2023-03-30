import { RolEmpleadoDTO } from './RolEmpleadoDTO';
import { EstablecimientoDTO } from './EstablecimientoDTO';
import { EmpleadoDTO } from './EmpleadoDTO';
export class PermisoDTO {
    constructor(
        public rol: RolEmpleadoDTO,
        public establecimiento: EstablecimientoDTO,
        public idEmpleado: number,
        public nombreEmpleado: string
    ) { }
}