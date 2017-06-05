import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class ProfileService{
    private username:string;
    private client_id: string = '71dc34eeeb193b5eb509';
    private client_secret :string='0cebc79d7cc8b97e8b8614da011849e7c523ba40';

    constructor(private _http:Http){
        console.log('search');
        this.username = 'veenakedia';
    }

    public getUser(){
        console.log('ssearch');
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).
        map(res=> res.json());

    }

    public updateUser(username:any){
        this.username = username;

    }
    
     public getRepos(){
        console.log('ssearch');
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).
        map(res=> res.json());

    }
}