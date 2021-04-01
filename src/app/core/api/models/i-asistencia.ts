export interface IAsistencia {
    id?: number;
    idServicio?: string
	estado?: string;
	idSolicitud?: number;
	fechaCreacion?: string;
	fechaCancelacion?: string;
	motivoCancelacion?: string;
}