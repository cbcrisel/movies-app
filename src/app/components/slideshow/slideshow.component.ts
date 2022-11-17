import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit,AfterViewInit {

  @Input() movies:Movie[];
  public mySwiper: any
  constructor() { 
    this.movies=[]
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
  onSlideNext(){
    this.mySwiper.slideNext();
  }
}
