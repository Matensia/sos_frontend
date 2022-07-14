import { Injectable } from "@angular/core";
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod,
  ResourceResponseBodyType,
} from "@ngx-resource/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
@ResourceParams({})
export class PingResourceService extends Resource {
  constructor(requestHandler: ResourceHandler) {
    super(requestHandler);
  }
  @ResourceAction({
    pathPrefix: `${environment.apiUrlBomberos}/api`,
    path: "/ping",
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Text,
  })
  bomberosPing: IResourceMethod<void, Text>;

  @ResourceAction({
    pathPrefix: `${environment.apiUrlPolicia}/api`,
    path: "/ping",
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Text,
  })
  policiaPing: IResourceMethod<void, Text>;

  @ResourceAction({
    pathPrefix: `${environment.apiUrlUrgencias}/api`,
    path: "/ping/urgencias",
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Text,
  })
  urgenciasPing: IResourceMethod<void, Text>;

  @ResourceAction({
    pathPrefix: `${environment.apiUrlDefensaCivil}/api`,
    path: "/ping/defensa_civil",
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Text,
  })
  defensaCivilPing: IResourceMethod<void, Text>;
}
