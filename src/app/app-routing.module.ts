import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home-page/home/home.module').then(m => m.HomeModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  {
    path: `characters`, loadChildren: () =>
      import('./pages/characters-page/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: `characters/:idCharacter`, loadChildren: () =>
      import('./pages/characters-details-page/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
  },
  
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about/about.module').then(m => m.AboutModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
