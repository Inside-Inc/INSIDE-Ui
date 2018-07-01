 export function clientSignUpExternal() {
// Variables ---
     var userIdCalA = document.getElementById('userIdCalA'),
          userIdCalB = document.getElementById('userIdCalB'),
          userContCalA = document.getElementById('userContCalA'),
          userContCalB = document.getElementById('userContCalB'),
          nextButtStep1 = document.getElementById('nextButtStep1'),
          nextButtStep2 = document.getElementById('nextButtStep2'),
          errMessage = document.getElementById('errMessage'),
          errMessages= document.getElementById('errMessages');
     var stepsSlider = document.getElementById('stepsSlider'),
          headerTitle = document.getElementById('headerTitle'),
          stepsNumberHead = document.getElementById('stepsNumberHead'),
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
     function stepsSwitcher(){ // Switch btween the steps
             stepsCounter += 880;
             if(stepsCounter == 880){  // user contact
                  headerTitle.style.opacity = '.0';
                  title = 'User Contact';
                  headerTitle.innerHTML = title;
                  step2Icon.classList.remove('hidden');
                  setTimeout(function(){
                      headerTitle.classList.add('tra-a-2');
                      headerTitle.style.opacity = '1';
                      stepLine1.style.width = '100px';
                  },200);
             }else if(stepsCounter > 880){ // user payment
                  headerTitle.classList.remove('tra-a-2');
                  headerTitle.style.opacity = '.0';
                  title = 'User Payment';
                  headerTitle.innerHTML = title;
                  step3Icon.classList.remove('hidden');
                  setTimeout(function(){
                      headerTitle.classList.add('tra-a-2');
                      headerTitle.style.opacity = '1';
                      stepLine2.style.width = '100px';
                  },200);
             }
             stepsSlider.style.right= stepsCounter+'px';
     } // steps switcher
     function runSwitcher(){setTimeout(function(){
          errMessages.classList.add('hidden-test');
          errMessages.classList.remove('errMessages');
          errMessages.style.right= errMessageRightPos - 110 + 'px';
          errMessageRightPos -= 110;
          stepsSwitcher();
     },400);} // steps switcher on run time
//  EVENTS ---
     nextButtStep1.onclick =  function(){
          runValid(userIdCalA);
          removeAlert(userIdCalB);
          if(runValid(userIdCalA) == true){
               runValid(userIdCalB);
               if(runValid(userIdCalB) == true){
                    ValidateEmail();
                    if(ValidateEmail() == true){
                         passcode();
                         if(passcode() == true){
                              runSwitcher();
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
          if(runValid(userContCalA) == true){
               runValid(userContCalB);
               if(runValid(userContCalB) == true){
                    runSwitcher();
                    enableInps(userContCalA);
                    enableInps(userContCalB);
                    disabledInps(userContCalA);
                    disabledInps(userContCalB);
               }
          }
     } // Click on next button step Two STEP(-2-)
// onload END ---
};
