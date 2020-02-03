import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidfitComponent } from './kidfit.component';

describe('KidfitComponent', () => {
  let component: KidfitComponent;
  let fixture: ComponentFixture<KidfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
