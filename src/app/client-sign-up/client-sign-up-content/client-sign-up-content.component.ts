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
          step3Icon = document.getElementById('step3Icon'),
     this.stepsCounter += 880;
     if(this.stepsCounter == 880){  // user contact
          headerTitle.style.opacity = .0;
          this.title = 'User Contact';
          step2Icon.classList.remove('hidden');
          setTimeout(function(){
               headerTitle.classList.add('tra-a-2');
               headerTitle.style.opacity = 1;
               stepLine1.style.width = '100px';
          }200);
     }else if(this.stepsCounter > 880){ // user payment
          headerTitle.classList.remove('tra-a-2');
          headerTitle.style.opacity = .0;
          this.title = 'User Payment';
          step3Icon.classList.remove('hidden');
          setTimeout(function(){
               headerTitle.classList.add('tra-a-2');
               headerTitle.style.opacity = 1;
               stepLine2.style.width = '100px';
          }200);
     }
     stepsSlider.style.right= this.stepsCounter+'px';

 }
}
