import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public myformgroup=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    mobile:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    confpassword:['',Validators.required]


  });

  constructor(
    private route:Router,
    private fb:FormBuilder,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }
  async btnRegistration(){
    const data=this.myformgroup.value;
    console.log(data.mobile.indexOf('@'))
    if(data.email.indexOf('@')===0||(data.email.indexOf('.')!==data.email.length-3&&data.email.indexOf('.')!==data.email.length-4)){
      alert("Please Enter Valid Email Id");
    }
    else if(data.mobile.length!==10||isNaN(data.mobile)){
      alert("Please Enter 10 Digit Mobile Number");
    }
    else if(data.password.length<8||data.password.length>15){
      alert("please enter Password lenght min is 8 and max is 15")

    }
    else if(data.password!==data.confpassword){
      alert("Password And Confirm Password Are Not Match");
    }
    else{
      const url1='http://localhost:3000/emailvarification';
      const result:any=await this.http.post(url1, data).toPromise();
      console.log(result);
      if(!result.opr){
        const url = 'http://localhost:3000/adduser';
        await this.http.post(url, data).toPromise();
        this.route.navigate(['login']);
      }
      else{
        alert("you are already registered")
      }
      
    }
    
  }

  // name=new FormControl();
  // email=new FormControl();
  // mobilenumber=new FormControl();
  // username=new FormControl();
  // password=new FormControl();
  // confpassword=new FormControl();


//   emailAtPosition= this.email.value.indexOf("@");
//   emailDotPosition= this.email.value.indexOf(".");
//   email_length=this.email.value.length;
//   btnRegistration(){
//     if(this.name.value===null||this.email.value===null||this.mobilenumber.value===null||this.username.value===null||this.password.value===null||this.confpassword.value===null){
//           if(this.name.value===null){
//               alert("Please Enter Name");
//           }
//           else if(this.email.value===null){
//               alert("Please Enter email");
//           }
//           else if(this.mobilenumber.value===null){
//               alert("Please Enter Mobile");
//           }
//           else if(this.username.value===null){
//               alert("Please Enter UserName");
//           }
//           else if(this.password.value===null){
//               alert("Please Enter password");
//           }
//           else if(this.confpassword.value===null){
//               alert("Please Enter Confirm Password");
//           }
//       }
      
//   }
}
