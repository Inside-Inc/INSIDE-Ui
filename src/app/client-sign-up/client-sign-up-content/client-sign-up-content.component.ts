import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import './client-sign-up-content.js';
import { clientSignUpExternal } from './client-sign-up-content.js';

@Component({
  selector: 'app-client-sign-up-content',
  templateUrl: './client-sign-up-content.component.html',
  styleUrls: ['./client-sign-up-content.component.css']
})
export class ClientSignUpContentComponent implements OnInit {
  rForm: FormGroup;
  name:string='';
  constructor(private fb: FormBuilder){
     this.rForm = fb.group({
          'firstName': [null, Validators.required],
          'lastName': [null, Validators.required],
          'eMail': [null, Validators.required],
          'password': [null, Validators.required],
          'rePassword': [null, Validators.required],
          'validate': ''
     });
}
  ngOnInit() {
       clientSignUpExternal();
  }
  // // switcher
  // stepsCounter:number = 0;
  // title:string = 'User ID';
  //  stepsSwitcher(){ // Switch btween the steps
  //       var stepsSlider = document.getElementById('stepsSlider'),
  //            headerTitle = document.getElementById('headerTitle'),
  //            stepsNumberHead = document.getElementById('stepsNumberHead'),
  //            stepLine1 = document.getElementById('stepLine1'),
  //            step2Icon = document.getElementById('step2Icon'),
  //            stepLine2 = document.getElementById('stepLine2'),
  //            step3Icon = document.getElementById('step3Icon'),
  //            nextButt = document.getElementById('nextButt');
  //         this.stepsCounter += 880;
  //         if(this.stepsCounter == 880){  // user contact
  //              headerTitle.style.opacity = '.0';
  //              this.title = 'User Contact';
  //              step2Icon.classList.remove('hidden');
  //              setTimeout(function(){
  //                  headerTitle.classList.add('tra-a-2');
  //                  headerTitle.style.opacity = '1';
  //                  stepLine1.style.width = '100px';
  //              },200);
  //         }else if(this.stepsCounter > 880){ // user payment
  //              headerTitle.classList.remove('tra-a-2');
  //              headerTitle.style.opacity = '.0';
  //              this.title = 'User Payment';
  //              step3Icon.classList.remove('hidden');
  //              setTimeout(function(){
  //                  headerTitle.classList.add('tra-a-2');
  //                  headerTitle.style.opacity = '1';
  //                  stepLine2.style.width = '100px';
  //              },200);
  //         }
  //         stepsSlider.style.right= this.stepsCounter+'px';
  // }
}
