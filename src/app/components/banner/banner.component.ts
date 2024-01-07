import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerMenuItems: string[] = [
    'Automobiles',
    'Clothes And Wear',
    'Home interior',
    'Computer and Tech',
    'Tools, equipement',
    'Sports and Outdoor',
    'Animal And pets',
    'Machinery Tools',
    'More Caregory',
  ];
}
