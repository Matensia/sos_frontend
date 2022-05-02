import { Component, OnInit } from '@angular/core';
import { IAsistencia } from 'src/app/core/api/models/i-asistencia';
import { IAsistenciaRequest } from 'src/app/core/api/models/i-asistencia-req';
import { PortalResourceService } from 'src/app/core/api/services/portal-resource.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})

export class HistoricalComponent implements OnInit {

   asistencias: IAsistencia[];

  constructor(
    private _service: PortalResourceService,
  ) {}

  ngOnInit() {


    let reqHistorical: IAsistenciaRequest = <IAsistenciaRequest> {
      dni: parseInt(sessionStorage.getItem('dni')),
    };

    this._service.asistencias(reqHistorical).then((asistencias: IAsistencia[]) => {
      this.asistencias = asistencias
    });
  }
}