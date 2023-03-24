import { TipoEstablecimientoDTO } from "./TipoEstablecimientoDTO";

export class EstablecimientoDTO{
    constructor(
        public idEstablecimiento: number,
        public idTipoEstablecimiento: number,
        public nombre: string,
        public direccion: string,
        public tipoEstablecimiento: TipoEstablecimientoDTO
    ){}
}