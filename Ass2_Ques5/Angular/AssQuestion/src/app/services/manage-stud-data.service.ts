import { Injectable } from '@angular/core';
import { Student } from '../Model/student';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ManageStudDataService {

  constructor(private http:HttpClient)
   { 

   }

   getToken()
   {
      var token = this.http.get('http://localhost:8000/login');
      console.log("In service : " + token);
      return token;
   }

   getStudentsData():Observable<Student[]>
   {
      var data = this.http.get<Student[]>('http://localhost:8000/');
      return data;
   }

   addNewStudent(rno:any,name:any,age:any,semester:any,department:any)
   {
      const data = {
        rno : rno,
        name : name,
        age:age,
        semester : semester,
        department : department
      }
      this.http.post('http://localhost:8000/add',data).subscribe(res=>console.log("Added succefully"));
   }


   deleteStud(id:any)
   {
      var url = "http://localhost:8000/" + id;
      return this.http.delete(url);
   }

   getOneStud(id:any):Observable<Student>
   {
      var url = "http://localhost:8000/" + id;
      return this.http.get<Student>(url);
   }

   updateStud(id:any,rno :any,name:any,age:any,semester:any,department:any)
   {
      var updStud = {
        rno : rno,
        name:name,
        age:age,
        semester:semester,
        department:department 
      };

      var url = "http://localhost:8000/" + id;
      return this.http.put(url,updStud).subscribe(res=>{
        console.log("Record updated successfully");
      });
   }

  // students()
  // {
  //     var data = [{rno:1,name:"abc",age:20,semester:7,department:"IT"},
  //             {rno:2,name:"def",age:20,semester:7,department:"ICT"}];
  //     return data;
  // }
}
