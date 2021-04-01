import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResourceHandler, ResourceAction, ResourceParams, Resource, 
  IResourceMethod, ResourceRequestMethod, ResourceRequestBodyType, 
  ResourceResponseBodyType } from '@ngx-resource/core';
import { INews } from '../models/i-new';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})

export class NewsResourceService extends Resource {

  constructor(requestHandler: ResourceHandler) { 
    super(requestHandler); 
  }

  @ResourceAction({
    path: '/news',
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  news: IResourceMethod<void, INews[]>
}
