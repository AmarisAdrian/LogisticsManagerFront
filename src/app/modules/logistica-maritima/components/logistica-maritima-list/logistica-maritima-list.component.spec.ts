import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaMaritimaListComponent } from './logistica-maritima-list.component';

describe('LogisticaMaritimaListComponent', () => {
  let component: LogisticaMaritimaListComponent;
  let fixture: ComponentFixture<LogisticaMaritimaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticaMaritimaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticaMaritimaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
