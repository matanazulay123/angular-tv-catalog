import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  selectedGenre: string = "";

  constructor(){}

  ngOnInit():void{

  }

  onGenreChange(genre: string) {
    this.selectedGenre = genre;
  }

}
