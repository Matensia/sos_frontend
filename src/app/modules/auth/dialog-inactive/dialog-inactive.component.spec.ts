import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInactiveComponent } from './dialog-inactive.component';

describe('DialogInactiveComponent', () => {
  let component: DialogInactiveComponent;
  let fixture: ComponentFixture<DialogInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
