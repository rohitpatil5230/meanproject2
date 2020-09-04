import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public myformgroup=this.fb.group({  
    email:['',Validators.required],  
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
  

  async btnSubmit(){
    const data=this.myformgroup.value;
   // const data1={email:this.myformgroup.value.email};
    const url1='http://localhost:3000/emailvarification';
    const result:any=await this.http.post(url1, data).toPromise();
    console.log(result);
    if(data.password.length<8||data.password.length>15){
      alert("please enter Password lenght min is 8 and max is 15")
    }
    else if(data.password!==data.confpassword){
      alert("Password And Confirm Password Are Not Match");
    }
    else if(result.opr){
      const url = 'http://localhost:3000/changepassword';
      await this.http.post(url, data).toPromise();
      alert("Password Is Change please login in login page");
      this.route.navigate(['login']);
    }
    else{
      alert("Please Check Email Id");
    }  
    
  }
}
