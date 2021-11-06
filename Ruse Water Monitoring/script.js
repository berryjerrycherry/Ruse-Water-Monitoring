




let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let clock = setInterval(
  function time (){ 
    var date_now = new Date();
    var hr = date_now.getHours();
    var min = date_now.getMinutes();
    var sec = date_now.getSeconds();
    if(hr < 10){
      hr = "0" + hr;
    
    }
    if(min < 10){
      min = "0" + min;
    
    }
    if(sec < 10){
      sec = "0" + sec;
    }

    hour.innerHTML = hr;
    minute.innerHTML = min;
    seconds.innerHTML = sec;



  },0
)


