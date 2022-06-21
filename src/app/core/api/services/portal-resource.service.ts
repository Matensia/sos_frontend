import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {
  ResourceHandler,
  ResourceAction,
  ResourceParams,
  Resource,
  IResourceMethod,
  ResourceRequestMethod,
  ResourceRequestBodyType,
  ResourceResponseBodyType,
} from "@ngx-resource/core";
import { IService } from "../models/i-service";
import { ILogin } from "../models/i-login";
import { IAsistencia } from "../models/i-asistencia";
import { IAsistenciaRequest } from "../models/i-asistencia-req";
import { IChat } from "../models/i-chat";
import { IChatReq } from "../models/i-chat-req";

@Injectable({
  providedIn: "root",
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`,
})
export class PortalResourceService extends Resource {
  constructor(requestHandler: ResourceHandler) {
    super(requestHandler);
  }
  @ResourceAction({
    path: "/service",
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  services: IResourceMethod<void, IService[]>;

  @ResourceAction({
    path: "/attendance/history",
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  asistencias: IResourceMethod<ILogin, IAsistencia[]>;

  @ResourceAction({
    path: "/attendance",
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  asistencia: IResourceMethod<IAsistencia, IAsistenciaRequest>;

  @ResourceAction({
    path: "/attendance/chats",
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  chats: IResourceMethod<IChatReq, IChat[]>;

  @ResourceAction({
    path: "/attendance/chats",
    method: ResourceRequestMethod.Put,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  chat: IResourceMethod<IChat, IChat>;

  @ResourceAction({
    path: "/attendance/chats/{!attendance}",
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  chatByAttendance: IResourceMethod<{ attendance: number }, IChat[]>;

  @ResourceAction({
    path: "/attendance",
    method: ResourceRequestMethod.Delete,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  delete: IResourceMethod<IAsistencia, ILogin>;
}
