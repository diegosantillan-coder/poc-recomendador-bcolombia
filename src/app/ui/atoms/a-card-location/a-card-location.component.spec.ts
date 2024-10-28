import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACardLocationComponent } from './a-card-location.component';

describe('ACardLocationComponent', () => {
  let component: ACardLocationComponent;
  let fixture: ComponentFixture<ACardLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACardLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACardLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
