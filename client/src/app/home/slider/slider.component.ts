import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{

  slides = [
    {img: "assets/img/slider1.jpg"},
    {img: "assets/img/slider1.jpg"},
    {img: "assets/img/slider1.jpg"},
    {img: "assets/img/slider1.jpg"}
  ];
  slideConfig = {
    // autoplay: true,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    speed: 1000,
  };
 
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }
  
}
