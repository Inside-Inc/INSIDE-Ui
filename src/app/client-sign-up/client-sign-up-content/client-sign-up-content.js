 export function clientSignUpExternal() {
// Variables ---
     var userIdCalA = document.getElementById('userIdCalA'),
          userIdCalB = document.getElementById('userIdCalB'),
          userContCalA = document.getElementById('userContCalA'),
          userContCalB = document.getElementById('userContCalB'),
          userPaymentA = document.getElementById('userPaymentA'),
          nextButtStep1 = document.getElementById('nextButtStep1'),
          nextButtStep2 = document.getElementById('nextButtStep2'),
          backButtStep2 = document.getElementById('backButtStep2'),
          BackButtStep3 = document.getElementById('BackButtStep3'),
          errMessage = document.getElementById('errMessage'),
          errMessages= document.getElementById('errMessages');
     var stepsSlider = document.getElementById('stepsSlider'),
          headerTitle = document.getElementById('headerTitle'),
          stepsNumberHead = document.getElementById('stepsNumberHead'),
          step1Icon = document.getElementById('step1Icon'),
          stepLine1 = document.getElementById('stepLine1'),
          step2Icon = document.getElementById('step2Icon'),
          stepLine2 = document.getElementById('stepLine2'),
          step3Icon = document.getElementById('step3Icon'),
          nextButt = document.getElementById('nextButt'),
          eMail = document.getElementById('eMail'),
          password = document.getElementById('password'),
          rePassword = document.getElementById('rePassword');
      var stepsCounter = 0;
      var errMessageRightPos = 180;
      var title = 'User ID';
      headerTitle.innerHTML = title; // Header title
// Function ---
     function validation(column){
          // columns
          for(var i=0; i<column.children.length; i++){
               if(column.children[i].value == ''){
                    var inpId = column.children[i].id;
                    return inpId;
               }
          }
          return false;
     } // Requirment of inputs
     function ValidateEmail(){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail.value)){
               errMessage.style.opacity='0';
               errMessage.style.left='-330px';
               return true;
          }else{
               var name = eMail.getAttribute('name');
               errMessages.classList.remove('hidden-test');
               errMessages.classList.add('errMessages');
               errMessage.style.opacity='1';
               errMessage.style.left = '0';
               errMessage.innerHTML = 'Invalid E-Mail address !';
               eMail.style.borderLeft = '8px solid #F5664B';
          }

     } // valedate Email Address
     function passcode(){
          if(password.value === rePassword.value){
               errMessage.style.opacity='0';
               errMessage.style.left='-330px';
               return true;
          }else{
               var name = rePassword.getAttribute('name');
               errMessages.classList.remove('hidden-test');
               errMessages.classList.add('errMessages');
               errMessage.style.opacity='1';
               errMessage.style.left = '0';
               errMessage.innerHTML = 'Password dose not match !';
               rePassword.style.borderLeft = '8px solid #F5664B';
          }
     } // Matching btween Passowrd and rePassword
     function removeAlert(column){
          for(var i=0; i<column.children.length; i++){
               column.children[i].style.borderLeft = '0';
          }
     } // Remove alert from all inputs
     function runValid(column){
          var validationReturn = validation(column);
          var inp = document.getElementById(validationReturn);
          removeAlert(column);
          if(validationReturn == false){
               errMessage.style.opacity='0';
               errMessage.style.left='-330px';
               return true;
          }else{
               var name = inp.getAttribute('name');
               errMessages.classList.remove('hidden-test');
               errMessages.classList.add('errMessages');
               errMessage.style.opacity='1';
               errMessage.style.left = '0';
               errMessage.innerHTML = name + ' is required !';
               inp.style.borderLeft = '8px solid #F5664B';
          }
     } // Run validation alert for inpts
     function disabledInps(column){
          for(var i=0; i<column.children.length; i++){
               column.children[i].setAttribute('disabled', 'disabled');
          }
     } // Disable inputs
     function enableInps(column){
          for(var i=0; i<column.children.length; i++){
               column.children[i].removeAttribute('disabled');
          }
     } // Enable inputs
     function iconErr(iconStep){
          iconStep.classList.add('red-bc');
          iconStep.classList.remove('gray-bc');
          iconStep.classList.remove('green-bc');
     }
     function iconGo(iconStep){
          iconStep.classList.add('green-bc');
          iconStep.classList.remove('gray-bc');
          iconStep.classList.remove('red-bc');
     } // make steps icon as green
     function iconBack(iconStep){
          iconStep.classList.add('gray-bc');
          iconStep.classList.remove('green-bc');
          iconStep.classList.remove('red-bc');
     } // make steps icon as gray
     function stepsSwitcher(){ // Switch btween the steps
             stepsCounter += 880;
             if(stepsCounter == 880){  // user contact
                  headerTitle.style.opacity = '.0';
                  title = 'User Contact';
                  step2Icon.classList.remove('hidden');
                  setTimeout(function(){
                      headerTitle.innerHTML = title;
                      headerTitle.classList.add('tra-a-2');
                      headerTitle.style.opacity = '1';
                      stepLine1.style.width = '100px';
                  },200);
             }else if(stepsCounter > 880){ // user payment
                  headerTitle.classList.remove('tra-a-2');
                  headerTitle.style.opacity = '.0';
                  title = 'User Payment';
                  step3Icon.classList.remove('hidden');
                  setTimeout(function(){
                      headerTitle.innerHTML = title;
                      headerTitle.classList.add('tra-a-2');
                      headerTitle.style.opacity = '1';
                      stepLine2.style.width = '100px';
                  },200);
             }
             stepsSlider.style.right= stepsCounter+'px';
     } // steps switcher
     function moveErrMessForwoards(){
          errMessages.classList.add('hidden-test');
          errMessages.classList.remove('errMessages');
          errMessages.style.right= errMessageRightPos - 110 + 'px';
          errMessageRightPos -= 110;
     } // move Error message forwoards [Next Butt]
     function slideErrMess(){
          errMessage.style.opacity='0';
          errMessage.style.left='-330px';
     } // slide Error message back
     function moveErrMessBackwoards(){
          errMessages.classList.add('hidden-test');
          errMessages.classList.remove('errMessages');
          errMessages.style.right= errMessageRightPos + 110 + 'px';
          errMessageRightPos += 110;
     } // Move Error Message Backwoards
     function runSwitcher(){
          setTimeout(function(){
               moveErrMessForwoards();
               stepsSwitcher();
          },400);
     } // steps switcher on run time
     function stepsBack(){
          stepsCounter -= 880;
          if(stepsCounter == 0){  // user ID
               headerTitle.style.opacity = '.0';
               title = 'User ID';
               step2Icon.classList.add('hidden');
               setTimeout(function(){
                    headerTitle.innerHTML = title;
                   headerTitle.classList.add('tra-a-2');
                   headerTitle.style.opacity = '1';
                   stepLine1.style.width = '0';
               },200);
          }else if (stepsCounter > 0){
               headerTitle.classList.remove('tra-a-2');
               headerTitle.style.opacity = '.0';
               title = 'User Contact';
               step3Icon.classList.add('hidden');
               setTimeout(function(){
                   headerTitle.innerHTML = title;
                   headerTitle.classList.add('tra-a-2');
                   headerTitle.style.opacity = '1';
                   stepLine2.style.width = '0';
               },200);
          }
          stepsSlider.style.right= stepsCounter+'px';
     } // steps back
     function runStepsBack(){
          slideErrMess();
          setTimeout(function(){
               moveErrMessBackwoards();
               stepsBack();
          },400);
     } // run steps switcher to back
