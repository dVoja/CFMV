import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitFaqComponent } from './crossfit-faq.component';

describe('CrossfitFaqComponent', () => {
  let component: CrossfitFaqComponent;
  let fixture: ComponentFixture<CrossfitFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossfitFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossfitFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
