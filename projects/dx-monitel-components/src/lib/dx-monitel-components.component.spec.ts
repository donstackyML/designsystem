import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxMonitelComponentsComponent } from './dx-monitel-components.component';

describe('DxMonitelComponentsComponent', () => {
  let component: DxMonitelComponentsComponent;
  let fixture: ComponentFixture<DxMonitelComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DxMonitelComponentsComponent]
    });
    fixture = TestBed.createComponent(DxMonitelComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
