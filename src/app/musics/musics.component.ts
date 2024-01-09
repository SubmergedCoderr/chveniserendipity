import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Music } from '../music';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent {
  @Input() musicList: Music[] = [];
  @Output() musicIndex = new EventEmitter<number>();

  play(index: number){
    this.musicIndex.emit(index);
  }

}
