import { Component } from '@angular/core';
import { Footer, Navigation } from './core/models/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rick-morty';

  public navigation:Navigation[]=[
    {
      name:'home',
      link:'/home'
    },
    {
      name:'characters',
      link:'/characters'
    },
    {
      name:'characters-details',
      link:'/characters-details'
    }
  ]
  public footer:Footer={
    creator:'Antonio Maestre Vargas',
    from:'Upgrade-Hub'
    //fb:{
      //src:'../core/components/footer/assets/icons8-facebook-48.png',
      //alt:'facebook'
   // },
    //insta:{
     // src:'rick-morty/src/app/core/components/footer/assets/icons8-instagram-48.png',
     // alt:'instagram'
    //},
    //twitter:{
     // src:"https://img.icons8.com/material-outlined/48/000000/twitter.png",
     // alt:'twitter'
   // }
  }
}
