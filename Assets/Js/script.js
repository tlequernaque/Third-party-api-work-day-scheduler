// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  
});

$(document).ready(function(){
  // added event listener for saving button function to localStorage
  $('.saveBtn').on('click', function(){
    
    let value = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time,value);
  });

  function updateTimeBlock(){
    let currentHour =dayjs.hour();
    console.log(currentHour);

    $(".time-block").each(function(){
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);

      if (blockHour < currentHour){
        $(this).addClass("past");
      } else if (blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
      }else if (blockHour>currentHour){
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });

  }

  updateTimeBlock();


  // added code for input saved in localStorage to in text area 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));

});