import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-writepage',
  templateUrl: './writepage.component.html',
  styleUrls: ['./writepage.component.css']
})
export class WritepageComponent implements OnInit {


  public myformgroup=this.fb.group({
    title:['',Validators.required],
    story:['',Validators.required],
    


  });
  constructor(
    private route:Router,
    private fb:FormBuilder,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }


  btnStory(){
    let data=this.myformgroup.value;
    console.log(data);
  }
}
