$( document ).ready(function() {

  var prevminute1 = 6;
  var prevminute2 = 11;

  var prevsecond1 = 6;
  var prevsecond2 = 11;


  function startCountdown() {
    //var secondsarr = [];
    var deadline = new Date("Jan 5, 2035 15:37:25").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      var miliseconds = Math.floor((t % (((1000 * 60)) / 1000)) );

      var minutesarr = minutes.toString().split("");
      var secondsarr = seconds.toString().split("");

      if (minutesarr[1] == undefined) {
        minutesarr[1] = minutesarr[0];
        minutesarr[0] = 0;
      }

      if (secondsarr[1] == undefined) {
        secondsarr[1] = secondsarr[0];
        secondsarr[0] = 0;
      }

      if ((minutes == 59)) {
        prevminute1 = 6;
      }

      if ((seconds == 59)) {
        prevsecond1 = 6;
      }

      var cursecond1 = Number(secondsarr[0]);
      var cursecond2 = Number(secondsarr[1]);
      var curminute1 = Number(minutesarr[0]);
      var curminute2 = Number(minutesarr[1]);

      if (cursecond2 == 9) {
        prevsecond2 = 11
      }

      if (curminute2 == 9) {
        prevminute = 11
      }

      console.log(seconds+" "+Number(secondsarr[0])+" "+secondsarr[1]);
      console.log("second 1: "+Number(secondsarr[0]));
      console.log("prev second 1: "+prevsecond1);
      console.log("second 2: "+Number(secondsarr[1]));
      console.log("prev second 2: "+prevsecond2);

      // First minute digit
      if (curminute1 < prevminute1) {
        if (prevminute1 == 6) {
          prevminute1 = 0;
        }
        $("#minute1-container").append('<div class="minute1-fall" style="color: red;">'+prevminute1+'</div>');
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
        $("#minute2-container").append('<div class="minute2-fall" style="color: orange;">'+prevminute2+'</div>');
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
        $("#second1-container").append('<div class="second1-fall" style="color: red;">'+prevsecond1+'</div>');
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
        $("#second2-container").append('<div class="second2-fall" style="color: orange;">'+prevsecond2+'</div>');
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


      document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + miliseconds + "ms";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    // var today = new Date();
    //
    // var BigDay = new Date("December 25, 2065");
    // var msPerDay = 24 * 60 * 60 * 1000;
    // var timeLeft = (BigDay.getTime() - today.getTime());
    // console.log(BigDay.getTime() + " "+ today.getTime());
    // var all_daysLeft = timeLeft / msPerDay;
    // console.log("all_daysleft: "+all_daysLeft);
    // var all_daysLeft = Math.floor(all_daysLeft);
    // console.log(all_daysLeft);
    // var yearsLeft = 0;
    // if (all_daysLeft > 365) {
    //   yearsLeft = Math.floor(all_daysLeft / 365);
    //   daysLeftthisyear = all_daysLeft % 365;
    // }
    // var e_hrsLeft = (all_daysLeft - daysLeftthisyear) % 24;
    // console.log("all_daysleft: "+all_daysLeft);
    // console.log("daysLeft this year: "+daysLeftthisyear);
    // console.log(e_hrsLeft);
    // var hrsLeft = Math.floor(e_hrsLeft);
    // var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
    // $("div").append(yearsLeft + " years " + daysLeftthisyear + " days " + hrsLeft + " hours " + minsLeft + " minutes");
  }



  startCountdown();

});
