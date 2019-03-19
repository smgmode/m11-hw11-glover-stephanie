//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('red'); //function defined

  for(let i = 0; i < this.textContent.length *2; i++) { //for loop
     setTimeout(changeColor, i * 1000); //setTimeout takes in two paramenters, name of function and time
};

};


//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};

//Note - This ES6 code that is doing something the number of times the length of the word.
