$( document ).ready(function() {

  var prevyear = 200;

  var prevday = 400;

  var prevhour1 = 3;
  var prevhour2 = 11;

  var prevminute1 = 6;
  var prevminute2 = 11;

  var prevsecond1 = 6;
  var prevsecond2 = 11;

  function startCountdown() {
    var deadline = new Date("Feb 19, 2041 18:13:00").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var t = deadline - now;
      var totaldays = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      var miliseconds = Math.floor((t % (((1000 * 60)) / 1000)) );
      var years = Math.floor(totaldays / 365);
      var days = Math.floor(totaldays - (365 * years));
      console.log(days);

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

      // console.log(hours+" "+Number(hoursarr[0])+" "+hoursarr[1]);
      // console.log("hour 1: "+Number(hoursarr[0]));
      // console.log("prev hour 1: "+prevhour1);
      // console.log("hour 2: "+Number(hoursarr[1]));
      // console.log("prev hour 2: "+prevhour2);
      console.log("Previous year: "+prevyear);
      console.log("Year: "+years);
      console.log("Previous Day: "+prevday);
      console.log("Days: "+days);

      // Years digits
      if (years < prevyear) {
        if (prevyear == 200) {
          prevyear = 0;
        }
        $("#year-container").append('<div class="year-fall fall" style="color: red;">'+prevyear+'</div>');
        $(".year-fall").animate({
          opacity: 0,
          top: "+=400"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#day-container").append('<div class="day-fall fall" style="color: red;">'+prevday+'</div>');
        $(".day-fall").animate({
          opacity: 0,
          top: "+=400"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#hour1-container").append('<div class="hour1-fall fall" style="color: red;">'+prevhour1+'</div>');
        $(".hour1-fall").animate({
          opacity: 0,
          top: "+=400"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#hour2-container").append('<div class="hour2-fall fall" style="color: orange;">'+prevhour2+'</div>');
        $(".hour2-fall").animate({
          opacity: 0,
          top: "+=600"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#minute1-container").append('<div class="minute1-fall fall" style="color: red;">'+prevminute1+'</div>');
        $(".minute1-fall").animate({
          opacity: 0,
          top: "+=400"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#minute2-container").append('<div class="minute2-fall fall" style="color: orange;">'+prevminute2+'</div>');
        $(".minute2-fall").animate({
          opacity: 0,
          top: "+=600"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#second1-container").append('<div class="second1-fall fall" style="color: red;">'+prevsecond1+'</div>');
        $(".second1-fall").animate({
          opacity: 0,
          top: "+=400"
        }, 2000, function() {
          $(this).remove();
        });
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
        $("#second2-container").append('<div class="second2-fall fall" style="color: orange;">'+prevsecond2+'</div>');
        $(".second2-fall").animate({
          opacity: 0,
          top: "+=600"
        }, 2000, function() {
          $(this).remove();
        });
        prevsecond2 = cursecond2;
        $("#second2").html(secondsarr[1]);
      } else {
        $("#second2").html(secondsarr[1]);
      }

      document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + miliseconds + "ms";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

  }



  startCountdown();

});
