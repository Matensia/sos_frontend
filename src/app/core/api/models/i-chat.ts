import { IDataChat } from "./i-data-chat";

export interface IChat {
  idAsistencia?: number;
  idServicio?: string;
  dataChat?: IDataChat[];
  cancelada?: boolean;
  estado?: string;
}
