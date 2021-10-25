import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailsComponent } from '../components/characters-details/characters-details.component';

const routes: Routes = [
  {path: "", component: CharactersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersDetailsRoutingModule { }
