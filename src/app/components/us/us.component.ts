import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent implements OnInit {

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }


  checkScroll() {
    const teamInfo = document.querySelector('.team-info') as HTMLElement;
    const teamInfoPosition = teamInfo.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (teamInfoPosition < screenPosition) {
      teamInfo.classList.add('active');
    } else {
      teamInfo.classList.remove('active');
    }
  } 
}
