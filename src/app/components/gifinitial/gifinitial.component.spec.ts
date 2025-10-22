import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifinitialComponent } from './gifinitial.component';

describe('GifinitialComponent', () => {
  let component: GifinitialComponent;
  let fixture: ComponentFixture<GifinitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifinitialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
