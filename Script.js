
const button = document.querySelector('button');

const image = button.querySelector('img'); 
 // Get the image inside the button
const textElement = document.querySelector('.TrackYourGoal');

const textElementSecond = document.querySelector('.goal');
const homeImage = document.querySelector('.Image13'); 

button.addEventListener('click', function() {
    homeImage.src = "Android 2/image 16.png";
    image.src = "Android 2/Group 2.png";
    textElement.textContent = "Get Burn";
    textElementSecond.textContent = "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever";
    textElementSecond.width = 352;
    textElementSecond.height = 234;
});





const currentDate = new Date();
const currentDayName = currentDate.toLocaleString('en-US', { weekday: 'short' });

const currentDaySpan = document.getElementById("currentday");  // Use ID for direct access
currentDaySpan.textContent = currentDayName;  // Update text with current day
// Get the current date and format it as "6" (just the day number)

const currentDateNumber = currentDate.getDate();

// Select the element for the current date
const currentDateSpan = document.getElementById("currentdate");

// Update the text content of the element
currentDateSpan.textContent = currentDateNumber;

// Get the previous date
const previousDate = new Date();
previousDate.setDate(previousDate.getDate() - 1);  // Subtract 1 day

// Get the previous day name
const previousDayName = previousDate.toLocaleString('en-US', { weekday: 'short' });

// Get the previous date number
const previousDateNumber = previousDate.getDate();

// Select the elements for the previous day and date
const previousDaySpan = document.getElementById("previousday");
const previousDateSpan = document.getElementById("previousdate");

// Update the text content of the elements
previousDaySpan.textContent = previousDayName;
previousDateSpan.textContent = previousDateNumber;


// Get the next dates (3 days ahead)
const nextDate1 = new Date();
nextDate1.setDate(nextDate1.getDate() + 1);  // Add 1 day
const nextDate2 = new Date();
nextDate2.setDate(nextDate2.getDate() + 2);  // Add 2 days
const nextDate3 = new Date();
nextDate3.setDate(nextDate3.getDate() + 3);  // Add 3 days

// Get the next day names and date numbers
const nextDayName1 = nextDate1.toLocaleString('en-US', { weekday: 'short' });
const nextDateNumber1 = nextDate1.getDate();
const nextDayName2 = nextDate2.toLocaleString('en-US', { weekday: 'short' });
const nextDateNumber2 = nextDate2.getDate();
const nextDayName3 = nextDate3.toLocaleString('en-US', { weekday: 'short' });
const nextDateNumber3 = nextDate3.getDate();

// Select the elements for the next days and dates
const nextDaySpan1 = document.getElementById("currentday2");  // Adjusted from previous response
const nextDateSpan1 = document.getElementById("currentdate2");
const nextDaySpan2 = document.getElementById("currentday3");
const nextDateSpan2 = document.getElementById("currentdate3");
const nextDaySpan3 = document.getElementById("currentday4");  // Added for the fourth day
const nextDateSpan3 = document.getElementById("currentdate4");  // Added for the fourth day

// Update the text content of the elements
nextDaySpan1.textContent = nextDayName1;
nextDateSpan1.textContent = nextDateNumber1;
nextDaySpan2.textContent = nextDayName2;
nextDateSpan2.textContent = nextDateNumber2;
nextDaySpan3.textContent = nextDayName3;  // Update for the fourth day
nextDateSpan3.textContent = nextDateNumber3;  // Update for the fourth day



const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
const currentYear = currentDate.getFullYear();

const currentMonthYearDiv = document.getElementById("currentmonthyear");
currentMonthYearDiv.textContent = `${currentMonth} ${currentYear}`;


const createButton = document.getElementById("create");
const workoutDiv = document.querySelector(".createtask");

createButton.addEventListener("click", () => {
  let workoutName = prompt("Enter Workout Name:");
  workoutName = workoutName.trim();  // Trim leading/trailing spaces

  let workoutTime = parseInt(prompt("Enter Time (HH):"));

  // Basic validation (optional)
  if (!workoutName || !workoutTime) {
    alert("Please enter a workout name and time.");
    return;  // Prevent further execution if not both are entered
  }

  // Update the workout div content
  workoutDiv.textContent = `${workoutName}, ${workoutTime}:00am`;  // Add ":00am" for display
});



// const parentDiv = document.getElementById('parent');

// let topPosition = 643; // Initial top position for the first element

// createButton.addEventListener('click', () => {
//   // Get user input (replace with your preferred method)
//   const userInput = prompt("Enter text:");

//   if (userInput) {
//     const newTimeSlot = document.createElement('div');
//     newTimeSlot.classList.add('time-slot');
//     newTimeSlot.textContent = userInput;

//     // Set absolute positioning and style
//     newTimeSlot.style.left = '16px';
//     newTimeSlot.style.top = topPosition + 'px';
//     newTimeSlot.style.position = 'absolute';

//     // Update top position for next element
//     topPosition += 40;

//     parentDiv.appendChild(newTimeSlot);
//   }
// });

