import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisCoreComponent } from './tetris-core.component';

describe('TetrisCoreComponent', () => {
  let component: TetrisCoreComponent;
  let fixture: ComponentFixture<TetrisCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
