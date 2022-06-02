import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  email_bind = sessionStorage.getItem('email')

  ngOnInit() {
  }

  mobileQuery: MediaQueryList;

  fillerNav = [
    {name:"Inicio",route:"news",icon:"home"},
    {name:"Servicios",route:"services",icon:"call"},
    {name:"Historico",route:"historical",icon:"sd_storage"},
    {name:"Chats",route:"message",icon:"question_answer"}
  ] 
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}


