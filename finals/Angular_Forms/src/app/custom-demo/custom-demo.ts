import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-demo.html',
  styleUrl: './custom-demo.css', // Ensure this matches your CSS filename
})
export class CustomDemo {
  roles = ['School Scholar', 'Outside Scholar', 'Non-Scholar']; // Updated roles slightly to match context

  // NEW: Departments List
  departments = [
    'School of Computing (SoC)',
    'School of Business (SBA)',
    'School of Nursing and Allied Medical Science (SNAMS)',
    'School of Arts & Sciences (SAS)'
  ];

  form!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Student', Validators.required],

      // NEW: Enrollment Fields
      studentType: ['', Validators.required], // Replaces Gender
      department: ['', Validators.required],  // Replaces Status
      major: ['', Validators.required]        // Replaces Comments
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submittedData = this.form.value;
      console.log(this.form.value);
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
