// ex 9.1 000000000000000000000000000000000000000000000000000

let box = document.getElementById('box');
let changeColorBtn = document.getElementById('changeColorBtn');
let cancelBtn = document.getElementById('cancelBtn');
let timeoutId;

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.disabled = true;
  timeoutId = setTimeout(() => {
    box.style.backgroundColor= `blue`;
    changeColorBtn.disabled = false;
  }, 2000);
});

cancelBtn.addEventListener('click', () => {
  clearTimeout(timeoutId);
  box.style.backgroundColor = 'white';
  changeColorBtn.disabled = false;

});



// 00000000000000000000000000000000000000000000000000000000000000

// ex 9.2 00000000000000000000000000000000000000000000000000000000

let timerDisplay = document.getElementById('timer');
let timeLeft = 10; 

function countdown() {
timerDisplay.textContent = timeLeft;
if (timeLeft > 0) {
timeLeft--;

setTimeout(countdown, 100);
} 
else {
timerDisplay.textContent = 'הזמן נגמר';
}
}
countdown(); 

// 000000000000000000000000000000000000000000000000000000000000000000000

// ex 9.3 0000000000000000000000000000000000000000000000000000000000000000000

function customIndexOf(str, char) {

if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
  throw new Error('הפונקציה מצפה לקבל מחרוזת ותו כארגומנטים');
}


for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    return i; 
  }
}

return -1;
}


let index = customIndexOf('hello', 'e');
console.log(index); 

index = customIndexOf('hello', 'z');
console.log(index); 
// 0000000000000000000000000000000000000000000000000000000000000000000000000000000

// ex9.40000000000000000000000000000000000000000000000000000000000000000000000000000


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

const usersList = document.getElementById('usersList');
users.forEach(user => {
const listItem = document.createElement('li');
listItem.textContent = `${user.name} - ${user.address.city}`;
usersList.appendChild(listItem);
});
})
.catch(error => console.error('אירעה שגיאה במהלך קבלת רשימת המשתמשים:', error));

// 00000000000000000000000000000000000000000000000000000000000000000000000000000000
