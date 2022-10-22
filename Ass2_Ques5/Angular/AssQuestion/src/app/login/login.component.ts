import { Component, OnInit } from '@angular/core';
import { ManageStudDataService } from '../services/manage-stud-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private MyService : ManageStudDataService) { }

  Token:any

  generateToken()
  {
      this.MyService.getToken().subscribe((data)=>{
          this.Token = data;
      });
  }

  ngOnInit(): void {
    this.generateToken();
  }

}
