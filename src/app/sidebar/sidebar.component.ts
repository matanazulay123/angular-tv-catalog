import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Output() changeGenre: EventEmitter<string> = new EventEmitter();
  selectedGenre: string | undefined;

  constructor() { }

  ngOnInit(): void {}

  chooseDrama() {
    this.selectedGenre = 'dseries';
    this.changeGenre.emit(this.selectedGenre);
  }

  chooseChild() {
    this.selectedGenre = 'chseries';
    this.changeGenre.emit(this.selectedGenre);
  }

  chooseIsraeli() {
    this.selectedGenre = 'iseries';
    this.changeGenre.emit(this.selectedGenre);
  }

  chooseCrime() {
    this.selectedGenre = 'cseries';
    this.changeGenre.emit(this.selectedGenre);
  }

  chooseComedy() {
    this.selectedGenre = 'coseries';
    this.changeGenre.emit(this.selectedGenre);
  }
  chooseAll() {
    this.selectedGenre = 'all';
    this.changeGenre.emit(this.selectedGenre);
  }
}
