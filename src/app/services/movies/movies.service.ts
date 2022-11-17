import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NowPlayingResponse,Movie } from 'src/app/interfaces/nowplaying-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public loading:boolean=false
  private baseUrl:string='https://api.themoviedb.org/3';
  private nowPlayingPage=1;
  constructor(
    private http: HttpClient
  ) { }

  get params(){
    return {
      api_key:'720716325e65f251e572610128bc3f4a',
      language:'en-US',
      page:this.nowPlayingPage.toString()
    }
  }
  
  getNowPlaying():Observable<Movie[]>{

    if(this.loading){
      return of([]);
    }
    this.loading=true
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`,{
      params:this.params
    }).pipe(
      map((Response)=>Response.results),
      tap(()=>{
        this.nowPlayingPage+=1;
        this.loading=false;
      })
    )
  }

}
