import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IColor } from '../interfaces';

@Component({
  selector: 'my-sizer',
  templateUrl: './my-sizer.component.html',
  styleUrls: ['./my-sizer.component.css']
})
export class MySizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  @Input() name: string;
  @Input() additionalColors: IColor;

  ngOnInit() {
    this.size = this.size || 10;
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
