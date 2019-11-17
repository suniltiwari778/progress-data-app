import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {ProgressBarModule} from "angular-progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRogressbarComponent } from './components/c-rogressbar/c-rogressbar.component';
import { SProgressDataService } from './shared/s-progress-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CRogressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressBarModule
    
  ],
  providers: [SProgressDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
