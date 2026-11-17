
import { Routes } from '@angular/router';

import { About } from './components/about/about';
import { Home } from './components/home/home';
import { AddStudent } from './components/add-student/add-student';
import { StudentsTable } from './components/student-table/student-table';
import { Contact } from './components/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'add-student',
    component: AddStudent
  },

  {
    path: 'students-table',
    component: StudentsTable
  },
  
  { path: 'contact',
   component: Contact
  }
];
