import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // words: string[] = ['quality', 'speed', 'innovation', 'excellence'];
  // currentWordIndex: number = 0;
  // charIndex: number = 0;
  // isDeleting: boolean = false;
  // displayedText: string = '';

  constructor() { }

  // ngOnInit(): void {
  //   this.type();
  // }

  // type(): void {
  //   const currentWord = this.words[this.currentWordIndex];
  //   this.displayedText = currentWord.slice(0, this.charIndex);

  //   if (!this.isDeleting && this.charIndex < currentWord.length) {
  //     this.charIndex++;
  //     setTimeout(() => this.type(), 150);
  //   } else if (this.isDeleting && this.charIndex > 0) {
  //     this.charIndex--;
  //     setTimeout(() => this.type(), 100);
  //   } else {
  //     this.isDeleting = !this.isDeleting;
  //     if (!this.isDeleting) {
  //       this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
  //     }
  //     setTimeout(() => this.type(), 1500);
  //   }
  // }

  ngOnInit(): void {
  }

}
