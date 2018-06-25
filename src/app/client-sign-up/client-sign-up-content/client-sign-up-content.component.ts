import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-sign-up-content',
  templateUrl: './client-sign-up-content.component.html',
  styleUrls: ['./client-sign-up-content.component.css']
})
export class ClientSignUpContentComponent implements OnInit {
      stepsCounter:number = 0;
      title:string = 'User ID';

  constructor() {}

  ngOnInit() {
  }
  stepsSwitcher(){ // Switch btween the steps
     var stepsSlider = document.getElementById('stepsSlider'),
          headerTitle = document.getElementById('headerTitle'),
          stepsNumberHead = document.getElementById('stepsNumberHead'),
          stepLine1 = document.getElementById('stepLine1'),
          step2Icon = document.getElementById('step2Icon'),
          stepLine2 = document.getElementById('stepLine2'),
          step3Icon = document.getElementById('step3Icon');
     this.stepsCounter += 880;
     if(this.stepsCounter == 880){  // user contact
          headerTitle.style.opacity = '.0';
          this.title = 'User Contact';
          step2Icon.classList.remove('hidden');
          setTimeout(function(){
               headerTitle.classList.add('tra-a-2');
               headerTitle.style.opacity = '1';
               stepLine1.style.width = '100px';
          },200);
     }else if(this.stepsCounter > 880){ // user payment
          headerTitle.classList.remove('tra-a-2');
          headerTitle.style.opacity = '.0';
          this.title = 'User Payment';
          step3Icon.classList.remove('hidden');
          setTimeout(function(){
               headerTitle.classList.add('tra-a-2');
               headerTitle.style.opacity = '1';
               stepLine2.style.width = '100px';
          },200);
     }
     stepsSlider.style.right= this.stepsCounter+'px';

 }
 //  validationInputs(){
 //     // var firstName = document.getElementById('firstName'),
 //     //      lastName  = document.getElementById('lastName'),
 //     //      eMail     = document.getElementById('eMail'),
 //     //      password  = document.getElementById('password'),
 //     //      rePassword     = document.getElementById('rePassword');
 //     var mainContaner = document.getElementById('mainContaner'),
 //          userIdCalA = document.getElementById('userIdCalA'),
 //          userIdCalB = document.getElementById('userIdCalB');
 //     function ifEmpty(){
 //          for(var i=0; i<userIdCalA.children.length; i++){
 //               if(userIdCalA.children[i].value ==''){
 //                    return userIdCalA.children[i];
 //               }
 //          }
 //          for(var x=0; x<userIdCalB.children.length; x++){
 //               if(userIdCalB.children[x].value == ''){
 //                    return userIdCalB.children[x].id;
 //               }
 //          }
 //          return false;
 //     }
 //     ifEmpty();
 //     function verify(){
 //          var ifEmp = ifEmpty();
 //          if(ifEmp === false){
 //               stepsSwitcher();
 //          }else{
 //               // alert('sorry the input ' + ifEmp + ' is empty');
 //               // mainContaner.style.backgroundColor = 'rgba(245, 102, 75, .1)'
 //               ifEmp.classList.add('border-danger', 'tra-a-1');
 //
 //          }
 //     }
 //     verify();
 // }
}
