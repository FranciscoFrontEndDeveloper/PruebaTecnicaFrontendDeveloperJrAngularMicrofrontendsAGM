import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotableComponent } from './infotable.component';

describe('InfotableComponent', () => {
  let component: InfotableComponent;
  let fixture: ComponentFixture<InfotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfotableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
