import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(
    
  ) { }

  getUserDetails()
  {
    return fetch('https://fakestoreapi.com/users');
  }
}
