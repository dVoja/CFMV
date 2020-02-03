import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionChallangeComponent } from './nutrition-challange.component';

describe('NutritionChallangeComponent', () => {
  let component: NutritionChallangeComponent;
  let fixture: ComponentFixture<NutritionChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
