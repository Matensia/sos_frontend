import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResourceHandler, ResourceAction, ResourceParams, Resource, 
  IResourceMethod, ResourceRequestMethod, ResourceRequestBodyType, 
  ResourceResponseBodyType } from '@ngx-resource/core';
import { ILogin } from '../models/i-login';
import { ISign } from '../models/i-sign';
import { IDialogSign } from '../models/i-sign-dialog';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/api`
})
export class LoginResourceService extends Resource {

  constructor(requestHandler: ResourceHandler) { 
    super(requestHandler); 
  }

  @ResourceAction({
    path: '/login',
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  login: IResourceMethod<ILogin, ILogin>

  @ResourceAction({
    path: '/login/user',
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  sign: IResourceMethod<ISign, ISign>

  @ResourceAction({
    path: '/login',
    method: ResourceRequestMethod.Put,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  verify: IResourceMethod<IDialogSign, IDialogSign>
}
