import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/pages/characters-page/models/characters';
import { CharactersService } from 'src/app/pages/characters-page/services/characters.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
 public character:any;
 
  constructor(
    public charactersService:CharactersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const idCharacter=params.get('idCharacter');

      this.charactersService
      .getCharacter(idCharacter)
      .subscribe((CharacterData)=>{
        this.character=CharacterData;
      });
    })
  }

}
