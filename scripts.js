function lightMode(){
    document.body.classList.toggle("lightMode");
}

function greeting(){
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12){
        document.getElementById("greeting").innerHTML = "Good morning";
    } 
    else if (hour >= 12 && hour < 18){
        document.getElementById("greeting").innerHTML = "Good day";
    } 
    else{
        document.getElementById("greeting").innerHTML = "Good evening";
    }
}

greeting()

function countdown(){
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
            
        var distance = countDownDate - now;
            
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "KLAAR";
        }
    }, 1000);
}
countdown()

function cookieBox(){
    document.querySelector(".cookie-melding").style.display = "none"
    document.querySelector(".blur-background").style.display = "none"
    console.log("cookies have been accepted/declined")
}

function hamburger() {
    var x = document.getElementById("xd");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
