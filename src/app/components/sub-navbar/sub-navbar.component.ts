import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss'],
})
export class SubNavbarComponent {
  helpDropdown: string[] = [
    'Help',
    'string1',
    'string1',
    'string1',
    'string1',
    'string1',
  ];
  englishDropdown: string[] = [
    'English,USD',
    'string2',
    'string2',
    'string2',
    'string2',
    'string2',
  ];
  shipToDropdown: string[] = [
    'Ship to',
    'string3',
    'string3',
    'string3',
    'string3',
    'string3',
  ];
}
