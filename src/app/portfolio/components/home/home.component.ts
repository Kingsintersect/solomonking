import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit  {

  constructor() {}

  ngAfterViewInit(){
    anime({
      targets: '.profesions',
      // translateX: 250,
      rotate: '1turn',
      // backgroundColor: '#FFF',
      duration: 5000,
      delay: 500
    });
  }
}
