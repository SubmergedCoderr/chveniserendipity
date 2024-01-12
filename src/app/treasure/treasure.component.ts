import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss'],
    animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(300)]),
    ]),
  ],
  
})
export class TreasureComponent {
  snowflakes: any[] = [];
  
  public showSnowyImage = true;
  public weather : string = "გაწვიმდებოდეს";

  quantity : number = 100;

  toggleSnowyImage() {
    this.showSnowyImage = !this.showSnowyImage;
  }

  constructor() {}

  ngOnInit() {
    this.generateSnowflakes();
  }

  
  generateSnowflakes() {
    const numSnowflakes = Math.floor(Math.random() * 100) + 100;

    for (let i = 0; i < numSnowflakes; i++) {
      this.snowflakes.push({
        top: Math.floor(Math.random() * 100) + 'vh',
        left: Math.floor(Math.random() * 100) + 'vw',
        duration: Math.floor(Math.random() * 5) + 5 + 's' // Varying animation durations
      });
    }
  }


  // changeWeather(weather: string){
  //   if (weather == "გაწვიმდებოდეს"){
  //     this.weather = "გათოვდებოდეს";
  //   }else{
  //     this.weather = "გაწვიმდებოდეს";
  //   }
  // }



  
}
