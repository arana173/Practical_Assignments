import { Component, OnInit } from '@angular/core';
import{ManageStudDataService} from '../services/manage-stud-data.service';
import{Student} from '../Model/student'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'DisplayStud',
  templateUrl: './display-stud.component.html',
  styleUrls: ['./display-stud.component.css']
})
export class DisplayStudComponent implements OnInit {

  constructor(private MyService : ManageStudDataService) {
  
   }

   students:Student[]=[];

   getDataFromAPI()
   {
    this.MyService
    .getStudentsData()
    .subscribe((data: Student[]) => {
      this.students = data;
  });
   }

  ngOnInit(): void {
      this.getDataFromAPI();
  }

  deleteStudent(id : any)
  {
    this.MyService.deleteStud(id).subscribe(res=>{
        console.log("Record successfully deleted");
        this.ngOnInit();
    });
  }

}
