//Random color change button function

function colorChange() {
    let x = Math.floor(Math.random() * 248);
    let y = Math.floor(Math.random() * 248);
    let z = Math.floor(Math.random() * 248);
    let linkColor = "rgb(" + x + "," + y + "," + z + ")";
    return linkColor;
  }
  
  let buttonevent = document.querySelector(".join-btn");
  buttonevent.addEventListener("mouseover", function() {
    buttonevent.style.color = colorChange();
    buttonevent.style.backgroundColor = "#dff5d5";
  });
  
  buttonevent.addEventListener("mouseleave", function() {
    buttonevent.style.color = "white";
    buttonevent.style.backgroundColor = "#6927D8";
  });
  
  let startbutton = document.querySelector(".start-btn");
  startbutton.addEventListener("mouseover", function() {
    startbutton.style.color = colorChange();
    startbutton.style.backgroundColor = "white";
  });
  
  startbutton.addEventListener("mouseleave", function() {
    startbutton.style.color = "white";
    startbutton.style.backgroundColor = "red";
  });
  
  
  