import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-sign-up-content',
  templateUrl: './client-sign-up-content.component.html',
  styleUrls: ['./client-sign-up-content.component.css']
})
export class ClientSignUpContentComponent implements OnInit {
      stepsCounter:number = 0;

  constructor() {}

  ngOnInit() {
  }
  stepsSwitcher(){ // Switch btween the steps
     var step1 = document.getElementById('step1'),
          step2 = document.getElementById('step2'),
          step3 = document.getElementById('step3'),
          stepsSlider = document.getElementById('stepsSlider');
     var stepsArr = [step1, step2, step3];
     // var position = stepsSlider.setAttribute('rightPosition', '0');
     var position = stepsSlider.getAttribute('rightPosition');
     var addRight = position + 880;
     stepsSlider.style.right= addRight+'px';
     var position = stepsSlider.setAttribute('rightPosition', addRight);
     //      stepsSlider.style.left = x_pos+'px';
     // console.log(stepsSlider.x_pos);
      // console.log(this.stepsCounter);
      // var step = stepsArr[this.stepsCounter];
      // var next = stepsArr[this.stepsCounter+1];
      // step.className = 'hidden-test';
      // next.className = '';
      //  this.stepsCounter += 1;
 }
}
