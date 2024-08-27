import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  onSubmit() {
    // Add logic to handle form submission, e.g., sending data to a server.
    alert('Thank you for your message! We will get back to you shortly.');
  }
}
