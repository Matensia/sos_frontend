import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCancelAttComponent } from './dialog-cancel-att.component';

describe('DialogCancelAttComponent', () => {
  let component: DialogCancelAttComponent;
  let fixture: ComponentFixture<DialogCancelAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCancelAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCancelAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
