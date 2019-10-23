import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualAlertComponent } from './contextual-alert.component';

describe('ContextualAlertComponent', () => {
  let component: ContextualAlertComponent;
  let fixture: ComponentFixture<ContextualAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextualAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
