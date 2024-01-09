import { Component, ElementRef, ViewChild ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Music } from '../music';


@Component({
  selector: 'app-pop-ip',
  templateUrl: './pop-ip.component.html',
  styleUrls: ['./pop-ip.component.scss']
})
export class PopIpComponent {
  @ViewChild('musicsDiv') musicsDiv!: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { musicList: Music[] }, 
  private dialogRef: MatDialogRef<PopIpComponent>
  ) { }


  play(info?: number) {
    if(info === undefined){
      let random  = Math.floor(Math.random() * this.data.musicList.length)
      this.dialogRef.close(random);
    }else{
      this.dialogRef.close(info);
    }

  }


  show: boolean = false;
  truex(){
    this.show = true;
    this.xodamidi = false;
    this.musicsDiv.nativeElement.scrollTop = 0;
  }

  xodamidi: boolean = false;
  xodamid(){
    this.xodamidi = true;
    this.show = false;
  }
}
