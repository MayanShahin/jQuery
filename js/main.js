"use strict"
// NAVBAR  WIDTH //
let navWidth = $(".gear-box").innerWidth()
console.log(navWidth);

// O P E N     N A V // 
$("#openNav").on("click", function(){
    $(".navBar").animate({left: "0px"},1000)
})

// C L O S E     N A V // 
$(".closeBtn").on("click", function () {
    $(".navBar").animate({left: `-${navWidth}`},1000)
})


// A C C O R D I O N  TOGGLE //
$(document).ready(function() {
    // hide all singer-content by default  ... 
    $(".singer-content").hide();
})
    $(".title").on("click", function () {
    $(this).next(".singer-content").slideToggle()

   // Close all other singer-content 
    $(".singer-content").not($(this).next(".singer-content")).slideUp();
})


// T E X T A R E A  CHARACTER REAMINING //
$("textarea").on("keyup", function(){
  let myLength = $(this).val().length
  console.log(myLength);
  $("#num").text(
     100 - myLength <= 0 ? "your available characters finished" : 100 - myLength
  )
})


// C O U N T  D O W N //
$(document).ready(function() {
    // Set the date we're counting down to (Nov 25, 2025)
    var countDownDate = new Date("Nov 25, 2025").getTime();
  
    // Update the count down every 1 second
    var x = setInterval(function() {
  
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in the elements with the corresponding IDs
      $("#days").text(days + " D"); 
      $("#hours").text(hours + " h");
      $("#minutes").text(minutes + " m");
      $("#seconds").text(seconds + " s");
    }, 1000);
  });

