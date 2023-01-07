import { Component, OnInit } from '@angular/core';

export interface Users {
  id : string;
  email : string;
  username : string;
  password : string;
  firstname : string;
  city : string;
  // actions : string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit{

  userdetails: Users[] = [
    {id : '1', email : 'sandaruwan@gmail.com', username : 'sandaruwan', password: 'dffcc', firstname: 'sandaruwan', city: 'walasmulla'  }
  ];

  constructor(){}

  ngOnInit(): void {
    
  }


}