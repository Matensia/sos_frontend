import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResourceHandler, ResourceAction, ResourceParams, Resource, 
  IResourceMethod, ResourceRequestMethod, ResourceRequestBodyType, 
  ResourceResponseBodyType } from '@ngx-resource/core';
import { IService } from '../models/i-service';
import { ILogin } from '../models/i-login';
import { IAsistencia } from '../models/i-asistencia';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})

export class PortalResourceService extends Resource{

  constructor(requestHandler: ResourceHandler) { 
    super(requestHandler); 
  }
  @ResourceAction({
    path: '/portal/services',
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  services: IResourceMethod<void, IService[]>

  @ResourceAction({
    path: '/asistencias/historico',
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  asistencias: IResourceMethod<ILogin, IAsistencia[]>

}
