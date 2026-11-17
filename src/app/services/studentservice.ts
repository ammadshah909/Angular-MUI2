
import { Injectable } from '@angular/core';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class Studentservice {

  studentList: IStudent[] = [];

  // Add Student
  addStudent(student: IStudent): void {
    this.studentList.push({ ...student });

    console.log('Student Added Successfully!');
    console.log('Student List:', this.studentList);
  }

  // Get All Students
  getStudents(): IStudent[] {
    return this.studentList;
  }
}
