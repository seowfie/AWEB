import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../dataservice';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(public dataService: DataService) {}
}
