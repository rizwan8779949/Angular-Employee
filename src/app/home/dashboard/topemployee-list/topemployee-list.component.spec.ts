import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopemployeeListComponent } from './topemployee-list.component';

describe('TopemployeeListComponent', () => {
  let component: TopemployeeListComponent;
  let fixture: ComponentFixture<TopemployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopemployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
