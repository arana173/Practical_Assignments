import { Component, OnInit } from '@angular/core';
import {ManageStudDataService} from "../services/manage-stud-data.service"
import { HttpClientModule } from '@angular/common/http';
import { Student } from '../Model/student';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'EditStudent',
  templateUrl: './edit-stud.component.html',
  styleUrls: ['./edit-stud.component.css']
})
export class EditStudComponent implements OnInit {

  angForm = new FormGroup({
    rno : new FormControl(''),
    name : new FormControl(''),
    age : new FormControl(''),
    semester : new FormControl(''),
    department : new FormControl(''),
});

  stud : Student = new Student();

  constructor(private MyService:ManageStudDataService,private route :ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.MyService.getOneStud(params['id']).subscribe(res=>{
        this.stud = res;
      });
    });
  }

  updateStud()
  {
      this.MyService.updateStud(this.stud._id,this.angForm.value.rno,this.angForm.value.name,this.angForm.value.age,this.angForm.value.semester,this.angForm.value.department);
      this.router.navigate([""]);   
  }

  // ngOnInit() :void{
  //   //first get querystring parameter using this.route.params.subscribe(params=>{})
  //   this.route.params.subscribe(params => {
  //       this.bs.editBook(params['id']).subscribe(res => {
  //         this.book = res;
  //     });
  //   });
  // }

  // getStudById(id:any)
  // {
  //     this.MyService.getOneStud(id).subscribe((data:Student)=>{
  //       console.log("Student Found");
  //       this.stud = data;
  //     })
  // }

}
