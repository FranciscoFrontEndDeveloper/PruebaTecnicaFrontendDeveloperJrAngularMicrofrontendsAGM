import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoniconComponent } from './buttonicon.component';

describe('ButtoniconComponent', () => {
  let component: ButtoniconComponent;
  let fixture: ComponentFixture<ButtoniconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoniconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtoniconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
