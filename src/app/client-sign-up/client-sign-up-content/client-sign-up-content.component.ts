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
     var stepsSlider = document.getElementById('stepsSlider');
     var position = stepsSlider.getAttribute('rightPosition');
     var positionInt = Number(position);
     var addRight = positionInt + 880;
     stepsSlider.style.right= addRight+'px';
     stepsSlider.setAttribute('rightPosition', addRight);
 }
}
