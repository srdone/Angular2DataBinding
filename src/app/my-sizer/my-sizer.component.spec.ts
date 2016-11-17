/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MySizerComponent } from './my-sizer.component';

describe('MySizerComponent', () => {
  let component: MySizerComponent;
  let fixture: ComponentFixture<MySizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
