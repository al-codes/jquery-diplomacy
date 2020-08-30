"use strict";

/******* Functions & event handlers *******/

function changeColor() {
  const colorChangeEls = $('.color-change');

  for (const el of colorChangeEls) {
    //changed 'hide' to refer to 'red' style element
    $(el).toggleClass('red');
  }
}

function validateNumber(evt) {
  evt.preventDefault();

  const numberInput = $('input[name="number"]');
  const userNum = parseInt(numberInput.val(), 10);  // typecast to num

  const formFeedback = $('#formFeedback');
  
  //Completed if statement- if number is greater than 10 or if not usernum
  if (!userNum || userNum > 10) {
    formFeedback.text('Please enter a smaller number');
  } else {
    formFeedback.text('You are good to go!');
  }
}


/******* Attach event handlers *******/
//Changed button class from .color-change to .color-changer
$('.color-changer').on('click', changeColor);
$('.number-form').on('submit', validateNumber);

