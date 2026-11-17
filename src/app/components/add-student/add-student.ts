
import { Component } from '@angular/core';
import { IStudent } from '../../model/student';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { Studentservice } from '../../services/studentservice';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  selector: 'app-add-student',
  styleUrl: './add-student.css',
  templateUrl: './add-student.html',
})
export class AddStudent {

  constructor(
    private studentservice: Studentservice,
    private router: Router
  ) {}

  student: IStudent = {
    name: '',
    age: 0,
    contact: '',
    course: ''
  };

  addStudent(): void {

    if (
      !this.student.name.trim() ||
      !this.student.contact.trim() ||
      !this.student.course.trim() ||
      !Number.isFinite(this.student.age) ||
      this.student.age <= 0
    ) {
      alert('Please fill all fields correctly!');
      return;
    }

    // Save student record
    this.studentservice.addStudent({ ...this.student });

    console.log('Student Added Successfully!');
    console.log('Student Details:', this.student);

    alert('Student Added Successfully!');

    // Open Students Table page
    this.router.navigateByUrl('/students-table');
  }
}
