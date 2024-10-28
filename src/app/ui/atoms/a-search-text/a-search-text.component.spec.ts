import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASearchTextComponent } from './a-search-text.component';

describe('ASearchTextComponent', () => {
  let component: ASearchTextComponent;
  let fixture: ComponentFixture<ASearchTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASearchTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASearchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
