const objects = ["stone", "paper", "scissors"];
let userScore = 0;
let PCScore = 0;
let userObject = "";
let PCObject = "";
let resultStr = "";

const label_score = document.querySelector("#score")
const label_result = document.querySelector("#result")
const label_choices = document.querySelector("#choices")

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

function PlayRound(userObj, PCObj){
  if (userObj == PCObj) {
   return 0; 
  } else {
  if (CheckIfStone(userObj)) {
   return CheckIfPaper(PCObj) ? -1:1;
  } else if (CheckIfPaper(userObj)){
   return CheckIfScissors(PCObj) ? -1:1;
  } else if (CheckIfScissors(userObj)){
    return CheckIfStone(PCObj) ? -1:1;
  }
  }
}

function RoundResults(userChoice){
  userObject = userChoice;
  PCObject = GetPCChoice();
  switch (PlayRound(userObject,PCObject)){
    case 1: userScore +=1;
    resultStr = "User win in this round. ";
    break;
    case -1: PCScore +=1;
    resultStr = "PC win in this round. ";
    break;
    case 0: 
    resultStr = "Nobody win in this round. ";
    break;
  }
  WriteResults()
}

function WriteResults(){
  label_score.textContent = `User score: ${userScore}, PC score: ${PCScore} `;
  label_result.textContent = resultStr;
label_choices.textContent = `User choice: ${userObject}, PC choice: ${PCObject} `;
}

function ResetScore(){
  userScore = 0;
  PCScore = 0;
  WriteResults();
}

const btn_rock = document.querySelector("#rock");
btn_rock.addEventListener("click", () => {RoundResults(objects[0]);});

const btn_paper = document.querySelector("#paper");
btn_paper.addEventListener("click",  () => {RoundResults(objects[1]);});


const btn_scissors = document.querySelector("#scissors")
btn_scissors.addEventListener("click", () => {RoundResults(objects[2]);});

const btn_reset = document.querySelector("#reset");
btn_reset.addEventListener("click", ResetScore);



