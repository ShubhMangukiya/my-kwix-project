import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  activeSection: string = '';

  showContent(section: string) {
    this.activeSection = section;
  }

}
