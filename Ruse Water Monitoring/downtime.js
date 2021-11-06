window.setInterval(function() {
  let d = new Date();
  if (d.getHours() > 0 && d.getHours() < 11) { 
    document.getElementById('notUpdated').style.display = "block";
  } else {
    document.getElementById('notUpdated').style.display = "none";
  }
  
}, 100*1)