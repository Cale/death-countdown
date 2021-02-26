$( document ).ready(function() {

  var prevyear = 200;

  var prevday = 400;

  var prevhour1 = 3;
  var prevhour2 = 11;

  var prevminute1 = 6;
  var prevminute2 = 11;

  var prevsecond1 = 6;
  var prevsecond2 = 11;

  var firstrun = true;
  const lifeexpectancy = 81;
  const lifeexpectancyindays = 29585;
  const minutesinaday = 1440;
  var minuteslefttoday;
  var lastbox;
  var age = 25;
  var deadline = new Date("Feb 19, 2041 22:11:00").getTime();

  function changeBGcolor(color) {
    $("body").animate({
      backgroundColor: color
    }, 250, function() {
      $("body").animate({
        backgroundColor: "#090F14"
      }, 250);
    });
  }

  function removeRemainingMinutes() {
    setTimeout(function() {

      $(".box"+lastbox.toString()).animate({
        backgroundColor: "#0f0"
      }, 500);
      lastbox++;
      if (lastbox < 1369) {
        removeRemainingMinutes();
      } else {
        console.log("done");
      }
    }, 60000)
  }

  function removeMinutesGone() {
    var t = new Date().getTime();
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

    minuteslefttoday = ((hours * 60) + minutes);
    var minutesgonetoday = minutesinaday - minuteslefttoday;

    var v = $("#grid > div");
    var cur = 0;
    for(var j, x, i = minutesgonetoday; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
      function removeMinute() {
        v.eq(cur++).animate({
          backgroundColor: "#ffffff"
        }, 25);
          if (cur != minutesgonetoday) {
            setTimeout(removeMinute, 25)
          } else {
            lastbox = cur;
            removeRemainingMinutes();
          }
      }
    removeMinute();
  }

  function startBlocks() {
    const container = document.getElementById("grid");
    const rows = Math.floor(minutesinaday / 38);
    const colors = Array("#112442", "#794bbf", "#4C4466", "#2846a8");

    function makeRows(rows, cols) {
      container.style.setProperty('--grid-rows', rows);
      container.style.setProperty('--grid-cols', cols);
      for (c = 0; c < (rows * cols); c++) {

        var color = colors[Math.floor(Math.random() * colors.length)];
        let cell = document.createElement("div");
        let box = c.toString();
        cell.style.background = color;
        container.appendChild(cell).className = "grid-item box"+box;
      };
      $("#grid").fadeTo(2000, 1, function(){
        removeMinutesGone();
      });
    };

    makeRows(rows, rows);
  }

  function startCountdown() {
    var x = setInterval(function() {
      var now = new Date().getTime();
      var t = deadline - now;
      var totaldays = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      var years = Math.floor(totaldays / 365);
      var days = Math.floor(totaldays - (365 * years));

      var hoursarr = hours.toString().split("");
      var minutesarr = minutes.toString().split("");
      var secondsarr = seconds.toString().split("");

      if (hoursarr[1] == undefined) {
        hoursarr[1] = hoursarr[0];
        hoursarr[0] = 0;
      }

      if (minutesarr[1] == undefined) {
        minutesarr[1] = minutesarr[0];
        minutesarr[0] = 0;
      }

      if (secondsarr[1] == undefined) {
        secondsarr[1] = secondsarr[0];
        secondsarr[0] = 0;
      }

      if ((days == 364) && (hours == 23) && (minutes == 59) && (seconds == 59)) {
        prevday = 400;
      }

      if ((hours == 23) && (minutes == 59) && (seconds == 59)) {
        prevhour1 = 3;
      }

      if ((minutes == 59) && (seconds == 59)) {
        prevminute1 = 6;
      }

      if ((seconds == 59)) {
        prevsecond1 = 6;
      }

      var curhour1 = Number(hoursarr[0]);
      var curhour2 = Number(hoursarr[1]);
      var curminute1 = Number(minutesarr[0]);
      var curminute2 = Number(minutesarr[1]);
      var cursecond1 = Number(secondsarr[0]);
      var cursecond2 = Number(secondsarr[1]);

      if ((curhour2 == 3)  && (curhour1 == 2) && (minutes == 59) && (seconds == 59)) {
        prevhour2 = 4
      }

      if ((curminute2 == 9) && (seconds == 59)) {
        prevminute2 = 11
      }

      if (cursecond2 == 9) {
        prevsecond2 = 11
      }

      // Years digits
      if (years < prevyear) {
        if (prevyear == 200) {
          prevyear = 0;
        }
        if (firstrun != true) {
          $("#year-container").append('<div class="year-fall fall">'+prevyear+'</div>');
          $(".year-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 31557600000, function() {
            $(this).remove();
          });
          changeBGcolor("#bf4b4b");
        }
        prevyear = years;
        $("#years").html(years);
      } else {
        $("#years").html(years);
      }

      // Days digits
      if (days < prevday) {
        if (prevday == 400) {
          prevday = 365;
        }
        if (firstrun != true) {
          $("#day-container").append('<div class="day-fall fall">'+prevday+'</div>');
          $(".day-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 86400000, function() {
            $(this).remove();
          });
          if (days != 364) {
            changeBGcolor("#bf4b4b");
          }
        }
        prevday = days;
        $("#days").html(days);
      } else {
        $("#days").html(days);
      }

      // First hour digit
      if (curhour1 < prevhour1) {
        if (prevhour1 == 3) {
          prevhour1 = 0;
        }
        if (firstrun != true) {
          $("#hour1-container").append('<div class="hour1-fall fall">'+prevhour1+'</div>');
          $(".hour1-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 36000000, function() {
            $(this).remove();
          });
          if (curhour1 != 2) {
            changeBGcolor("#bf4b4b");
          }
        }
        prevhour1 = curhour1;
        $("#hour1").html(hoursarr[0]);
      } else {
        $("#hour1").html(hoursarr[0]);
      }

      // Second hour digit
      if (curhour2 < prevhour2) {
        if (prevhour2 == 4) {
          prevhour2 = 0;
        }
        if (firstrun != true) {
          $("#hour2-container").append('<div class="hour2-fall fall">'+prevhour2+'</div>');
          $(".hour2-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 3600000, function() {
            $(this).remove();
          });
          if (curhour2 != 4) {
            changeBGcolor("#bf4b4b");
          }
        }
        prevhour2 = curhour2;
        $("#hour2").html(hoursarr[1]);
      } else {
        $("#hour2").html(hoursarr[1]);
      }

      // First minute digit
      if (curminute1 < prevminute1) {
        if (prevminute1 == 6) {
          prevminute1 = 0;
        }
        if (firstrun != true) {
          $("#minute1-container").append('<div class="minute1-fall fall">'+prevminute1+'</div>');
          $(".minute1-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 600000, function() {
            $(this).remove();
          });
          if (curminute1 != 5) {
            changeBGcolor("#bf4b4b");
          }
        }
        prevminute1 = curminute1;
        $("#minute1").html(minutesarr[0]);
      } else {
        $("#minute1").html(minutesarr[0]);
      }

      // Second minute digit
      if (curminute2 < prevminute2) {
        if (prevminute2 == 11) {
          prevminute2 = 0;
        }
        if (firstrun != true) {
          $("#minute2-container").append('<div class="minute2-fall fall">'+prevminute2+'</div>');
          $(".minute2-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 60000, function() {
            $(this).remove();
          });
          if (curminute2 != 9) {
            changeBGcolor("#bf4b4b");
          }
        }
        prevminute2 = curminute2;
        $("#minute2").html(minutesarr[1]);
      } else {
        $("#minute2").html(minutesarr[1]);
      }

      // First second digit
      if (cursecond1 < prevsecond1) {
        if (prevsecond1 == 6) {
          prevsecond1 = 0;
        }
        if (firstrun != true) {
          $("#second1-container").append('<div class="second1-fall fall">'+prevsecond1+'</div>');
          $(".second1-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 10000, function() {
            $(this).remove();
          });
          if (cursecond1 != 5) {
            changeBGcolor("#314e7a");
          }
        }
        prevsecond1 = cursecond1;
        $("#second1").html(secondsarr[0]);
      } else {
        $("#second1").html(secondsarr[0]);
      }

      // Second second digit
      if (cursecond2 < prevsecond2) {
        if (prevsecond2 == 11) {
          prevsecond2 = 0;
        }
        if (firstrun != true) {
          $("#second2-container").append('<div class="second2-fall fall">'+prevsecond2+'</div>');
          $(".second2-fall").animate({
            opacity: 0,
            top: "+=300"
          }, 2000, function() {
            $(this).remove();
          });
          if (cursecond2 != 9) {
            changeBGcolor("#112442");
          }
        }
        prevsecond2 = cursecond2;
        $("#second2").html(secondsarr[1]);
      } else {
        $("#second2").html(secondsarr[1]);
      }

      firstrun = false;

      //document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

  }

  //startCountdown();
  startBlocks();

});
