function updateTime() {
       var now = moment()
      $("#time").text(now.hours() % 12 + ":" + now.minutes() + ":" +now.seconds() );
}

setInterval(function(){
    updateTime();
}, 1000);

function work() {
  $("#output").text("Timer is set for  25 Minutes, time to work!");
  setTimeout(function() {
    var audio = new Audio('work.mp3');
    audio.play();
    $("#output").text("You worked 25 Minutes!!");
  }, 2000) //1500000
}

function breakTime() {
  $("#output").text("Timer is set for  5 Minutes enjoy your break!");
  setTimeout(function() {
    var audio = new Audio('break.mp3');
    audio.play();
      $("#output").text("Your break is over, get to work!");
  }, 2000) // 300000
}


$("#work").on("click", function() {
  work();
});

$("#break").on("click", function() {
  breakTime();
});
