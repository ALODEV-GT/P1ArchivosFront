export class EmpleadoDTO {
    constructor(
        public idEmpleado: number,
        public idRolEmpleado: number,
        public usuario: string,
        public contrasena: string,
        public nombre: string,
    ) { }
}