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
    var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");
    };

  }

}




function updateTime() {
       var now = moment()
      $("#time").text(now.hours() % 12 + ":" + now.minutes());
}

setInterval(function(){
    updateTime();
}, 1000);

function work() {
  $("#output").text("Timer is set for  25 Minutes, time to work!");
  setTimeout(function() {
    notifyMeWork();
    var audio = new Audio('work.mp3');
    audio.play();

  }, 10000) // 1500000
}

function breakTime() {
  $("#output").text("Timer is set for  5 Minutes enjoy your break!");
  setTimeout(function() {
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
