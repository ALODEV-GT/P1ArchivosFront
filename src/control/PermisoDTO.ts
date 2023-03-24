import { RolEmpleadoDTO } from './RolEmpleadoDTO';
import { EstablecimientoDTO } from './EstablecimientoDTO';
export class PermisoDTO {
    constructor(
        public rol: RolEmpleadoDTO,
        public establecimiento: EstablecimientoDTO
    ) { }
}