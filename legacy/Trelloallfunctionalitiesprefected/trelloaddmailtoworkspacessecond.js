let serialNo

let hideContent = document.querySelector("#hidecontents")


let div = document.querySelector("#container");


function HideWarning(){
  if (fetchingBoardsEl.style. visibility === "visible") {
    fetchingBoardsEl.style. visibility = "hidden";
  } else {
    fetchingBoardsEl.style. visibility = "hidden";
  }
 
}

function hideProgressBar(){
  if (div.style. visibility === "hidden") {
    div.style. visibility = "visible";
  } else {
    div.style. visibility = "visible";
  }
 
}

function showProgressBar(){
   if (div.style. visibility === "visible") {
     div.style. visibility = "hidden";
   } else {
     div.style. visibility = "hidden";
   }
  
 }

 function hideContentswhenLoading () {
   if (hideContent.style. visibility === "visible") {
     hideContent.style. visibility = "hidden";
   } else {
     hideContent.style. visibility = "hidden";
   }
  
 }


 function showContentswhenLoading () {
   if (hideContent.style. visibility === "hidden") {
     hideContent.style. visibility = "visible";
   } else {
     hideContent.style. visibility = "visible";
   }
  
 }


let slider = document.getElementById("progressBar");
let progress = document.getElementById("progress");
let button = document.getElementById("myButton");

let speed = 1;

let widthBar = parseInt(window.getComputedStyle(progress).width);
let widthProgress = parseInt(window.getComputedStyle(slider).width);

let result = Math.round((widthBar/widthProgress)*100);
console.log(result);

function move() { 
  displayBoardFetched ()
   
   hideProgressBar()  
    setInterval(addFrame, 5*30);
    function addFrame() {
        if (result < 100) {
            result = result + speed;
            progress.style.width = result + "%";
            progress.innerHTML = result + "%";
        }
      }
    }

    
function displayBoardFetched (){
   fetchingBoardsEl.innerHTML =`Adding email to ${newUniqueLenght+1} Workspaces `
   emailEmptyErr.innerHTML =''
   emailEmptyErr2.innerHTML =''
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''
   addmailEl.innerHTML =''
   addmailEl2.innerHTML ='' 
   successEl.innerHTML = `` 
}





