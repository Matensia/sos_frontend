import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOffServiceComponent } from './dialog-off-service.component';

describe('DialogOffServiceComponent', () => {
  let component: DialogOffServiceComponent;
  let fixture: ComponentFixture<DialogOffServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOffServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOffServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
