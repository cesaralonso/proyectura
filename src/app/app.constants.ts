import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public Server: string = 'http://www.ideasys.com.mx/';
  public ApiUrl: string = 'ProyecturaObraSW/Api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

}
