import { Component } from '@angular/core';



@Component({
  selector: 'app-anakoko',
  templateUrl: './anakoko.component.html',
  styleUrls: ['./anakoko.component.scss']
})
export class AnakokoComponent {

  damenaxePls: boolean = false
  milocva(){
    this.damenaxePls = !this.damenaxePls;
  }

  primaryImage = '../../assets/images/pilveli.jpg';
  secondaryImage = '../../assets/images/meole.jpg';
  currentImage = this.primaryImage;

  onMouseOver(): void {
    this.currentImage = this.secondaryImage;
  }

  onMouseLeave(): void {
    this.currentImage = this.primaryImage;
  }
}
