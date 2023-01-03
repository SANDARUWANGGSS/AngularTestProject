import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: Array<any> = [];
  showSpinner = true;
  title = 'Sandaruwan Gamage';
  userData : any;

  constructor(private userService: UserServicesService){}

  ngOnInit():void
  {
    this.getDetail();
    
  }

  getDetail() {
    this.userService.getUserDetails().then((res) => {
      res.json().then((data) => {
      this.data = data;

      console.log("HII");
      console.log(data);

        return data;

      });

    }).catch((err) => {

      console.log(err)

    });
  }
}
