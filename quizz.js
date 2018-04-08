// VARIABLEs
var form = document.getElementById("bigform").elements;
var questionBoxes = document.querySelectorAll('.uniqquestion');
var press = document.getElementById('tink');
var victory = document.getElementById('fanfare');


// colorswitch
var inputBackground = document.getElementById('input1');
var inputAllBackground = document.getElementsByClassName('.input');

// questions
var questionOne = document.getElementById('q1');
var questionAll = document.getElementsByClassName('questions');

// inputs
var inputOne = document.getElementById('input1');
var inputTwo = document.getElementById('input2');
var inputThree = document.getElementById('input3');
var inputFour = document.getElementById('input4');
var inputFive = document.getElementById('input5');
var inputSix = document.getElementById('input6');
var inputSeven = document.getElementById('input7');
var inputEight = document.getElementById('input8');
var inputNine = document.getElementById('input9');
var inputTen = document.getElementById('input10');
var inputEleven = document.getElementById('input11');
var inputTwelve = document.getElementById('input12');
var inputThirteen = document.getElementById('input13');
var inputFourteen = document.getElementById('input14');
var inputFifteen = document.getElementById('input15');
var inputSixteen = document.getElementById('input16');
var inputSeventeen = document.getElementById('input17');
var inputEighteen = document.getElementById('input18');
var inputNineteen = document.getElementById('input19');
var inputTwenty = document.getElementById('input20');
var inputAll = document.querySelectorAll('.input');

// submits
var buttonOne = document.getElementById('button1');
var buttonTwo = document.getElementById('button2');
var buttonThree = document.getElementById('button3');
var buttonFour = document.getElementById('button4');
var buttonFive = document.getElementById('button5');
var buttonSix = document.getElementById('button6');
var buttonSeven = document.getElementById('button7');
var buttonEight = document.getElementById('button8');
var buttonNine = document.getElementById('button9');
var buttonTen = document.getElementById('button10');
var buttonEleven = document.getElementById('button11');
var buttonTwelve = document.getElementById('button12');
var buttonThirteen = document.getElementById('button13');
var buttonFourteen = document.getElementById('button14');
var buttonFifteen = document.getElementById('button15');
var buttonSixteen = document.getElementById('button16');
var buttonSeventeen = document.getElementById('button17');
var buttonEighteen = document.getElementById('button18');
var buttonNineteen = document.getElementById('button19');
var buttonTwenty = document.getElementById('button20');
var buttonAll = document.querySelectorAll('button');


// FUNCTIONS
/*
buttonAll.onclick = function () {
const inputEverything = inputAll.forEach(function(input){
  if (input.value === buttonAll.value) {
    return inputBackground.style.background = "green";
  }
  else {
    return inputBackground.style.background = "red";
  }
})
  return inputEverything();
}
function test() {
  const formTest = document.getElementById("bigform").elements;
  for(var i = 0; i < formTest.length; i++){

  }
}*/

/*function testButton() {
  buttonAll.forEach()
}
questionBoxes.forEach(function (postBox) {
  postBox.addEventListener('click',function () {
    if (postBox.style.background === "green") {
      return 1;
    }
    else {
      return 0;
    }
    console.log(questionBoxes);
  })
})*/

/*questionBoxes.forEach(function(postBox) {
  var allButton = postBox.addEventListener('click', function() {
    inputOne.value === buttonOne.value ? bottonOne.style.background = "green" : bottonOne.style.background = "red";
  });
});
//return inputOne.value === buttonOne.value ? greenBackground() : wrongAnswer();

 var postId = this.getAttribute('id')
console.log(postId)
document.getElementById('input' + postId).style.background = 'green'*/

/*
var greenBackground = inputAll.forEach(function(input){
    var stockedPoints = [];
    if(input.style.backgroundColor === 'green'){
      return stockedPoints.push(1);

    }
  })*/


/*
function correctAnswer() {
   //return inputAll.style.background = "green";
   return inputAll.forEach(function(input){
     input.style.backgroundColor='green'
   })
}
function wrongAnswer() {
   return inputAll.forEach(function(falseInput){
     if (falseInput !== allButton) {
       return falseInput.style.backgroundColor='red'
     }
   })
   //return inputAll.style.background = "red";
}
*/

function victoryCondition() {

}

