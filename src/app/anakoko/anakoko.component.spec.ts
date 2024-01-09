import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakokoComponent } from './anakoko.component';

describe('AnakokoComponent', () => {
  let component: AnakokoComponent;
  let fixture: ComponentFixture<AnakokoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnakokoComponent]
    });
    fixture = TestBed.createComponent(AnakokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
