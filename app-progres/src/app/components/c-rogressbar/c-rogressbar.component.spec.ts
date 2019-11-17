import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRogressbarComponent } from './c-rogressbar.component';

describe('CRogressbarComponent', () => {
  let component: CRogressbarComponent;
  let fixture: ComponentFixture<CRogressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRogressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
