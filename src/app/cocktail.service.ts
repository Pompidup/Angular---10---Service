import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cocktail } from './coktail';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    url = 'assets/cocktail.json';
    constructor(private http: HttpClient) {}

    public getCocktails(): Observable<Cocktail[]> {
        const obs1: Observable<any> = this.http.get(this.url);
        const treatment = (paramCocktails: any) => {
            return paramCocktails as Cocktail[];
        };

        return obs1.pipe(map(treatment) );
    }
}
