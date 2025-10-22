import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableexpantComponent } from './tableexpant.component';

describe('TableexpantComponent', () => {
  let component: TableexpantComponent;
  let fixture: ComponentFixture<TableexpantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableexpantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableexpantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
