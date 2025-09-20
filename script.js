// تاريخ المهرجان
var eventDate = new Date("Dec 1, 2025 18:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = eventDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " يوم - " + hours + " ساعة - " +
    minutes + " دقيقة - " + seconds + " ثانية";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎊 انطلق المهرجان!";
  }
}, 1000);
