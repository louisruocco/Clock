const clock = document.querySelector(".clock");

setInterval(time, 1000);

function time(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

    if(secs < 10){
        secs = "0" + secs;
    }

    if(hours > 17){
        document.body.style.background = "black";
        clock.style.color = "blue";
    }
    
    clock.textContent = hours + ":" + mins + ":" + secs;

}