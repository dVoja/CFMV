import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCrossfitComponent } from './what-is-crossfit.component';

describe('WhatIsCrossfitComponent', () => {
  let component: WhatIsCrossfitComponent;
  let fixture: ComponentFixture<WhatIsCrossfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsCrossfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsCrossfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
