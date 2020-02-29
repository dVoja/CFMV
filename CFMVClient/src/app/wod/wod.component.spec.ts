import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WODComponent } from './wod.component';

describe('WODComponent', () => {
  let component: WODComponent;
  let fixture: ComponentFixture<WODComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WODComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
