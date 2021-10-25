import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public rickAndMorty:string='https://rickandmortyapi.com/api/';
  public charactersUrl:string='https://rickandmortyapi.com/api/character'

  constructor( public httpClient:HttpClient) { }

  public getCharacters(){
    return this.httpClient.get(this.charactersUrl)
  }
  public getCharacter=(idCharacter: any)=>{
    return this.httpClient.get(`${this.charactersUrl}/${idCharacter}`);
  }
}
