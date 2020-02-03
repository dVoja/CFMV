import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmvWodComponent } from './cfmv-wod.component';

describe('CfmvWodComponent', () => {
  let component: CfmvWodComponent;
  let fixture: ComponentFixture<CfmvWodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmvWodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmvWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
