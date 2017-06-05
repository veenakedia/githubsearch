import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
    moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent  { 
    user:any;
    repos:any=[];
    username:string;
    constructor(private _profileservice:ProfileService){
        this.user = false;
    }


    searchUser(){
        this._profileservice.updateUser(this.username);

        this._profileservice.getUser().subscribe(user=>{
            this.user=user
        });
        
        this._profileservice.getRepos().subscribe(repos => {
            this.repos = repos
        });
    }
}
