// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMeWork() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Work', {
      body: "Hey there! You have worked 25 minutes!",
    });

  }

}

function notifyMeBreak() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Break Time', {

      body: "Hey there! Break time is up!",
    });


  }

}

// update the time
function updateTime() {
       var now = moment()

      $("#time").text(now.hour() % 12 + ":" + now.minute());
}



//everysecond update time
setInterval(function(){
    updateTime();
}, 1000);


function work() {
  $("#output").text("Timer is set for  25 Minutes, time to work!");
  setTimeout(function() {
    notifyMeWork();
    var audio = new Audio('work.mp3');
    audio.play();

  }, 1500000) 
}

function breakTime() {
  $("#output").text("Timer is set for  5 Minutes enjoy your break!");
  setTimeout(function() {
    notifyMeBreak();
    var audio = new Audio('break.mp3');
    audio.play();
      $("#output").text("Your break is over, get to work!");
  }, 300000)//300000
}


$("#work").on("click", function() {
  work();
});

$("#break").on("click", function() {
  breakTime();
});
