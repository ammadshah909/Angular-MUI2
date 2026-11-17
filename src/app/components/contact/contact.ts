import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  submitted = false;

  contact = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  sendMessage(form: NgForm): void {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Contact Form Details:', this.contact);

    this.submitted = true;

    form.resetForm();

    this.contact = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}