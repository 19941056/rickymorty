import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from '../../models/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
@Input() navigation!:Navigation[];
  constructor() { }

  ngOnInit(): void {
  }

}
