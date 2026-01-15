import {
  SlicePipe, DecimalPipe, CurrencyPipe, AsyncPipe, DatePipe,
  LowerCasePipe, UpperCasePipe, PercentPipe, KeyValuePipe,
  TitleCasePipe, NgFor
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    SlicePipe, DecimalPipe, CurrencyPipe, AsyncPipe, DatePipe,
    UpperCasePipe, LowerCasePipe, PercentPipe, KeyValuePipe,
    TitleCasePipe, NgFor
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();

  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  percentVal: number = 0.567;
  titleText: string = "web development is fun";
  studentObj = { name: 'Sofia', course: 'BSIT', year: 3 };

  ngOnInit() { }
}