//  EVENTS ---
     nextButtStep1.onclick =  function(){
          runValid(userIdCalA);
          removeAlert(userIdCalB);
          iconErr(step1Icon);
          if(runValid(userIdCalA) == true){
               runValid(userIdCalB);
               if(runValid(userIdCalB) == true){
                    ValidateEmail();
                    if(ValidateEmail() == true){
                         passcode();
                         if(passcode() == true){
                              runSwitcher();
                              iconGo(step1Icon);
                              enableInps(userContCalA);
                              enableInps(userContCalB);
                              disabledInps(userIdCalA);
                              disabledInps(userIdCalB);
                         }
                    }
               }
          }
     } // Click on next button step One STEP(-1-)
     nextButtStep2.onclick =  function(){
          runValid(userContCalA);
          removeAlert(userContCalB);
          iconErr(step2Icon);
          if(runValid(userContCalA) == true){
               runValid(userContCalB);
               if(runValid(userContCalB) == true){
                    runSwitcher();
                    iconGo(step2Icon);
                    enableInps(userPaymentA);
                    disabledInps(userContCalA);
                    disabledInps(userContCalB);
               }
          }
     } // Click on next button step Two STEP(-2-)
     backButtStep2.onclick = function (){
          runStepsBack();
          iconBack(step2Icon);
          removeAlert(userContCalA);
          removeAlert(userContCalB);
          enableInps(userIdCalA);
          enableInps(userIdCalB);
          disabledInps(userContCalA);
          disabledInps(userContCalB);
     }
     BackButtStep3.onclick = function(){
          runStepsBack();
          iconBack(step3Icon);
          removeAlert(userPaymentA);
          enableInps(userContCalA);
          enableInps(userContCalB);
          disabledInps(userPaymentA);
     }
// onload END ---
};
