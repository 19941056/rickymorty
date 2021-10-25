import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { CharactersComponent } from '../components/characters/characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule, 
    
  ]
})
export class CharactersModule { }
