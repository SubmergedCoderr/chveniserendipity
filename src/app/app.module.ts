import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import { PopIpComponent } from './pop-ip/pop-ip.component';
import { AnakokoComponent } from './anakoko/anakoko.component';
import { AppRoutingModule } from './app.routing.module';
import { MusicsComponent } from './musics/musics.component';
import { ByeComponent } from './bye/bye.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreasureComponent } from './treasure/treasure.component';


@NgModule({
  declarations: [
    AppComponent,
    PopIpComponent,
    AnakokoComponent,
    MusicsComponent,
    ByeComponent,
    TreasureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    MatListModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }