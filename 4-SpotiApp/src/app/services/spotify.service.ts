import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  constructor( public http: HttpClient ) {
    console.log('Servicio Spotify listo')
  }

  getArtistas( termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${ termino } &type=artist&limit=20`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQC91FyxZ7vKpudVu7yyr7m_vXiddRmyn28VrMwXuTHDqP37T2dCHVt5f9L266k4Pqc6YSMY1KHkDvNdz14'
    });

    return this.http.get(url, { headers })
      .map( (resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });

  }

}
