import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from 'src/app/core/api/models/i-location';

@Component({
  selector: 'app-dialog-ubicacion',
  templateUrl: './dialog-ubicacion.component.html',
  styleUrls: ['./dialog-ubicacion.component.css']
})
export class DialogUbicacionComponent implements OnInit {
  @Input() ubicacion?: string

  private loc?: ILocation;
  private locationUrl: string = "";
  private googleUrl: string ="https://www.google.com.ar/maps/place/";
  constructor() { }

  ngOnInit() {
    if(this.ubicacion){
      this.loc = JSON.parse(this.ubicacion);
      if(this.loc){
        this.locationUrl = this.googleUrl.concat(this.loc.latitude.toString(),',',this.loc.longitude.toString())
      }
    }
  }

  

}
