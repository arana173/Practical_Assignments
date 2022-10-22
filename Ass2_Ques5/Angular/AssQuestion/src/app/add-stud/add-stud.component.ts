import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms'
import{ManageStudDataService} from '../services/manage-stud-data.service'
import { HttpClientModule } from '@angular/common/http';
import { Student } from '../Model/student';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'AddStudent',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent {

  angForm = new FormGroup({
      rno : new FormControl(''),
      name : new FormControl(''),
      age : new FormControl(''),
      semester : new FormControl(''),
      department : new FormControl(''),
  });
  

  constructor(private route : ActivatedRoute,private router : Router,private MyService : ManageStudDataService) { 
    
  }

  AddNew()
  {
      this.MyService.addNewStudent(this.angForm.value.rno,this.angForm.value.name,this.angForm.value.age,this.angForm.value.semester,
        this.angForm.value.department);
      this.router.navigate([""]);
  }

  ngOnInit(): void {
  }

}
