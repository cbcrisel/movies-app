import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response.interface';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies:Movie[]=[]
  public moviesSlideshow:Movie[]=[]

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1000;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if(pos>max){
      this.movieService.getNowPlaying().subscribe(Response=>{
        this.movies.push(...Response)
      });
    }
  }


  constructor(
    private movieService:MoviesService
  ) { }

  ngOnInit(): void {
    this.getNowPlaying();
  }
  getNowPlaying(){
    this.movieService.getNowPlaying().subscribe(
      Response=>{
        this.movies=Response
        this.moviesSlideshow=Response
      }
    )
  }
}
