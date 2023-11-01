import React, { useState, useEffect } from 'react';

const Countdown = () => {

  const [count, setCount] = useState(0);
  
  var today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  var dateOutput = ( tomorrow.getDate() + "/" + ( tomorrow.getMonth() + 1 ) + "/" + tomorrow.getFullYear() );
  let cdDate = tomorrow.setHours(7, 30, 0);
  //console.log('tomorrow: ', tomorrow.getHours());
  //console.log('today: ', today.getHours());
  //console.log('cdDate: ', cdDate);
  // var countDownDate = new Date(tomorrow.toDateString() + "07:30:00").getTime();
  // console.log('countDownDate: ', countDownDate);


  var countDownDate = new Date("Nov 2, 2023 07:30:00").getTime();
  //var countDownDate = cdDate;
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var minDisplay = minutes.toString().length === 1 ? "0" + minutes : minutes;
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var secDisplay = seconds.toString().length === 1 ? "0" + seconds : seconds;
var timeLeft = days + "d " + hours + "h " + minDisplay + "m " + secDisplay + "s ";

  useEffect(() => {

      //Implementing the setInterval method 
      const interval = setInterval(() => {
          setCount(count + 1);
      }, 1000);

      if (distance < 0) {
          // clearInterval(interval);
          timeLeft = "EXPIRED";
        }

      // //Clearing the interval 
      // return () => clearInterval(interval);
  }
  // , [count]
  );

  return (
  <div className='countDown'>
    <p>Do najbližšieho termínu - { dateOutput } ostáva</p>
      <h1>{timeLeft}</h1>
  </div>);

}

export default Countdown;