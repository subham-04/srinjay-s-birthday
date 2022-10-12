
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElement = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

let countdownTitle ='';
let countdownDate ='';
let countdownValue = Date;
let countdownActive;
console.log(countdownValue);
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// Setting date minimun input to todays date
const today = new Date().toISOString().split('T')[0];
console.log(today)
dateEl.setAttribute('min',today);

// populate countdown/complete ui

function updateDOM(){

  countdownActive = setInterval(()=>{
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(`distance: ${distance}`);
  
    const days = Math.floor(distance/day);
    const hours = Math.floor((distance % day)/hour);
    const minutes = Math.floor((distance % hour)/minute);
    const seconds = Math.floor((distance % minute)/second);
  
    console.log(days,hours,minutes,seconds);

    // hide input
     inputContainer.hidden = true;

    // if the countdown has ended show complete
    if(distance < 0){
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeEl.hidden= false;
      
    }else{
      // populate countdown 
    countdownElTitle.textContent=` `;
    timeElement[0].textContent = `${days}`;
    timeElement[1].textContent = `${hours}`;
    timeElement[2].textContent = `${minutes}`;
    timeElement[3].textContent = `${seconds}`;
    completeEl.hidden = true;
    countdownEl.hidden = false;
    }
  
    
  
    // // Hide input
    // inputContainer.hidden = true;
    // // Show countdown
    // countdownEl.hidden=false;
  },second);
  // const now = new Date().getTime();
  // const distance = countdownValue - now;
  // console.log(`distance: ${distance}`);

  // const days = Math.floor(distance/day);
  // const hours = Math.floor((distance % day)/hour);
  // const minutes = Math.floor((distance % hour)/minute);
  // const seconds = Math.floor((distance % minute)/second);

  // console.log(days,hours,minutes,seconds);

  // // populate countdown 
  // countdownElTitle.textContent=`${countdownElTitle}`;
  // timeElement[0].textContent = `${days}`;
  // timeElement[1].textContent = `${hours}`;
  // timeElement[2].textContent = `${minutes}`;
  // timeElement[3].textContent = `${seconds}`;

  // // Hide input
  // inputContainer.hidden = true;
  // // Show countdown
  // countdownEl.hidden=false;
}

// Take values from Form input
function updateCountdown(e){
  e.preventDefault();
  countdownTitle= e.srcElement[0].value;
  countdownDate= e.srcElement[1].value;

  // get number version of current date and update dom

  countdownValue= new Date(countdownDate).getTime();
  console.log('countdown value-', countdownValue);
  updateDOM();

}

function reset(){
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // stop countsown
  clearInterval(countdownActive);
  // reset
  countdownTitle = '';
  countdownDate = '';
}


// Event listners

countdownForm.addEventListener('submit',updateCountdown);


























VanillaTilt.init(document.querySelector('.c-tilt'), {
    max: 65,
    perspective: 700,
    speed: 400
  });
  