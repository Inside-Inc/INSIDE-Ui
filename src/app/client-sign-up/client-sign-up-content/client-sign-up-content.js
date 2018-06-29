 export function clientSignUpExternal() {
     // Variables
     var userIdCalA = document.getElementById('userIdCalA');
          nextButt = document.getElementById('nextButt'),
          errMessage = document.getElementById('errMessage'),
           errMessages= document.getElementById('errMessages');
      var stepsSlider = document.getElementById('stepsSlider'),
           headerTitle = document.getElementById('headerTitle'),
           stepsNumberHead = document.getElementById('stepsNumberHead'),
           stepLine1 = document.getElementById('stepLine1'),
           step2Icon = document.getElementById('step2Icon'),
           stepLine2 = document.getElementById('stepLine2'),
           step3Icon = document.getElementById('step3Icon'),
           nextButt = document.getElementById('nextButt');
      var stepsCounter = 0;
      var title = 'User ID';
      headerTitle.innerHTML = title;
     // client sign up validation
     function validation(){
          // columns
          for(var i=0; i<userIdCalA.children.length; i++){
               if(userIdCalA.children[i].value == ''){
                    var inpId = userIdCalA.children[i].id;
                    return inpId;
               }
          }
          return false;
     }
     nextButt.onclick =  function(){
          var validationReturn = validation();
          var inp = document.getElementById(validationReturn);
          for(var i=0; i<userIdCalA.children.length; i++){
               userIdCalA.children[i].style.borderLeft = '0';
          }
          if(validationReturn == false){
               errMessage.style.opacity='0';
               errMessage.style.left='-330px';
               setTimeout(function(){
                    errMessages.classList.add('hidden-test');
                    errMessages.classList.remove('errMessages');
                    stepsSwitcher();
               },400);
          }else{
               var name = inp.getAttribute('name');
               errMessages.classList.remove('hidden-test');
               errMessages.classList.add('errMessages');
               errMessage.style.opacity='1';
               errMessage.style.left = '0';
               errMessage.innerHTML = name + ' is required !';
               inp.style.borderLeft = '8px solid #F5664B';
          }
     }
     // switcher
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
     }
// onload END ---
};