// submit function -- can't seem to make the foreach work ...
buttonOne.onclick = function() {
  return inputOne.value === buttonOne.value ? inputOne.style.background = "green" : inputOne.style.background = "red";
};
buttonTwo.onclick = function() {
  return inputTwo.value === buttonTwo.value ? inputTwo.style.background = "green" : inputTwo.style.background = "red";
};
buttonThree.onclick = function() {
  return inputThree.value === buttonThree.value ? inputThree.style.background = "green" : inputThree.style.background = "red";
};
buttonFour.onclick = function() {
  return inputFour.value === buttonFour.value ? inputFour.style.background = "green" : inputFour.style.background = "red";
};
buttonFive.onclick = function() {
  return inputFive.value === buttonFive.value ? inputFive.style.background = "green" : inputFive.style.background = "red";
};
buttonSix.onclick = function() {
  return inputSix.value === buttonSix.value ? inputSix.style.background = "green" : inputSix.style.background = "red";
};
buttonSeven.onclick = function() {
  return inputSeven.value === buttonSeven.value ? inputSeven.style.background = "green" : inputSeven.style.background = "red";
};
buttonEight.onclick = function() {
  return inputEight.value === buttonEight.value ? inputEight.style.background = "green" : inputEight.style.background = "red";
};
buttonNine.onclick = function() {
  return inputNine.value === buttonNine.value ? inputTwo.Nine.background = "green" : inputNine.style.background = "red";
};
buttonTen.onclick = function() {
  return inputTen.value === buttonTen.value ? inputTen.style.background = "green" : inputTen.style.background = "red";
};
buttonEleven.onclick = function() {
  return inputEleven.value === buttonEleven.value ? inputEleven.style.background = "green" : inputEleven.style.background = "red";
};
buttonTwelve.onclick = function() {
  return inputTwelve.value === buttonTwelve.value ? inputTwelve.style.background = "green" : inputTwelve.style.background = "red";
};
buttonThirteen.onclick = function() {
  return inputThirteen.value === buttonThirteen.value ? inputThirteen.style.background = "green" : inputThirteen.style.background = "red";
};
buttonFourteen.onclick = function() {
  return inputFourteen.value === buttonFourteen.value ? inputFourteen.style.background = "green" : inputFourteen.style.background = "red";
};
buttonFifteen.onclick = function() {
  return inputFifteen.value === buttonFifteen.value ? inputFifteen.style.background = "green" : inputFifteen.style.background = "red";
};
buttonSixteen.onclick = function() {
  return inputSixteen.value === buttonSixteen.value ? inputSixteen.style.background = "green" : inputSixteen.style.background = "red";
};
buttonSeventeen.onclick = function() {
  return inputSeventeen.value === buttonSeventeen.value ? inputSeventeen.style.background = "green" : inputSeventeen.style.background = "red";
};
buttonEighteen.onclick = function() {
  return inputEighteen.value === buttonEleven.value ? inputEighteen.style.background = "green" : inputEighteen.style.background = "red";
};
buttonNineteen.onclick = function() {
  return inputNineteen.value === buttonNineteen.value ? inputNineteen.style.background = "green" : inputNineteen.style.background = "red";
};
buttonTwenty.onclick = function() {
  return inputTwenty.value === buttonTwenty.value ? inputTwenty.style.background = "green" : inputTwenty.style.background = "red";
};



// Keeping in case of:

/*function wrongAnswer() {
   return inputAll.forEach(function(falseInput){
     if (falseInput !== allButton) {
       return falseInput.style.backgroundColor='red'
     }
   })
 };*/

// green or red?
/*function backgroundChangeCondition() {
  if (inputOne.value === buttonOne.value) {
    return inputBackground.style.background = "green";
  }
  else {
    return inputBackground.style.background = "red";
}
buttonOne.onclick = function () {
  return backgroundChangeCondition();
}*/

/*  if (inputOne.value === buttonOne.value) {
    return correctAnswer();
  }
  else {
    return wrongAnswer();
  }*/
// JQUERY


$(document).ready(function () {
/*  function correctAnswer() {
     $('.input').css('background','green')
  }
  function wrongAnswer() {
     $('.input').css('background','red')
  }*/
  $('#button20').click(function() {
    if ($('#inputTwenty').css("background-color", "green")) {
      victory.play();
      return initSnow();
    }
  })
  $(".button").click(function(){
      press.play();
    });
});
