import { Component } from '@angular/core';
import { IColor } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  fontSize1: number = 15;
  fontSize2: number = 11;
  fontSize3: number = 13;
  additionalColors: IColor[] = [
    {value: 'black', label: 'Black'},
    {value: 'yellow', label: 'Yellow'},
    {value: 'pink', label: 'Pink'}
  ];

  handleSizeChange(value: number) {
    console.log(value);
  }
}
