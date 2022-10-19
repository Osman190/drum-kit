const buttons = document.querySelectorAll(".set button");

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}

document.addEventListener("keypress", handlePress)

function handleClick() {
  const buttonHTML = this.innerHTML;
  makeSound(buttonHTML)
  buttonAnimation(buttonHTML)
}

function handlePress(e) {
  makeSound(e.key)
  buttonAnimation(e.key)
}


function makeSound(key) {
  switch (key) {
    case 'a':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 's':
      let kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case 'd':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'f':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'g':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'h':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'j':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(key);
      break;
  }

// use switch statement above instead of if (JS Replacement Option)
// if(this.innerHTML === "w") {
//   let audio = new Audio("sounds/crash.mp3")
//   this.style.color = "#fff"
//   this.style.color = "red"
//   audio.play()
// } else if(this.innerHTML === "a") {
//   let audio = new Audio("sounds/kick-bass.mp3")
//   audio.play()
//   this.classlist.toggle()
//   this.style.color = "red"
// } else if(this.innerHTML === "s") {
//   let audio = new Audio("sounds/snare.mp3")
//   audio.play()
//   this.style.color = "#fff"
//   this.style.color = "red"
// } else if(this.innerHTML === "d") {
//   let audio = new Audio("sounds/tom-1.mp3")
//   audio.play()
//   this.style.color = "#fff"
//   this.style.color = "red"
// } else if(this.innerHTML === "j") {
//   let audio = new Audio("sounds/tom-2.mp3")
//   audio.play()
//   this.style.color = "#fff"
//   this.style.color = "red"
// } else if(this.innerHTML === "k") {
//   let audio = new Audio("sounds/tom-3.mp3")
//   audio.play()
//   this.style.color = "#fff"
//   this.style.color = "red"
// } else if(this.innerHTML === "l") {
//   let audio = new Audio("sounds/tom-4.mp3")
//   audio.play()
//   this.style.color = "#fff"
//   this.style.color = "red"
// }
}

function buttonAnimation(key) {
  let ele = document.querySelector(`.${key}`)
  if(ele) {
    ele.classList.add("pressed");
    setTimeout(function(){
      ele.classList.remove("pressed")
    }, 100)
  }
}