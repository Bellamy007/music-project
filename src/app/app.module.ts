import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        ErrorStateMatcher,
        ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAudioPlayerModule } from 'ngx-audio-player';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBK7Y5g6JjUJRfears2DdzoZ8PTE-nniIg'
    })
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
