import { Component, OnInit } from '@angular/core';
import { NewsResourceService } from 'src/app/core/api/services/news-resource.service';
import { INews } from 'src/app/core/api/models/i-new';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  showFiller = false;
  tipo_noticia_principal
  tipo_noticia_secundaria
  tipo_aviso_principal
  tipo_aviso_secundario
  mensaje_noticia_principal
  mensaje_noticia_secundaria
  mensaje_aviso_principal
  mensaje_aviso_secundario
  
  constructor(
    private _service: NewsResourceService,
    ) { }

  ngOnInit() {
    
    this._service.news().then((news: INews[]) => {

     this.tipo_noticia_principal = news[3].tipo
     this.tipo_noticia_secundaria = news[2].tipo
     this.tipo_aviso_principal = news[1].tipo
     this.tipo_aviso_secundario = news[0].tipo
     this.mensaje_noticia_principal = news[3].mensaje
     this.mensaje_noticia_secundaria = news[2].mensaje
     this.mensaje_aviso_principal = news[1].mensaje
     this.mensaje_aviso_secundario = news[0].mensaje
    });
   
  }
}
