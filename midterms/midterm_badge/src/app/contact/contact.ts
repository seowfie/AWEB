import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- REQUIRED

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- ADD THESE
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  // Fixes "Property does not exist" errors
  contactName: string = '';
  contactMessage: string = '';

  // Fixes "Property 'submit' does not exist"
  submit() {
    alert(`Message sent by ${this.contactName}`);
  }
}
