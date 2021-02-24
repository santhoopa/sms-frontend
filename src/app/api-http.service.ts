import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  getAllStudentDetails(){
    console.log("This is getAllStudentDetails()");
    return this.http.get<{ recordset:any}>("http://52.151.216.129/students");
  }


  getOneStudent(id:any){
    console.log("This is getOneStudent()");
    return this.http.get<{ recordset:any}>("http://52.151.216.129/students/"+id);
  }

  getAllStaffDetails(){
    console.log("This is getAllStaffDetails()");
    return this.http.get<{ recordset:any}>("http://52.151.216.129/staff");
  }


  getOneStaff(id){
    console.log("This is getOneStaff()");
    return this.http.get<{ recordset:any}>("http://52.151.216.129/staff/"+id);
  }

}
