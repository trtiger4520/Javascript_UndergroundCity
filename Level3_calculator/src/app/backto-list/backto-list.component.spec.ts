import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktoListComponent } from './backto-list.component';

describe('BacktoListComponent', () => {
  let component: BacktoListComponent;
  let fixture: ComponentFixture<BacktoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
