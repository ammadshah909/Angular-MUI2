
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStudent } from '../../model/student';
import { MatTableModule } from '@angular/material/table';
import { Studentservice } from '../../services/studentservice';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  selector: 'app-students-table',
  styleUrl: './student-table.css',
  templateUrl: './student-table.html',
})
export class StudentsTable implements OnInit {

  displayedColumns: string[] = [
    'name',
    'age',
    'course',
    'contact'
  ];

  students: IStudent[] = [];

  constructor(
    private studentservice: Studentservice
  ) {}

  ngOnInit(): void {
    this.students = this.studentservice.getStudents();

    console.log('All Student Records:', this.students);
  }
}
