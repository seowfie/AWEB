import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  // Form variables
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  // New Fields
  gender: string = '';
  status: string = '';
  comments: string = '';

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    console.log("Form Submitted!", {
      username: this.username,
      email: this.email,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    });
  }
}
