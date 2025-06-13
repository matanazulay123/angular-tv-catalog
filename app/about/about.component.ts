import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  imgUrl1 = "assets/img/matan.jpeg";
  
  imgUrl2 = "assets/img/leah.jpeg";
  name1 = "Matan Azulay";
  name2 = "Leah Cooke";
  id1 = "207361148";
  id2 = "211515242";

  invertColors = false;

  toggleColors() {
    this.invertColors = !this.invertColors;
    document.body.classList.toggle('invert-colors', this.invertColors);
  }
}
