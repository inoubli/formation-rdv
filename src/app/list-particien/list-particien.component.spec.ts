import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticienComponent } from './list-particien.component';

describe('ListParticienComponent', () => {
  let component: ListParticienComponent;
  let fixture: ComponentFixture<ListParticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
