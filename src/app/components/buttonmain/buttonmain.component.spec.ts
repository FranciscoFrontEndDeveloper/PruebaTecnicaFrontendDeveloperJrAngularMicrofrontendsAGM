import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonmainComponent } from './buttonmain.component';

describe('ButtonmainComponent', () => {
  let component: ButtonmainComponent;
  let fixture: ComponentFixture<ButtonmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonmainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
