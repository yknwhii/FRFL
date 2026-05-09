const objects = ["stone", "paper", "scissors"];
let userScore = 0;
let PCScore = 0;

function GetUserChoice (){
  return prompt("Select your object (stone,paper,scissors):");
}

function GetPCChoice(){
  return objects[Math.floor(Math.random()*100)%3];
}
//
function CheckIfStone(obj){
  return obj == "stone"?true:false;
}


function CheckIfPaper(obj){
  return obj == "paper"?true:false;
}


function CheckIfScissors(obj){
  return obj == "scissors" ? true:false;
}

function PlayRound(userObject, PCObject){
  console.log(`User choice: ${userObject}, PC choice: ${PCObject}`);
  alert(`User choice: ${userObject}, PC choice: ${PCObject}`);
  if (userObject == PCObject) {
   return 0; 
  } else {
  if (CheckIfStone(userObject)) {
   return CheckIfPaper(PCObject) ? -1:1;
  } else if (CheckIfPaper(userObject)){
   return CheckIfScissors(PCObject) ? -1:1;
  } else if (CheckIfScissors(userObject)){
    return CheckIfStone(PCObject) ? -1:1;
  }
  }
}

function RoundResults(){
  switch (PlayRound(GetUserChoice(), GetPCChoice())){
    case 1: userScore +=1;
    console.log("User win in this round.");
    alert("User win in this round.");
    break;
    case -1: PCScore +=1;
    console.log("PC win in this round.")
    alert("PC win in this round.");
    break;
    case 0: 
    console.log("Nobody win in this round.");
    alert("Nobody win in this round.");
    break;
  }
  console.log(`User score: ${userScore}, PC score: ${PCScore}`);
  alert(`User score: ${userScore}, PC score: ${PCScore}`);
}


function PlaySPS(){
  for (let i = 0; i < 5; i++){
    RoundResults();
  }
}

PlaySPS();