import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }
  // customOptions.on('mousewheel', '.owl-stage', function (e) {
  //     if (e.deltaY>0) {
  //         owl.trigger('next.owl');
  //     } else {
  //         owl.trigger('prev.owl');
  //     }
  //     e.preventDefault();
  // });
}
