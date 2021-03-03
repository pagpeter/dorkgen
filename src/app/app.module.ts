import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenDirectoriesComponent } from './open-directories/open-directories.component';
import { HomeComponent } from './home/home.component';
import { GoogeDriveComponent } from './googe-drive/googe-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenDirectoriesComponent,
    HomeComponent,
    GoogeDriveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatSelectModule,
    MatInputModule,

    RouterModule, 
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'dirs', component: OpenDirectoriesComponent},
      {path: 'drive', component: GoogeDriveComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
