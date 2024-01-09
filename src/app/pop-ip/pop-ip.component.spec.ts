import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopIpComponent } from './pop-ip.component';

describe('PopIpComponent', () => {
  let component: PopIpComponent;
  let fixture: ComponentFixture<PopIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopIpComponent]
    });
    fixture = TestBed.createComponent(PopIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
