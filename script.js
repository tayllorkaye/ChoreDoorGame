let doorImage1 = document.getElemntById('door1')
let doorImage2 = document.getElemntById('door2')
let doorImage3 = document.getElemntById('door3')
let startButton = document.getElementById('start')

let botDoorPath
="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
    
let beachDoorPath= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";


let numClosedDoors = 3
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
}

const playDoor = (door) => {
  numClosedDoors --;
  if(numClosedDoors === 0){
    gameOver('win');
   } else if (isBot(door)) {
 gameOver('lose');
} 
}


const randomChoreDoorGenerator = () => { choreDoor = Math.floor(Math.random() * numClosedDoors);
if(choreDoor === 0) {
openDoor1 = botDoorPath;
openDoor2 = beachDoorPath; 
openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) { 
openDoor2 = botDoorPath;
openDoor1 = beachDoorPath; 
openDoor3 = spaceDoorPath;
} else { (choreDoor === 2)
openDoor3 = botDoorPath;
openDoor1 = beachDoorPath; 
openDoor2 = spaceDoorPath;
       }
    }


door1.onclick = () => {
 if(!isClicked(door1)){
doorImage1.src= openDoor1;
playDoor(door1);
 }
 } 

door2.onclick = () => {
  if(!isClicked(door2)){
doorImage2.src= openDoor2;
playDoor(door2);
  }
 }

door3.onclick = () => {
  if(!isClicked(door3)){
doorImage3.src= openDoor3;
playDoor(door3);
  } 
}

 


const gameOver= (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
} else {
  startButton.innerHTML = 'Game over! Play again?'
}
  currentlyPlaying = false;
}
// randomChoreDoorGenerator()
 

 

