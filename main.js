//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('red'); //function defined

  for(let i = 0; i < this.textContent.length; i++) { //for loop
     changeColor(); //initialize function inside of the for loop
};

};


//The Event Listener
