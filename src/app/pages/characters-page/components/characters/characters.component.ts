import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { type } from 'os';
import { Characters } from '../../models/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersList?: Characters[] = [];
   public i =1;
  constructor(private charactersService:CharactersService,
    private httpCall:HttpClient) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((element:any)=>{
      const apiResults:Characters[]=element.results;
      
     const formatResults= apiResults.map(({id,name,status,type,gender,image})=>({
       id,
       name,
       status,
       type,
       gender,
       image,
     }));
     this.charactersList=formatResults;
    });
  }
  nextPage(){
    this.i=this.i +1;
    this.httpCall.get<any>(`https://rickandmortyapi.com/api/character?page=${this.i}`).subscribe((finalList)=>{
      this.charactersList=finalList.results;
    });
  }

  previousPage(){
    this.i=this.i -1;
    this.httpCall
    .get<any>(`https://rickandmortyapi.com/api/character?page=${this.i}`)
    .subscribe((finalList)=>{
      this.charactersList=finalList.results;
    });
  }


}
