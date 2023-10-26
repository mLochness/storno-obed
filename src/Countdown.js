import { useState, useRef, useEffect } from 'react';

const Countdown = () => {

// Set the date we're counting down to
var countDownDate = new Date("Oct 27, 2023 07:30:00").getTime();
let timeLeft;

// Update the count down every 1 second
var x = setInterval = (() => {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in variable "timeLeft"
  timeLeft = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  console.log("time left: ", timeLeft);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    timeLeft = "ODHLASOVANIE UKONČENÉ";
  }
}, 1000);

return (
  <div className="countDown">
      <h4>{timeLeft}</h4>
  </div>
);


/* ************************************************************** 

const Ref = useRef(null);
 
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:30');
 
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // add more seconds
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
 
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
 
    return (
        <div className="App">
            <h2>{timer}</h2>
        </div>
    )
}
*/


}

export default Countdown;