import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response.interface';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  public readonlyStar:boolean=false
  public total:number=10
  @Input() movies:Movie[];
  public mySwiper: any

  

  constructor() { 
    this.movies=[]
  }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
