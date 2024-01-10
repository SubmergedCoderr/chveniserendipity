import { Component, OnInit, ElementRef, ViewChild , Renderer2 } from '@angular/core';
import { Music } from './music';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { PopIpComponent } from './pop-ip/pop-ip.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  @ViewChild('addEmployeeModal') addEmployeeModal!: ElementRef;

  title = 'sounds';
  audio = new Audio();
  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';

  percentage: number = 0;
  percentageVolume: number = 0;

  isHovered: boolean = false;
  isHoveredVolume: boolean = false;
  showMusicsComponent: boolean = true;
  showBye: boolean = true;
  showGandzi :  boolean = true;
  dawyebulia :  boolean = false;

  @ViewChild('volumeInput') volumeInput: any;
  


  onMouseOver(): void {
    this.isHovered = true;
  }

  onMouseOut(): void {
    this.isHovered = false;
  }

  onMouseOverVolume(): void {
    this.isHoveredVolume = true;
  }

  onMouseOutVolume(): void {
    this.isHoveredVolume = false;
  }

  mute(){
    if (this.audio.volume === 0){
      this.audio.volume = 1;
      this.volumeInput.nativeElement.value = 1;
    }else{
      this.audio.volume = 0;
      this.volumeInput.nativeElement.value = 0;
    }
  }

  getRangeBackground(){
    this.percentage = (this.audio.currentTime / this.duration) * 100;
    return `linear-gradient(to right, white ${this.percentage}%, grey ${this.percentage}% 100%)`;
  }

  getHoverBackground() {
    this.percentage = (this.audio.currentTime / this.duration) * 100;
    return `linear-gradient(to right, #1ed760 ${this.percentage}%, grey ${this.percentage}% 100%)`;
  }

  setBackgroundVolume(){
    this.percentageVolume = this.audio.volume * 100
    if(this.isHoveredVolume == true){
      return `linear-gradient(to right, #1ed760 ${this.percentageVolume}%, grey ${this.percentageVolume}% 100%)`;
    }else{
      return `linear-gradient(to right, white ${this.percentageVolume}%, grey ${this.percentageVolume}% 100%)`;
    }
  }

  // getRangeBackgroundVolume(){
  //   this.percentageVolume = (this.audio.currentTime / this.duration) * 100;
  //   return `linear-gradient(to right, white ${this.percentageVolume}%, grey ${this.percentageVolume}% 100%)`;
  // }

  // getHoverBackgroundVolume() {
  //   this.percentageVolume = (this.audio.volume / this.duration) * 100;
  //   return `linear-gradient(to right, #1ed760 ${this.percentage}%, grey ${this.percentageVolume}% 100%)`;
  // }
  
  show : boolean = false;
  openDialog() {
    const dialogRef = this.dialogRef.open(PopIpComponent, {
      data: {
        musicList: this.musicList
      }
    });
  
    dialogRef.afterClosed().subscribe((infoFromDialog: number) => {
      if(infoFromDialog !== undefined){
        console.log(infoFromDialog);
        
        this.play(infoFromDialog)
      }

  
    });
  }

 
  constructor(private dialogRef : MatDialog, private router: Router, private activatedRoute: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
            duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ? 
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` : 
                         `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
      this.duration = totalSeconds;
    }

    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ? 
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` : 
                         `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
    }
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
  
      this.showMusicsComponent = !this.activatedRoute.snapshot.firstChild?.routeConfig?.path?.includes('anakoko');
      this.showBye = !this.activatedRoute.snapshot.firstChild?.routeConfig?.path?.includes('bye');
      this.showGandzi = !this.activatedRoute.snapshot.firstChild?.routeConfig?.path?.includes('chemigandzi');
      if(!this.showGandzi){
        console.log(this.currentMusic);
        
        if(!this.tovlisGunda && !this.modalardamanaxo){

          this.openModal();
        }
        
      }
    });
  }

  openModal(){
    const container = document.getElementById('main-section');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addEmployeeModal');

    container?.appendChild(button);
    button.click();

  }
  gamomichine : boolean = false;
  dismissModal() {
    this.play(7);
    this.gamomichine = true;
  }
  musicList: Music[] = [
    {
      album: "Discovery",
      title: "Something About Us",
      artist: "Daft Punk",
      url: "/assets/Daft Punk - Something About Us (Official Video).mp3",
      image: "/assets/images/sau.jpg",
      coverImage: "/assets/images/saucover.png",
      albumImage: "/assets/images/albums/dpalbum.png",
      gradient: 'linear-gradient(135deg, #000000  10%, rgb(249, 119, 148)  74%)',
      lyrics: "It might not be the right time <br> I might not be the right one <br> But there's something about us I want to say <br> 'Cause there's something between us anyway "
    },
    {
      album: "Dark Was The Night(Red Hot Compilation)",
      title: "Train Song",
      artist: "Feist, Benjamin Gibbard",
      url: "/assets/_Train Song_ by Feist & Ben Gibbard.mp3",
      image: "/assets/images/ts.png",
      coverImage: "/assets/images/tscover.jpg",
      albumImage: "/assets/images/ts.png",
      gradient: 'linear-gradient(112deg, #05060a  10%, #473946 74%)',
      lyrics: "Traveling north, traveling north to find you <br> Train wheels beating, the wind in my eyes <br>Don't even know what I'll say when I find yoy <br> Call out your name, love, don't be surprised "
    },
    {
      album: "Everything You've Come To Expect(Deluxe Edition)",
      title: "Sweet Dreams, TN",
      artist: "The Last Shadow Puppets",
      url: "/assets/Sweet Dreams, TN.mp3",
      image: "/assets/images/sd.png",
      coverImage: "/assets/images/sdcover.jpg",
      albumImage: "/assets/images/sd.png",
      gradient: "linear-gradient(125deg, #181107 0%, #d2a813  100%)",
      lyrics: "I just sort of always feel sick without you baby <br> I ain't got anything to lick without you, baby <br> Nothing seems to stick without you, baby <br> Ain't I fallen in love ? "
    },

    {
      album: "The Age Of The Understatement",
      title: "The Meeting Place",
      artist: "The Last Shadow Puppets",
      url: "/assets/The Meeting Place.mp3",
      image: "/assets/images/tmp.jpg",
      coverImage: "/assets/images/iffff.jpg",
      albumImage: "/assets/images/tmp.jpg",
      gradient: 'linear-gradient(147deg, #000000  0%, #4d4855 74%)',
      lyrics: "The colder the night gets, the further she strays <br> And he doesn't like it being this way <br> And she tried so hard to steer away from the meeting place <br> But her heart had led her there"
    },

    {
      album: "The Archer",
      title: "Can't Help Myself",
      artist: "Alexandra Savior",
      url: "/assets/Alexandra Savior - Can't Help Myself.mp3",
      image: "/assets/images/chm.jpg",
      coverImage: "/assets/images/hug.png",
      albumImage: "/assets/images/chm.jpg",
      gradient: 'linear-gradient(135deg, rgb(18, 16, 14) 0%, rgb(35, 44, 58) 74%)',
      lyrics: "Soft kiss, my baby wanted it <br> I could sense it from a mile away <br> He wants a bit of this sweet melancholy and <br> He can get it any time of day "
    },

    {
      album: "One Breath (Deluxe Edition)",
      title: "Strange Weather",
      artist: "Anna Calvi, David Byrne",
      url: "/assets/Anna Calvi, David Byrne - Strange Weather (Official Video).mp3",
      image: "/assets/images/sw.jpeg",
      coverImage: "/assets/images/swcover.png",
      albumImage: "/assets/images/sw.jpeg",
      gradient: 'linear-gradient(115deg, rgb(9, 20, 26) 0%, rgb(24 35 53) 74%)',
      lyrics: "She'll take you back, don't make believe <br> You wanna think it through <br> I've loved before, I'll love again <br> I know that yours was true "
    },

    {
      album: "Best in Show",
      title: "Love Will Tear Us Apart",
      artist: "Nerina Pallot",
      url: "/assets/Love Will Tear Us Apart - Nerina Pallot.mp3",
      image: "/assets/images/tear.jpg",
      coverImage: "/assets/images/SaidYoungMan.jpeg",
      albumImage: "/assets/images/tear.jpg",
      gradient: 'linear-gradient(112deg, rgb(30 26 8) 10%, rgb(7 7 3) 74%)',
      lyrics: "When routine bites hard <br> And ambitions are low <br> And resentment rides high <br> But emotions won't grow",
      elaboration: 'Normal people-ის საუნდრეკს ვუსმენდი ადრე სპოტიფაიზე და როგორც მითხარი მაქედან დაიწყე ყურება, მე მერე გაწყვეტილი მქონდა რამდენიმე დღე და მაგ პერიოდში შენი დისქორდის ბაიოში რენდომად ამოვიკითხე Sad Young Man in a Train, დავსერჩე, ნახატს შევხედე მეთქი რად დადო ვფიქრობდი, რაღაც იდუმალი იყო და მომეწონა, მერე გავაგრძელე რამდენიმე დღეში ისევ სერიალის ყურება და მერვე სერიის შუაში ეგ ნახატი ახსენეს მეთქი ვახ ხო არ მომეჩვენა რამდენჯერმე გადავახვიე, სერიის ბოლოს კი ჩაირთო ეს სიმღერა, მაგრად მომეწონა და ბოლო სცენა ამ ნახატით დაგვრიგვიდნა, ხოდა რავი შოკში ვიყავი მეთქი რა ხდება, მაგის მერე კი ეს სიმღერა, ნახატი და რავი ის სერიაც მაგრად მევასება რა(ესენი წესით მოყოლილი უნდა მქონდეს, მარა მაინც შეგახსენე უფრო დეტალურად და ამ სიმღერის ატვირტვისგან გამოწვეულ ეჭვებიც წესით ჩავახშე)'
      
    },

    {
      album: "თოვლის გუნდა",
      title: "წვიმად გადავიქეცი",
      artist: "ანაჩკა კარტაჩკა",
      url: "/assets/წვიმად გადავიქეცი.mp3",
      image: "/assets/images/tovlis_gunda.png",
      coverImage: "/assets/images/tovlis_gunda.png",
      albumImage: "/assets/images/albums/tovlis_gunda_album.png",
      gradient: 'linear-gradient(112deg, rgb(139 139 139) 10%, rgb(46 46 44) 74%)',
      lyrics: "თოვლი ვიყავ ქათქათა <br> ციდან გამოვიქეცი <br> ვერ მიცანი ? კაპ კაპ კაპ კაპ <br> წვიმად გადავიქეცი <br> გუდა გუდა თეთრი გუდა <br> ხან წვიმა ვარ ხანაც გუნდა"
    },

    {
      album: "RMCM",
      title: "Evergreen",
      artist: "Richy Mitch and The Coal Miners",
      url: "/assets/Evergreen.mp3",
      image: "/assets/images/albums/ever.jpg",
      coverImage: "/assets/images/albums/bea.jpg",
      albumImage: "/assets/images/albums/ever.jpg",
      gradient: 'linear-gradient(112deg, rgb(139 139 139) 10%, rgb(46 46 44) 74%)',
      lyrics: "Locked in a stalemate <br> With a man who bars no holds <br> Rock and a hard place <br> He's battering control "
    },

    {
      album: "Who The F*** Are Arctic Monkeys?",
      title: "No Buses",
      artist: "Arctic Monkeys",
      url: "/assets/No Buses.mp3",
      image: "/assets/images/albums/amalbum.jpg",
      coverImage: "/assets/images/am/onlyonee.jpg",
      albumImage: "/assets/images/albums/amalbum.jpg",
      gradient: 'linear-gradient(112deg, rgb(117, 5, 5) 10%, rgb(94 94 12) 74%)',
      lyrics: "Lady, where has your love gone? <br> I was looking but can't find it anywhere <br>They always offer when there's <br> Loads of love around ",
      elaboration: "საუკეთესო ლუკმა ბოლოში უნდა მოიტოვოო, ხოდა ბოლოს ვყრი არქთიქებს. ამ სიმღერას რაც შეეხება გეტყვი რო 24-ში ერთი არ ყოფილხარ, ერთადერთი იყავი 100-ში, რაღაც სპეტაკი და წმინდა იყო შენში, სულ გეუბნებოდი კიდეც და გთხოვ არავის მისცე უფლება რომ ეგ დაგიკარგოს"
    },

    {
      album: "One For The Road",
      title: "You Are So Dark",
      artist: "Arctic Monkeys",
      url: "/assets/sodark.mp3",
      image: "/assets/images/am/sodark.jpg",
      coverImage: "/assets/images/am/sosodark.jpg",
      albumImage: "/assets/images/am/sodark.jpg",
      gradient: 'linear-gradient(112deg, rgb(0 0 0) 10%, rgb(25 25 18) 74%)',
      lyrics: "You got your H.P. Lovecraft <br> Your Edgar Allan Poe <br> You got your unkind of ravens<br> And your murder of crows "
    },

    {
      album: "Humbug",
      title: "Cornerstone",
      artist: "Arctic Monkeys",
      url: "/assets/cornerstone.mp3",
      image: "/assets/images/albums/cornerstone.jpg",
      coverImage: "/assets/images/am/alexi.jpg",
      albumImage: "/assets/images/albums/cornerstone.jpg",
      gradient: 'linear-gradient(112deg, rgb(182 209 216) 10%, rgb(79 79 75) 74%)',
      lyrics: "I thought I saw you in the Battleship <br> But it was only a look alike <br> She was nothing but a vision trick <br> Under the warning light "
    },
    {
      album: "The Great Pretenders",
      title: "Vertigo",
      artist: "Mini Mansions, Alex Turner",
      url: "/assets/vertigo.mp3",
      image: "/assets/images/albums/mm.jpg",
      coverImage: "/assets/images/albums/mmcover.jpg",
      albumImage: "/assets/images/albums/mm.jpg",
      gradient: 'linear-gradient(112deg, rgb(122 69 8) 10%, rgb(0 0 0) 74%)',
      lyrics: "Oh, you know me from all my videos <br> Isn't it time we hit the road? <br> Oh, you want me, that's all you need to know <br> Wish you were mine, I got to go",
      elaboration: "ქართული სიმღერა როა ტექნომაგია, ყველამ რო აიტაცა და უსმენს, ნახე აბა მათი ქავერის ფოტო, ვერტიგოსას ხომ არ ჰგავს ? ჰგავს კი არა იდენტურია, ეს აღმოჩენა რო გავაკეთე მეთქი რანაირად, სიდან სადაო ამაზეა ნათქვამი"
    },





  ]


  trackPointer: number = 0;
  currentMusic: Music = {
    album: "",
    title: "", 
    artist: "",
    url: "",
    image: "",
    coverImage: "",
    albumImage: "",
    gradient: '',
    lyrics: ''

  }

  tovlisGunda: boolean = false;
  modalardamanaxo: boolean = false;
  tovlisteqsti: boolean = false;
  play(index?: number): void {
    if(index == 7){
      this.tovlisGunda = true;
      this.modalardamanaxo = true;
      this.tovlisteqsti = true;
    }else{
      this.tovlisGunda = false;
      this.tovlisteqsti = false;
    }
    this.show = true;
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.url;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
      this.audio.play();
    } 
  }

  prev(): void {
    console.log(this.trackPointer);


    
    if(this.trackPointer === 0){
      this.trackPointer = this.musicList.length;
    }
    this.trackPointer--;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();


    if(this.currentMusic.title != 'წვიმად გადავიქეცი'){
      this.tovlisGunda = false;
      this.tovlisteqsti = false;
    }
  }

  next(): void {

    if(this.trackPointer === this.musicList.length -1){
      this.trackPointer = -1;
    }
    this.trackPointer++;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();

    if(this.currentMusic.title != 'წვიმად გადავიქეცი'){
      this.tovlisGunda = false;
      this.tovlisteqsti = false;
    }
  }

  volumeSlider(event: any) {
    console.log("lekso");
    console.log(event.target.value);
    
    this.audio.volume = event.target.value;

  }

  durationSlider(event: any) {
    this.audio.currentTime = event.target.value;
  }

  

}
