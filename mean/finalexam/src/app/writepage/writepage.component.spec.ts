import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritepageComponent } from './writepage.component';

describe('WritepageComponent', () => {
  let component: WritepageComponent;
  let fixture: ComponentFixture<WritepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
