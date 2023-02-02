$(document).ready(function(){
  // added event listener for saving button function to localStorage
  $('.saveBtn').on('click', function(){
    
    let value = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time,value);
    
    $(".notify").addClass("show");
    setTimeout(showNotification,5000);
  });

  function showNotification(){
    $(".notify").removeClass("show");
  }

  function updateTimeBlock(){
    let currentHour =dayjs().hour();
    console.log(currentHour);

    $(".time-block").each(function(){
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);

      // TODO: Add code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour
  
      if (blockHour < currentHour){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
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