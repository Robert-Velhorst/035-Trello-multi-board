
//Declarations//
let stringedId
let idFinally;
let data;
let lenghtID;
let errorMes; let errorMes2;
let Fetch13
let getId4; let getId3;
let serialNo;

let emailValue1 =[];
let emailElaa = document.getElementById("resultoo"); 
let newUniqueLenght;
let emailEl = document.getElementById("result"); 
let addmailEl = document.getElementById("addmail-error");
let addmailEl2 = document.getElementById("addmail-error2");
let serviceErrorEl = document.getElementById("service-error");
let serviceErrorEl2 = document.getElementById("service-error2");
let submitEl = document.getElementById("submit-el")
let successEl = document.getElementById("success");
let emailEmptyErr = document.getElementById("email-error");
let emailEmptyErr2 = document.getElementById("email-error2");
let sendingProgressEl = document.getElementById("sendin-progress");
let sendingProgressEl2 = document.getElementById("sendin-progress2");
let refreshEl = document.getElementById("btn-reload");
let fetchingBoardsEl = document.getElementById("fetch-progress2");
let counterEl  = document.getElementById("para");
let containerEl  = document.getElementById("container");


const apiToken = '2ebc1d7d22cebcbb4b31049c25b34b0ccf2211b7e67e864f61b84a90ef9f23b5'
const apiKey = 'eda71c6538a148f072216a00d82c07e9'


//checkinternet conncetion//

function fetchBoardNow() {
    

    async function DeleteBoardTest2(){
    
        const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
        )
       
         data = await response.json()
        lenghtID = (data.length) -1
        durationFetching = (seriaNo * 0.8) + 3;
       
        numberoneId = (data[1].id)
        console.log(numberoneId)
            
    }
    
    DeleteBoardTest2().catch(error=>{
      
        console.log(error)
      })
    }


    function getReady (){ 
      fetchBoardNow ();
      setTimeout(() => {
        localStorage.clear ();
        lenghtIDCheck()
       }, 1000);
      setTimeout(() => {
         
          lenghtIDCheck()
         }, 2000); 
      }
  
  window.onload = getReady;
  window.onload =    Fetch0()
  
  function lenghtIDCheck(){
      if (lenghtID){
          serviceErrorEl.innerHTML = '';
          serviceErrorEl2.innerHTML = '';
          HideRefreshButton()
          DeleteButtonShow();
      } 
      else{
        window.onload = ''
        getReady=''
          serviceErrorEl.innerHTML = `No Internet Connection.`
          serviceErrorEl2.innerHTML =`Refresh and Retry`
          emailEmptyErr.innerHTML =''
          emailEmptyErr2.innerHTML =''
          HideDeleteButton ()
          RefreshButtonShow();  
      }
  }
  

//Declarations related to progress bar//

let okayEl = document.querySelector("#okay");
let cancelEl = document.querySelector("#cancel");

let slider = document.getElementById("progressBar");
let progress = document.getElementById("progress");
let button = document.getElementById("myButton");
let hideFieldEl = document.getElementById("field-hide");
let mainHideEl = document.getElementById("hidecontents")

let speed = 1;

let widthBar = parseInt(window.getComputedStyle(progress).width);
let widthProgress = parseInt(window.getComputedStyle(slider).width);
let realLenght;
let result = Math.round((widthBar/widthProgress)*100);


// checkbox select all function//
function selectall () {
  var checkboxes = document.getElementsByName('fruit');
  for(var i=0, n=checkboxes.length; i<n; i++) {
    if (checkboxes[i].style.display != "none"){
        checkboxes[i].checked = true;
    }
  }
  showChecked()
}



document.getElementById('select-all').addEventListener("click", () =>{
  selectall ()

})

document.getElementById('clear-select').addEventListener("click", ()=> {
  var checkboxes = document.getElementsByName('fruit');
  for (var checkbox of checkboxes) {
  checkbox.checked = false;

  document.querySelectorAll("input:checked").length = 0;
  showChecked()

  }
} )

function showChecked(){
  document.getElementById("para").innerHTML = document.querySelectorAll("input:checked").length + " " +"of" +" "+ newUnique.length ;
}
document.querySelectorAll("input[name=fruit]").forEach(i=>{
 i.onclick = function(){
  showChecked();
 }
});

//Okay and Cancel button functions//

okayEl.addEventListener("click", ()=> {
  window.location.href = "multiselect.html";
})

cancelEl.addEventListener("click", ()=> {
  window.location.href = "multiselect.html";
})

function showErrors (){
  if (emailEmptyErr2.style.display === "none") {
    emailEmptyErr2.style.display = "block";
  } else {
    emailEmptyErr2.style.display = "block";
  }   
};
function hideErrors (){
  if (emailEmptyErr2.style.display === "block") {
    emailEmptyErr2.style.display = "none";
  } else {
    emailEmptyErr2.style.display = "none";
  }   
};


//progress bar main function//
function move() { 

  mainhide();
  hidingCheckboxed ()
  displayBoardFetched ()
   
   hideProgressBar()  
    setInterval(addFrame,2*28);
    function addFrame() {
        if (result < 100) {
            result = result + speed;
            progress.style.width = result + "%";
            progress.innerHTML = result + "%";
        }
      }
    }

//visibilities hiding//

function mainhide() {
  if (mainHideEl.style. display === "block") {
    mainHideEl.style. display = "none";
  } else {
    mainHideEl.style. display = "none";
  } 
}

function mainShow (){
  if (mainHideEl.style. display === "none") {
    mainHideEl.style. display = "block";
  } else {
    mainHideEl.style. display = "block";
  }   
}


 
function RefreshButtonShow (){
  if (refreshEl.style. display === "none") {
    refreshEl.style. display = "block";
  } else {
    refreshEl.style. display = "block";
  }   
}

function DeleteButtonShow (){
  if (deletingEl.style. display === "none") {
    deletingEl.style. display = "block";
  } else {
    deletingEl.style. display = "block";
  }   
}


function HideDeleteButton (){
  if (deletingEl.style. display === "block") {
    deletingEl.style. display = "none";
  } else {
    deletingEl.style. display = "none";
  }   
}

function HideRefreshButton (){
  if (refreshEl.style. display === "block") {
    refreshEl.style. display = "none";
  } else {
    refreshEl.style. display = "none";
  }   
}


function HideAddEmailMessage (){
  if (successEl.style. display === "block") {
    successEl.style. display = "none";
  } else {
    successEl.style. display = "none";
  }   
}



function inviscibleWrongMessage (){
  if (fetchingBoardsEl.style. display === "block") {
    fetchingBoardsEl.style. display = "none";
  } else {
    fetchingBoardsEl.style. display = "none";
  }   
}

function inviscibleAdmail (){
    if (emailEmptyErr.style. display === "block") {
      emailEmptyErr.style. display = "none";
    } else {
      emailEmptyErr.style. display = "none";
    }   
  }


function cancelBar(){
    if (cancelEl.style. display === "none") {
      cancelEl.style. display = "block";
    } else {
      cancelEl.style. display = "block";
    }
   
  }

  
 function hideContentswhenLoading () {
  if (hideContent.style. display === "block") {
    hideContent.style. display = "none";
  } else {
    hideContent.style. display = "none";
  }
 
}


function showContentswhenLoading () {
  if (hideContent.style. display === "none") {
    hideContent.style. display = "block";
  } else {
    hideContent.style. display = "block";
  }
 
}

  function cancelnoBar(){
    if (cancelEl.style. display === "block") {
      cancelEl.style. display = "none";
    } else {
      cancelEl.style. display = "none";
    }
   
  };


function okayBar(){
  if (okayEl.style. display === "none") {
    okayEl.style. display = "block";
  } else {
    okayEl.style. display = "block";
  }
 
}

function negokayBar(){
    if (okayEl.style. display === "block") {
      okayEl.style. display = "none";
    } else {
      okayEl.style. display = "none";
    }
   
  }


let hideContent = document.querySelector("#hidecontents")


let div = document.querySelector("#container");

  function hideProgressBar(){
    if (div.style. display === "none") {
      div.style. display = "block";
    } else {
      div.style. display = "block";
    }
   
  }
  
let deletingEl = document.getElementById("deleting-btn");
let backEl = document.querySelector(".back-btn");

//menu Button function//
backEl.addEventListener("click", () => {
  window.history.back()

})

//Delete Button function//
deletingEl.addEventListener("click", ()=> {
  
  emailValue1.push(emailElaa.value)

  for( let i = 0; i <emailValue1.length; i++){

          emailValue = (emailValue1[i])

  }
  if ( document.querySelectorAll("input:checked").length == 0) {
    setTimeout(() => {
      hideErrors ()
    }, 5000);
    showErrors ()

    emailEmptyErr2.innerHTML = `No Workspaces selected`
  }

else if (emailValue == [] || emailValue == '' ){
  setTimeout(() => {
    hideErrors ()
  }, 5000);
  showErrors ()

 emailEmptyErr2.innerHTML =`Enter a valid Trello-name`
 serviceErrorEl.innerHTML = ''
 serviceErrorEl2.innerHTML =''
 successEl.innerHTML = ''
 fetchingBoardsEl.innerHTML =''
 sendingProgressEl2.innerHTML =''
 sendingProgressEl.innerHTML =''

}

else{
emailElaa.value =""

  deletingCheckboxed ()
}
});


//Fetching Boards function to get Workspaces Ids //

 function Fetch0 () {
    
async function  fetchworkspace0(){

  const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
    );

   
     dataSorted = await response.json()
     //sorting boards alphabetically//
     data= dataSorted.sort((a, b) => a.name.localeCompare(b.name));
     console.log(data)
    lenghtID = (data.length) -1
      
 //sorting boards with same organization Id or Workspace Ids together to make a new array of only different Ids//   
if (lenghtID==0){
  serialNo = 1;
 dataId= [
   
    data[0].idOrganization 
 ]

 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;

console.log(newUniqueLenght)
FinalCheckingId () } 

else if (lenghtID==1){
  serialNo = 2;
      
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization 
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==2){
     serialNo = 3;
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization  
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==3){
     serialNo = 4
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization 
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==4){
     serialNo=5
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization 
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==5){
     serialNo=6
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==6){
     serialNo = 7
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==7){
     serialNo=8
   
 dataId= [
   
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization 
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==8){
     serialNo=9
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization , data[8].idOrganization 
 ]
 newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==9){
     serialNo = 10;
   
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ]
   newUnique = [...new Set(dataId)]

newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==10){
     serialNo= 11;

 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization  ]
    newUnique = [...new Set(dataId)]

  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
FinalCheckingId () }

  else if (lenghtID==11){
     serialNo =12;

  
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization]
    newUnique = [...new Set(dataId)]

  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
FinalCheckingId () } 

  else if (lenghtID==12){
     serialNo = 13

  
 dataId= [
   
    data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
    data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization]
    newUnique = [...new Set(dataId)]

  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
FinalCheckingId () } 

else if (lenghtID==13){


dataId= [

 data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
 data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
 ,data[13].idOrganization]
 newUnique = [...new Set(dataId)]


newUniqueLenght = newUnique.length -1;
console.log(newUniqueLenght)
FinalCheckingId () } 



else if (lenghtID==14){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 
  

else if (lenghtID==15){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 

    

else if (lenghtID==16){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 

      

else if (lenghtID==17){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
   , data[17].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 
  
      

else if (lenghtID==18){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
   , data[17].idOrganization, data[18].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 
    
      

else if (lenghtID==19){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 

      
      

else if (lenghtID==20){


  dataId= [
  
   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization]
   newUnique = [...new Set(dataId)]
  
  
  newUniqueLenght = newUnique.length -1;
  console.log(newUniqueLenght)
  FinalCheckingId () } 

  else if (lenghtID==21){


    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 

    
  else if (lenghtID==22){


    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization, data[22].idOrganization]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 

    
    
  else if (lenghtID==23){


    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 
    
    
    
  else if (lenghtID==24){


    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 

        
    
  else if (lenghtID==25){

    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
     , data[25].idOrganization ]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 
  

            
    
  else if (lenghtID==26){

    dataId= [
    
     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
     , data[25].idOrganization , data[26].idOrganization  ]
     newUnique = [...new Set(dataId)]
    
    
    newUniqueLenght = newUnique.length -1;
    console.log(newUniqueLenght)
    FinalCheckingId () } 

    else if (lenghtID==27){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization  ]
       newUnique = [...new Set(dataId)]
      
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 


      
    else if (lenghtID==28){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization   ]
       newUnique = [...new Set(dataId)]
      
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 


      

      
    else if (lenghtID==29){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization  ]
       newUnique = [...new Set(dataId)]
      
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
            

      
    else if (lenghtID==30){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization ]
       newUnique = [...new Set(dataId)]
      
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
      
      
    else if (lenghtID==31){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization]
       newUnique = [...new Set(dataId)]
      
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 

            
      
    else if (lenghtID==32){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization]
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
      
            
      
    else if (lenghtID==33){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization]
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
            
            
      
    else if (lenghtID==34){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization , data[34].idOrganization]
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 

                  
      
    else if (lenghtID==35){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization]
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
      
                  
      
    else if (lenghtID==36){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization]
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
                        
      
    else if (lenghtID==37){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
       , data[37].idOrganization]

       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 
                        
      
    else if (lenghtID==38){

      dataId= [
      
       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
       , data[37].idOrganization  , data[38].idOrganization]
       
       newUnique = [...new Set(dataId)]
      
      newUniqueLenght = newUnique.length -1;
      console.log(newUniqueLenght)
      FinalCheckingId () } 

      else if (lenghtID==39){

        dataId= [
        
         data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
         data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
         ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
         , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
         , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
         , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
         , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
         , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
         , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization]
         
         newUnique = [...new Set(dataId)]
        
        newUniqueLenght = newUnique.length -1;
        console.log(newUniqueLenght)
        FinalCheckingId () } 
        
      else if (lenghtID==40){

        dataId= [
        
         data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
         data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
         ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
         , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
         , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
         , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
         , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
         , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
         , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization]
         
         newUnique = [...new Set(dataId)]
        
        newUniqueLenght = newUnique.length -1;
        console.log(newUniqueLenght)
        FinalCheckingId () } 
        
        else if (lenghtID==41){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

                
        else if (lenghtID==42){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

                          
        else if (lenghtID==43){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

          
                          
        else if (lenghtID==44){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

          
          
                          
        else if (lenghtID==45){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

          
          
          
                          
        else if (lenghtID==46){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 
                 
          
          
                          
        else if (lenghtID==47){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 
                    
          
                          
        else if (lenghtID==48){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

                                    
        else if (lenghtID==49){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
           , data[49].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

                                              
        else if (lenghtID==50){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
           , data[49].idOrganization , data[50].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 
    
          
                                              
        else if (lenghtID==51){

          dataId= [
          
           data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
           data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
           ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
           , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
           , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
           , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
           , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
           , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
           , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
           , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
           , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
           , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization]
           
           newUnique = [...new Set(dataId)]
          
          newUniqueLenght = newUnique.length -1;
          console.log(newUniqueLenght)
          FinalCheckingId () } 

          else if (lenghtID==52){

            dataId= [
            
             data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
             data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
             ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
             , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
             , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
             , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
             , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
             , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
             , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
             , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
             , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
             , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
            ]
             
             newUnique = [...new Set(dataId)]
            
            newUniqueLenght = newUnique.length -1;
            console.log(newUniqueLenght)
            FinalCheckingId () } 


            
          else if (lenghtID==53){

            dataId= [
            
             data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
             data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
             ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
             , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
             , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
             , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
             , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
             , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
             , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
             , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
             , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
             , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
             , data[53].idOrganization
            ]
             
             newUnique = [...new Set(dataId)]
            
            newUniqueLenght = newUnique.length -1;
            console.log(newUniqueLenght)
            FinalCheckingId () } 


            
            
          else if (lenghtID==54){

            dataId= [
            
             data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
             data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
             ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
             , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
             , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
             , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
             , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
             , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
             , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
             , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
             , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
             , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
             , data[53].idOrganization, data[54].idOrganization
            ]
             
             newUnique = [...new Set(dataId)]
            
            newUniqueLenght = newUnique.length -1;
            console.log(newUniqueLenght)
            FinalCheckingId () } 

            
            
            else if (lenghtID==55){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
              
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 

                          
            else if (lenghtID==56){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
              
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 


                                      
            else if (lenghtID==57){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
              
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 
    
  
  
                                      
            else if (lenghtID==58){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
              
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 

               
  
                                      
            else if (lenghtID==59){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
              
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 

                             
  
                                      
            else if (lenghtID==60){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 
                                           
  
                                      
            else if (lenghtID==61){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 
    
    
                                      
            else if (lenghtID==62){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () } 

                                          
            else if (lenghtID==63){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () }
  
  
  
  
                                          
            else if (lenghtID==64){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () }
                
                                          
            else if (lenghtID==65){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
               , data[65].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () }
                              
                                          
            else if (lenghtID==66){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
               , data[65].idOrganization, data[66].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () }

                                                        
            else if (lenghtID==67){

              dataId= [
              
               data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
               data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
               ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
               , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
               , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
               , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
               , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
               , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
               , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
               , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
               , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
               , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
               , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
               , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
               , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
               , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization
              ]
               
               newUnique = [...new Set(dataId)]
               
              newUniqueLenght = newUnique.length -1;
              console.log(newUniqueLenght)
              FinalCheckingId () }

                                                        
              else if (lenghtID==68){

                dataId= [
                
                 data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                 data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                 ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                 , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                 , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                 , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                 , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                 , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                 , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                 , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                 , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                 , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                 , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                 , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                 , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                 , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                ]
                 
                 newUnique = [...new Set(dataId)]
                 
                newUniqueLenght = newUnique.length -1;
                console.log(newUniqueLenght)
                FinalCheckingId () }

                
                                                        
              else if (lenghtID==69){

                dataId= [
                
                 data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                 data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                 ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                 , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                 , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                 , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                 , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                 , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                 , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                 , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                 , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                 , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                 , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                 , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                 , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                 , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                 , data[69].idOrganization
                ]
                 
                 newUnique = [...new Set(dataId)]
                 
                newUniqueLenght = newUnique.length -1;
                console.log(newUniqueLenght)
                FinalCheckingId () }
  

                
                                                        
              else if (lenghtID==70){

                dataId= [
                
                 data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                 data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                 ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                 , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                 , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                 , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                 , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                 , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                 , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                 , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                 , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                 , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                 , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                 , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                 , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                 , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                 , data[69].idOrganization, data[70].idOrganization
                ]
                 
                 newUnique = [...new Set(dataId)]
                 
                newUniqueLenght = newUnique.length -1;
                console.log(newUniqueLenght)
                FinalCheckingId () }

                
                                                        
                else if (lenghtID==71){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }



                
                                                        
                else if (lenghtID==72){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }


                  
                
                                                        
                else if (lenghtID==73){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                   , data[73].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }


                            
                                                        
                else if (lenghtID==74){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                   , data[73].idOrganization , data[74].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }
                                      
                else if (lenghtID==75){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                   , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }

                                                               
                                                        
                else if (lenghtID==76){

                  dataId= [
                  
                   data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                   data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                   ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                   , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                   , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                   , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                   , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                   , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                   , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                   , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                   , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                   , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                   , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                   , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                   , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                   , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                   , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                   , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                  ]
                   
                   newUnique = [...new Set(dataId)]
                   
                  newUniqueLenght = newUnique.length -1;
                  console.log(newUniqueLenght)
                  FinalCheckingId () }

                  else if (lenghtID==77){

                    dataId= [
                    
                     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                     , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                     , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                     , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                     , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                     , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                     , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                     , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                     , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                     , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                     , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                     , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                     , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                     , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                     , data[77].idOrganization
                    ]
                     
                     newUnique = [...new Set(dataId)]
                     
                    newUniqueLenght = newUnique.length -1;
                    console.log(newUniqueLenght)
                    FinalCheckingId () }


                    
                  else if (lenghtID==78){

                    dataId= [
                    
                     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                     , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                     , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                     , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                     , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                     , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                     , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                     , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                     , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                     , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                     , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                     , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                     , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                     , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                     , data[77].idOrganization, data[78].idOrganization
                    ]
                     
                     newUnique = [...new Set(dataId)]
                     
                    newUniqueLenght = newUnique.length -1;
                    console.log(newUniqueLenght)
                    FinalCheckingId () }


                                
                  else if (lenghtID==79){

                    dataId= [
                    
                     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                     , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                     , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                     , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                     , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                     , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                     , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                     , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                     , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                     , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                     , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                     , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                     , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                     , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                     , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization
                    ]
                     
                     newUnique = [...new Set(dataId)]
                     
                    newUniqueLenght = newUnique.length -1;
                    console.log(newUniqueLenght)
                    FinalCheckingId () }

                                                    
                  else if (lenghtID==80){

                    dataId= [
                    
                     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                     , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                     , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                     , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                     , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                     , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                     , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                     , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                     , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                     , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                     , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                     , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                     , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                     , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                     , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                    ]
                     
                     newUnique = [...new Set(dataId)]
                     
                    newUniqueLenght = newUnique.length -1;
                    console.log(newUniqueLenght)
                    FinalCheckingId () }

                    
                                                    
                  else if (lenghtID==81){

                    dataId= [
                    
                     data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                     data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                     ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                     , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                     , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                     , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                     , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                     , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                     , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                     , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                     , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                     , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                     , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                     , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                     , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                     , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                     , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                     , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                     , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                     , data[81].idOrganization
                    ]
                     
                     newUnique = [...new Set(dataId)]
                     
                    newUniqueLenght = newUnique.length -1;
                    console.log(newUniqueLenght)
                    FinalCheckingId () }


                    
                                                    
                    else if (lenghtID==82){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                                          
                                                    
                    else if (lenghtID==83){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                      
                                          
                                                    
                    else if (lenghtID==84){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }




                      
                                          
                                                    
                    else if (lenghtID==85){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                                                                
                                                    
                    else if (lenghtID==86){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }
                      
                                                                
                                                    
                    else if (lenghtID==87){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                
                      
                                                                
                                                    
                    else if (lenghtID==88){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                              
                      
                                                                
                                                    
                    else if (lenghtID==89){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                                                                                                                 
                                                    
                    else if (lenghtID==90){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                                                                                      
                                                    
                    else if (lenghtID==91){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }
                                                                                                            
                                                    
                    else if (lenghtID==92){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                                                                          
                    else if (lenghtID==93){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


              

                                                                          
                    else if (lenghtID==94){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                         

                                                                          
                    else if (lenghtID==95){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                                               

                                                                          
                    else if (lenghtID==96){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization, data[96].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


            
                                               

                                                                          
                    else if (lenghtID==97){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization, data[96].idOrganization
                       , data[97].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }


                                                                     

                                                                          
                    else if (lenghtID==98){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization, data[96].idOrganization
                       , data[97].idOrganization, data[98].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                                                                
                    else if (lenghtID==99){
 
                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization, data[96].idOrganization
                       , data[97].idOrganization, data[98].idOrganization, data[99].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

                                                                                                     
                                                                          
                    else if (lenghtID==100){

                      dataId= [
                      
                       data[0].idOrganization , data[1].idOrganization , data[2].idOrganization , data[3].idOrganization , data[4].idOrganization , data[5].idOrganization , data[6].idOrganization,
                       data[7].idOrganization , data[8].idOrganization , data[9].idOrganization ,  data[10].idOrganization ,  data[11].idOrganization , data[12].idOrganization
                       ,data[13].idOrganization, data[14].idOrganization, data[15].idOrganization , data[16].idOrganization
                       , data[17].idOrganization, data[18].idOrganization , data[19].idOrganization, data[20].idOrganization
                       , data[21].idOrganization, data[22].idOrganization, data[23].idOrganization, data[24].idOrganization 
                       , data[25].idOrganization , data[26].idOrganization, data[27].idOrganization, data[28].idOrganization 
                       , data[29].idOrganization , data[30].idOrganization , data[31].idOrganization, data[32].idOrganization
                       , data[33].idOrganization , data[34].idOrganization, data[35].idOrganization, data[36].idOrganization
                       , data[37].idOrganization  , data[38].idOrganization , data[39].idOrganization, data[40].idOrganization
                       , data[41].idOrganization , data[42].idOrganization, data[43].idOrganization, data[44].idOrganization
                       , data[45].idOrganization, data[46].idOrganization, data[47].idOrganization, data[48].idOrganization
                       , data[49].idOrganization , data[50].idOrganization, data[51].idOrganization , data[52].idOrganization
                       , data[53].idOrganization, data[54].idOrganization, data[55].idOrganization, data[56].idOrganization
                       , data[57].idOrganization, data[58].idOrganization, data[59].idOrganization, data[60].idOrganization
                       , data[61].idOrganization , data[62].idOrganization, data[63].idOrganization, data[64].idOrganization
                       , data[65].idOrganization, data[66].idOrganization, data[67].idOrganization, data[68].idOrganization
                       , data[69].idOrganization, data[70].idOrganization, data[71].idOrganization, data[72].idOrganization
                       , data[73].idOrganization , data[74].idOrganization, data[75].idOrganization, data[76].idOrganization
                       , data[77].idOrganization, data[78].idOrganization, data[79].idOrganization, data[80].idOrganization
                       , data[81].idOrganization, data[82].idOrganization, data[83].idOrganization, data[84].idOrganization
                       , data[85].idOrganization , data[86].idOrganization, data[87].idOrganization, data[88].idOrganization
                       , data[89].idOrganization , data[90].idOrganization, data[91].idOrganization, data[92].idOrganization
                       , data[93].idOrganization, data[94].idOrganization, data[95].idOrganization, data[96].idOrganization
                       , data[97].idOrganization, data[98].idOrganization, data[99].idOrganization, data[100].idOrganization
                      ]
                       
                       newUnique = [...new Set(dataId)]
                       
                      newUniqueLenght = newUnique.length -1;
                      console.log(newUniqueLenght)
                      FinalCheckingId () }

  //function for fetching each organization Ids from the newUnique array//
   function Fetch0(){
       idFetched0 = newUnique[0];
      //  nameFinally0 = newUnique[0].name;
       // nameBoard0 = newUnique[0].username;
       console.log(idFetched0);
        // console.log(nameFinally0);
       //  console.log(nameBoard0);
       }

       function Fetch1 () {
           Fetch0 ()
           idFetched1 = newUnique[1]
          //  nameFinally1 = newUnique[1].name;
           // nameBoard1 = newUnique[1].username;
        
            console.log(idFetched1);
            // console.log(nameFinally1);
           //  console.log(nameBoard1);
       }
       
       function Fetch2(){
           Fetch1()
           idFetched2 = newUnique[2]
          //  nameFinally2 = newUnique[2].name;
           // nameBoard2 = newUnique[2].username;
        
            console.log(idFetched2);
            // console.log(nameFinally2);
           //  console.log(nameBoard2);
       
       }
       function Fetch3(){
           Fetch2()
           idFetched3 = newUnique[3]
          //  nameFinally3 = newUnique[3].name;
           // nameBoard3 = newUnique[3].username;
        
            console.log(idFetched3);
            // console.log(nameFinally3);
           //  console.log(nameBoard3);
       }
       function Fetch4(){
           Fetch3()
       
           idFetched4 = newUnique[4]
          //  nameFinally4 = newUnique[4].name;
           // nameBoard4 = newUnique[4].username;
        
            console.log(idFetched4);
            // console.log(nameFinally4);
           //  console.log(nameBoard4);
       }
       
       function Fetch5(){
           Fetch4()
           idFetched5 = newUnique[5]
          //  nameFinally5 = newUnique[5].name;
           // nameBoard5 = newUnique[5].username;
        
            console.log(idFetched5);
            // console.log(nameFinally5);
           //  console.log(nameBoard5);
       }
       
       function Fetch6(){
           Fetch5()
           idFetched6 = newUnique[6]
          //  nameFinally6 = newUnique[6].name;
           // nameBoard6 = newUnique[6].username;
        
            console.log(idFetched6);
            // console.log(nameFinally6);
           //  console.log(nameBoard6);
       }
       
       function Fetch7(){
           Fetch6()
           idFetched7 = newUnique[7]
          //  nameFinally7 = newUnique[7].name;
           // nameBoard7 = newUnique[7].username;
       
            console.log(idFetched7);
            // console.log(nameFinally7);
           //  console.log(nameBoard7);
       }
       
       function Fetch8(){
           Fetch7()
           idFetched8 = newUnique[8]
          //  nameFinally8 = newUnique[8].name;
           // nameBoard8 = newUnique[8].username;
        
            console.log(idFetched8);
            // console.log(nameFinally8);
       }
       function Fetch9(){
           Fetch8()
           idFetched9 = newUnique[9]
          //  nameFinally9 = newUnique[9].name;
           // nameBoard9 = newUnique[9].username;
        
            console.log(idFetched9);
            // console.log(nameFinally9);
           //  console.log(nameBoard9);
       }
       function Fetch10(){
           Fetch9()
           idFetched10 = newUnique[10]
          //  nameFinally10 = newUnique[10].name;
           // nameBoard10 = newUnique[10].username;
        
            console.log(idFetched10);
            // console.log(nameFinally10);
           //  console.log(nameBoard10);
       }
       
       function Fetch11(){
           Fetch10()
           idFetched11 = newUnique[11]
          //  nameFinally11 = newUnique[11].name;
           // nameBoard11 = newUnique[11].username;
        
            console.log(idFetched11);
            // console.log(nameFinally11);
           //  console.log(nameBoard11);
       }
       
       function Fetch11(){
           Fetch10()
           idFetched11 = newUnique[11]
          //  nameFinally11 = newUnique[11].name;
           // nameBoard11 = newUnique[11].username;
        
            console.log(idFetched11);
            // console.log(nameFinally11);
           //  console.log(nameBoard11);
       }
       
       function Fetch12(){
           Fetch11()
           idFetched12 = newUnique[12]
          //  nameFinally12 = newUnique[12].name;
           // nameBoard12 = newUnique[12].username;
        
            console.log(idFetched12);
            // console.log(nameFinally12);
           //  console.log(nameBoard12);
       }
       
       function Fetch13(){
           Fetch12()
           idFetched13 = newUnique[13]
          //  nameFinally13 = newUnique[13].name;
           // nameBoard13 = newUnique[13].username;
        
            console.log(idFetched13);
            // console.log(nameFinally13);
           //  console.log(nameBoard13);
       }
        
       function Fetch14(){
           Fetch13()
           idFetched14 = newUnique[14]
          //  nameFinally14 = newUnique[14].name;
           // nameBoard14 = newUnique[14].username;
        
            console.log(idFetched14);
            // console.log(nameFinally14);
           //  console.log(nameBoard14);
       }
       
       function Fetch15(){
           Fetch14()
           idFetched15 = newUnique[15]
          //  nameFinally15 = newUnique[15].name;
           // nameBoard15 = newUnique[15].username;
        
            console.log(idFetched15);
            // console.log(nameFinally15);
           //  console.log(nameBoard15);
       }
       
       function Fetch16(){
           Fetch15()
           idFetched16 = newUnique[16]
          //  nameFinally16 = newUnique[16].name;
           // nameBoard16 = newUnique[16].username;
        
            console.log(idFetched16);
            // console.log(nameFinally16);
           //  console.log(nameBoard16);
       }
       
       function Fetch17(){
           Fetch16()
           idFetched17 = newUnique[17]
          //  nameFinally17 = newUnique[17].name;
           // nameBoard17 = newUnique[17].username;
        
            console.log(idFetched17);
            // console.log(nameFinally17);
           //  console.log(nameBoard17);
       }
       
       function Fetch18(){
           Fetch17()
           idFetched18 = newUnique[18]
          //  nameFinally18 = newUnique[18].name;
           // nameBoard18 = newUnique[18].username;
        
            console.log(idFetched18);
            // console.log(nameFinally18);
           //  console.log(nameBoard18);
       }
          
       function Fetch19(){
           Fetch18()
           idFetched19 = newUnique[19]
          //  nameFinally19 = newUnique[19].name;
           // nameBoard19 = newUnique[19].username;
        
            console.log(idFetched19);
            // console.log(nameFinally19);
           //  console.log(nameBoard19);
       }
       
       function Fetch20(){
           Fetch19()
           idFetched20 = newUnique[20]
          //  nameFinally20 = newUnique[20].name;
           // nameBoard20 = newUnique[20].username;
        
            console.log(idFetched20);
            // console.log(nameFinally20);
           //  console.log(nameBoard20);
       }
       
       function Fetch21(){
           Fetch20()
           idFetched21 = newUnique[21]
          //  nameFinally21 = newUnique[21].name;
           // nameBoard21 = newUnique[21].username;
        
            console.log(idFetched21);
            // console.log(nameFinally21);
           //  console.log(nameBoard21);
       }
       
       function Fetch22(){
           Fetch21()
           idFetched22 = newUnique[22]
          //  nameFinally22 = newUnique[22].name;
           // nameBoard22 = newUnique[22].username;
        
            console.log(idFetched22);
            // console.log(nameFinally22);
           //  console.log(nameBoard22);
       }
       
       function Fetch23(){
           Fetch22()
           idFetched23 = newUnique[23]
          //  nameFinally23 = newUnique[23].name;
           // nameBoard23 = newUnique[23].username;
        
            console.log(idFetched23);
            // console.log(nameFinally23);
           //  console.log(nameBoard23);
       }
       
       function Fetch24(){
           Fetch23()
           idFetched24 = newUnique[24]
          //  nameFinally24 = newUnique[24].name;
           // nameBoard24 = newUnique[24].username;
        
            console.log(idFetched24);
            // console.log(nameFinally24);
           //  console.log(nameBoard24);
       }
       
       function Fetch25(){
           Fetch24()
           idFetched25 = newUnique[25]
          //  nameFinally25 = newUnique[25].name;
           // nameBoard25 = newUnique[25].username;
        
            console.log(idFetched25);
            // console.log(nameFinally25);
           //  console.log(nameBoard25);
       }
       
       function Fetch26(){
           Fetch25()
           idFetched26 = newUnique[26]
          //  nameFinally26 = newUnique[26].name;
           // nameBoard26 = newUnique[26].username;
        
            console.log(idFetched26);
            // console.log(nameFinally26);
           //  console.log(nameBoard26);
       }
       
       function Fetch27(){
           Fetch26()
           idFetched27 = newUnique[27]
          //  nameFinally27 = newUnique[27].name;
           // nameBoard27 = newUnique[27].username;
        
            console.log(idFetched27);
            // console.log(nameFinally27);
           //  console.log(nameBoard27);
       }
       
       function Fetch28(){
           Fetch27()
           idFetched28 = newUnique[28]
          //  nameFinally28 = newUnique[28].name;
           // nameBoard28 = newUnique[28].username;
        
            console.log(idFetched28);
            // console.log(nameFinally28);
           //  console.log(nameBoard28);
       }
       
       function Fetch29(){
           Fetch28()
           idFetched29 = newUnique[29]
          //  nameFinally29 = newUnique[29].name;
           // nameBoard29 = newUnique[29].username;

            console.log(idFetched29);
            // console.log(nameFinally29);
           //  console.log(nameBoard29);
       }
       
       function Fetch30(){
           Fetch29()
           idFetched30 = newUnique[30]
          //  nameFinally30 = newUnique[30].name;
           // nameBoard30 = newUnique[30].username;
        
            console.log(idFetched30);
            // console.log(nameFinally30);
           //  console.log(nameBoard30);
       }
       
       function Fetch31(){
           Fetch30()
           idFetched31 = newUnique[31]
          //  nameFinally31 = newUnique[31].name;
           // nameBoard31 = newUnique[31].username;
        
            console.log(idFetched31);
            // console.log(nameFinally31);
           //  console.log(nameBoard31);
       }
       
       function Fetch32(){
           Fetch31()
           idFetched32 = newUnique[32]
          //  nameFinally32 = newUnique[32].name;
           // nameBoard32 = newUnique[32].username;
        
            console.log(idFetched32);
            // console.log(nameFinally32);
           //  console.log(nameBoard32);
       }
       
       function Fetch33(){
           Fetch32()
           idFetched33 = newUnique[33]
          //  nameFinally33 = newUnique[33].name;
           // nameBoard33 = newUnique[33].username;
        
            console.log(idFetched33);
            // console.log(nameFinally33);
           //  console.log(nameBoard33);
       }
       
       function Fetch34(){
           Fetch33()
           idFetched34 = newUnique[34]
          //  nameFinally34 = newUnique[34].name;
           // nameBoard34 = newUnique[34].username;
        
            console.log(idFetched34);
            // console.log(nameFinally34);
           //  console.log(nameBoard34);
       }
       
       function Fetch35(){
           Fetch34()
           idFetched35 = newUnique[35]
          //  nameFinally35 = newUnique[35].name;
           // nameBoard35 = newUnique[35].username;
        
            console.log(idFetched35);
            // console.log(nameFinally35);
           //  console.log(nameBoard35);
       }
       
       function Fetch36(){
           Fetch35()
           idFetched36 = newUnique[36]
          //  nameFinally36 = newUnique[36].name;
           // nameBoard36 = newUnique[36].username;
        
            console.log(idFetched36);
            // console.log(nameFinally36);
           //  console.log(nameBoard36);
       }
       
       function Fetch37(){
           Fetch36()
           idFetched37 = newUnique[37]
          //  nameFinally37 = newUnique[37].name;
           // nameBoard37 = newUnique[37].username;
        
            console.log(idFetched37);
            // console.log(nameFinally37);
           //  console.log(nameBoard37);
       }
       
       function Fetch38(){
           Fetch37()
           idFetched38 = newUnique[38]
          //  nameFinally38 = newUnique[38].name;
           // nameBoard38 = newUnique[38].username;
        
            console.log(idFetched38);
            // console.log(nameFinally38);
           //  console.log(nameBoard38);
       }
       
       function Fetch39(){
           Fetch38()
           idFetched39 = newUnique[39]
          //  nameFinally39 = newUnique[39].name;
           // nameBoard39 = newUnique[39].username;
        
            console.log(idFetched39);
            // console.log(nameFinally39);
           //  console.log(nameBoard39);
       }
       
       function Fetch40(){
           Fetch39()
           idFetched40 = newUnique[40]
          //  nameFinally40 = newUnique[40].name;
           // nameBoard40 = newUnique[40].username;
        
            console.log(idFetched40);
            // console.log(nameFinally40);
           //  console.log(nameBoard40);
       }
       
       function Fetch41(){
           Fetch40()
           idFetched41 = newUnique[41]
          //  nameFinally41 = newUnique[41].name;
           // nameBoard41 = newUnique[41].username;
        
            console.log(idFetched41);
            // console.log(nameFinally41);
           //  console.log(nameBoard41);
       }
       
       function Fetch42(){
           Fetch41()
           idFetched42 = newUnique[42]
          //  nameFinally42 = newUnique[42].name;
           // nameBoard42 = newUnique[42].username;
        
            console.log(idFetched42);
            // console.log(nameFinally42);
           //  console.log(nameBoard42);
       }
       
       function Fetch43(){
           Fetch42()
           idFetched43 = newUnique[43]
          //  nameFinally43 = newUnique[43].name;
           // nameBoard43 = newUnique[43].username;
        
            console.log(idFetched43);
            // console.log(nameFinally43);
           //  console.log(nameBoard43);
       }
       
       function Fetch44(){
           Fetch43()
           idFetched44 = newUnique[44]
          //  nameFinally44 = newUnique[44].name;
           // nameBoard44 = newUnique[44].username;
        
            console.log(idFetched44);
            // console.log(nameFinally44);
           //  console.log(nameBoard44);
       }
       
       function Fetch45(){
           Fetch44()
           idFetched45 = newUnique[45]
          //  nameFinally45 = newUnique[45].name;
           // nameBoard45 = newUnique[45].username;
        
            console.log(idFetched45);
            // console.log(nameFinally45);
           //  console.log(nameBoard45);
       }
       
       function Fetch46(){
           Fetch45()
           idFetched46 = newUnique[46]
          //  nameFinally46 = newUnique[46].name;
           // nameBoard46 = newUnique[46].username;
        
            console.log(idFetched46);
            // console.log(nameFinally46);
           //  console.log(nameBoard46);
       }
       
       function Fetch47(){
           Fetch46()
           idFetched47 = newUnique[47]
          //  nameFinally47 = newUnique[47].name;
           // nameBoard47 = newUnique[47].username;
        
            console.log(idFetched47);
            // console.log(nameFinally47);
           //  console.log(nameBoard47);
       }
       
       function Fetch48(){
           Fetch47()
           idFetched48 = newUnique[48]
          //  nameFinally48 = newUnique[48].name;
           // nameBoard48 = newUnique[48].username;
        
            console.log(idFetched48);
            // console.log(nameFinally48);
           //  console.log(nameBoard48);
       }
       
       function Fetch49(){
           Fetch48()
           idFetched49 = newUnique[49]
          //  nameFinally49 = newUnique[49].name;
           // nameBoard49 = newUnique[49].username;
        
            console.log(idFetched49);
            // console.log(nameFinally49);
           //  console.log(nameBoard49);
       }
       
       function Fetch50(){
         Fetch49()
         idFetched50 = newUnique[50]
        //  nameFinally50 = newUnique[50].name;
         // nameBoard50 = newUnique[50].username;
      
          console.log(idFetched50);
          // console.log(nameFinally50);
         //  console.log(nameBoard50);
     }
     
     function Fetch51(){
         Fetch50()
         idFetched51 = newUnique[51]
        //  nameFinally51 = newUnique[51].name;
         // nameBoard51 = newUnique[51].username;
      
          console.log(idFetched51);
          // console.log(nameFinally51);
         //  console.log(nameBoard51);
     }
     
     function Fetch52(){
         Fetch51()
         idFetched52 = newUnique[52]
        //  nameFinally52 = newUnique[52].name;
         // nameBoard52 = newUnique[52].username;
      
          console.log(idFetched52);
          // console.log(nameFinally52);
         //  console.log(nameBoard52);
     }
     
     function Fetch53(){
         Fetch52()
         idFetched53 = newUnique[53]
        //  nameFinally53 = newUnique[53].name;
         // nameBoard53 = newUnique[53].username;
      
          console.log(idFetched53);
          // console.log(nameFinally53);
         //  console.log(nameBoard53);
     }
     
     function Fetch54(){
         Fetch53()
         idFetched54 = newUnique[54]
        //  nameFinally54 = newUnique[54].name;
         // nameBoard54 = newUnique[54].username;
      
          console.log(idFetched54);
          // console.log(nameFinally54);
         //  console.log(nameBoard54);
     }
     
     function Fetch55(){
         Fetch54()
         idFetched55 = newUnique[55]
        //  nameFinally55 = newUnique[55].name;
         // nameBoard55 = newUnique[55].username;
      
          console.log(idFetched55);
          // console.log(nameFinally55);
         //  console.log(nameBoard55);
     }
     
     function Fetch56(){
         Fetch55()
         idFetched56 = newUnique[56]
        //  nameFinally56 = newUnique[56].name;
         // nameBoard56 = newUnique[56].username;
      
          console.log(idFetched56);
          // console.log(nameFinally56);
         //  console.log(nameBoard56);
     }
     
     function Fetch57(){
         Fetch56()
         idFetched57 = newUnique[57]
        //  nameFinally57 = newUnique[57].name;
         // nameBoard57 = newUnique[57].username;
      
          console.log(idFetched57);
          // console.log(nameFinally57);
         //  console.log(nameBoard57);
     }
     
     function Fetch58(){
         Fetch57()
         idFetched58 = newUnique[58]
        //  nameFinally58 = newUnique[58].name;
         // nameBoard58 = newUnique[58].username;
      
          console.log(idFetched58);
          // console.log(nameFinally58);
         //  console.log(nameBoard58);
     }
     
     function Fetch59(){
         Fetch58()
         idFetched59 = newUnique[59]
        //  nameFinally59 = newUnique[59].name;
         // nameBoard59 = newUnique[59].username;
      
          console.log(idFetched59);
          // console.log(nameFinally59);
         //  console.log(nameBoard59);
     }


     function Fetch60(){
       Fetch59()
       idFetched60 = newUnique[60]
      //  nameFinally60 = newUnique[60].name;
       // nameBoard60 = newUnique[60].username;
    
        console.log(idFetched60);
        // console.log(nameFinally60);
       //  console.log(nameBoard60);
   }
   
   function Fetch61(){
       Fetch60()
       idFetched61 = newUnique[61]
      //  nameFinally61 = newUnique[61].name;
       // nameBoard61 = newUnique[61].username;
    
        console.log(idFetched61);
        // console.log(nameFinally61);
       //  console.log(nameBoard61);
   }
   
   function Fetch62(){
       Fetch61()
       idFetched62 = newUnique[62]
      //  nameFinally62 = newUnique[62].name;
       // nameBoard62 = newUnique[62].username;
    
        console.log(idFetched62);
        // console.log(nameFinally62);
       //  console.log(nameBoard62);
   }
   
   function Fetch63(){
       Fetch62()
       idFetched63 = newUnique[63]
      //  nameFinally63 = newUnique[63].name;
       // nameBoard63 = newUnique[63].username;
    
        console.log(idFetched63);
        // console.log(nameFinally63);
       //  console.log(nameBoard63);
   }
   
   function Fetch66(){
       Fetch63()
       idFetched66 = newUnique[66]
      //  nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(idFetched66);
        // console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch66(){
       Fetch66()
       idFetched66 = newUnique[66]
      //  nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(idFetched66);
        // console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch66(){
       Fetch66()
       idFetched66 = newUnique[66]
      //  nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(idFetched66);
        // console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch67(){
       Fetch66()
       idFetched67 = newUnique[67]
      //  nameFinally67 = newUnique[67].name;
       // nameBoard67 = newUnique[67].username;
    
        console.log(idFetched67);
        // console.log(nameFinally67);
       //  console.log(nameBoard67);
   }
   
   function Fetch68(){
       Fetch67()
       idFetched68 = newUnique[68]
      //  nameFinally68 = newUnique[68].name;
       // nameBoard68 = newUnique[68].username;
    
        console.log(idFetched68);
        // console.log(nameFinally68);
       //  console.log(nameBoard68);
   }
   
   function Fetch69(){
       Fetch68()
       idFetched69 = newUnique[69]
      //  nameFinally69 = newUnique[69].name;
       // nameBoard69 = newUnique[69].username;
    
        console.log(idFetched69);
        // console.log(nameFinally69);
       //  console.log(nameBoard69);
   }
   
   
   function Fetch70(){
     Fetch69()
     idFetched70 = newUnique[70]
    //  nameFinally70 = newUnique[70].name;
     // nameBoard70 = newUnique[70].username;
  
      console.log(idFetched70);
      // console.log(nameFinally70);
     //  console.log(nameBoard70);
 }
 
 function Fetch71(){
     Fetch70()
     idFetched71 = newUnique[71]
    //  nameFinally71 = newUnique[71].name;
     // nameBoard71 = newUnique[71].username;
  
      console.log(idFetched71);
      // console.log(nameFinally71);
     //  console.log(nameBoard71);
 }
 
 function Fetch72(){
     Fetch71()
     idFetched72 = newUnique[72]
    //  nameFinally72 = newUnique[72].name;
     // nameBoard72 = newUnique[72].username;
  
      console.log(idFetched72);
      // console.log(nameFinally72);
     //  console.log(nameBoard72);
 }
 
 function Fetch73(){
     Fetch72()
     idFetched73 = newUnique[73]
    //  nameFinally73 = newUnique[73].name;
     // nameBoard73 = newUnique[73].username;
  
      console.log(idFetched73);
      // console.log(nameFinally73);
     //  console.log(nameBoard73);
 }
 
 function Fetch77(){
     Fetch73()
     idFetched77 = newUnique[77]
    //  nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(idFetched77);
      // console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch77(){
     Fetch77()
     idFetched77 = newUnique[77]
    //  nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(idFetched77);
      // console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch76(){
     Fetch77()
     idFetched76 = newUnique[76]
    //  nameFinally76 = newUnique[76].name;
     // nameBoard76 = newUnique[76].username;
  
      console.log(idFetched76);
      // console.log(nameFinally76);
     //  console.log(nameBoard76);
 }
 
 function Fetch77(){
     Fetch76()
     idFetched77 = newUnique[77]
    //  nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(idFetched77);
      // console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch78(){
     Fetch77()
     idFetched78 = newUnique[78]
    //  nameFinally78 = newUnique[78].name;
     // nameBoard78 = newUnique[78].username;
  
      console.log(idFetched78);
      // console.log(nameFinally78);
     //  console.log(nameBoard78);
 }
 
 function Fetch79(){
     Fetch78()
     idFetched79 = newUnique[79]
    //  nameFinally79 = newUnique[79].name;
     // nameBoard79 = newUnique[79].username;
  
      console.log(idFetched79);
      // console.log(nameFinally79);
     //  console.log(nameBoard79);
 }
 
 
 function Fetch80(){
   Fetch79()
   idFetched80 = newUnique[80]
  //  nameFinally80 = newUnique[80].name;
   // nameBoard80 = newUnique[80].username;

    console.log(idFetched80);
    // console.log(nameFinally80);
   //  console.log(nameBoard80);
}

function Fetch81(){
   Fetch80()
   idFetched81 = newUnique[81]
  //  nameFinally81 = newUnique[81].name;
   // nameBoard81 = newUnique[81].username;

    console.log(idFetched81);
    // console.log(nameFinally81);
   //  console.log(nameBoard81);
}

function Fetch82(){
   Fetch81()
   idFetched82 = newUnique[82]
  //  nameFinally82 = newUnique[82].name;
   // nameBoard82 = newUnique[82].username;

    console.log(idFetched82);
    // console.log(nameFinally82);
   //  console.log(nameBoard82);
}

function Fetch83(){
   Fetch82()
   idFetched83 = newUnique[83]
  //  nameFinally83 = newUnique[83].name;
   // nameBoard83 = newUnique[83].username;

    console.log(idFetched83);
    // console.log(nameFinally83);
   //  console.log(nameBoard83);
}

function Fetch84(){
   Fetch83()
   idFetched84 = newUnique[84]
  //  nameFinally84 = newUnique[84].name;
   // nameBoard8 = newUnique[84].username;

    console.log(idFetched84);
    // console.log(nameFinally84);
   //  console.log(nameBoard84);
}

function Fetch85(){
   Fetch84()
   idFetched85 = newUnique[85]
  //  nameFinally85 = newUnique[85].name;
   // nameBoard8 = newUnique[8].username;

    console.log(idFetched85);
    // console.log(nameFinally85);
   //  console.log(nameBoard8);
}

function Fetch86(){
   Fetch85()
   idFetched86 = newUnique[86]
  //  nameFinally86 = newUnique[86].name;
   // nameBoard86 = newUnique[86].username;

    console.log(idFetched86);
    // console.log(nameFinally86);
   //  console.log(nameBoard86);
}

function Fetch87(){
   Fetch86()
   idFetched87 = newUnique[87]
  //  nameFinally87 = newUnique[87].name;
   // nameBoard87 = newUnique[87].username;

    console.log(idFetched87);
    // console.log(nameFinally87);
   //  console.log(nameBoard87);
}

function Fetch88(){
   Fetch87()
   idFetched88 = newUnique[88]
  //  nameFinally88 = newUnique[88].name;
   // nameBoard88 = newUnique[88].username;

    console.log(idFetched88);
    // console.log(nameFinally88);
   //  console.log(nameBoard88);
}

function Fetch89(){
   Fetch88()
   idFetched89 = newUnique[89]
  //  nameFinally89 = newUnique[89].name;
   // nameBoard89 = newUnique[89].username;

    console.log(idFetched89);
    // console.log(nameFinally89);
   //  console.log(nameBoard89);
}

function Fetch90(){
 Fetch89()
 idFetched90 = newUnique[90]
//  nameFinally90 = newUnique[90].name;
 // nameBoard90 = newUnique[90].username;

  console.log(idFetched90);
  // console.log(nameFinally90);
 //  console.log(nameBoard90);
}

function Fetch91(){
 Fetch90()
 idFetched91 = newUnique[91]
//  nameFinally91 = newUnique[91].name;
 // nameBoard91 = newUnique[91].username;

  console.log(idFetched91);
  // console.log(nameFinally91);
 //  console.log(nameBoard91);
}

function Fetch92(){
 Fetch91()
 idFetched92 = newUnique[92]
//  nameFinally92 = newUnique[92].name;
 // nameBoard92 = newUnique[92].username;

  console.log(idFetched92);
  // console.log(nameFinally92);
 //  console.log(nameBoard92);
}

function Fetch93(){
 Fetch92()
 idFetched93 = newUnique[93]
//  nameFinally93 = newUnique[93].name;
 // nameBoard93 = newUnique[93].username;

  console.log(idFetched93);
  // console.log(nameFinally93);
 //  console.log(nameBoard93);
}

function Fetch94(){
 Fetch93()
 idFetched94 = newUnique[94]
//  nameFinally94 = newUnique[94].name;
 // nameBoard94 = newUnique[94].username;

  console.log(idFetched94);
  // console.log(nameFinally94);
 //  console.log(nameBoard9);
}

function Fetch95(){
 Fetch94()
 idFetched95 = newUnique[95]
//  nameFinally95 = newUnique[95].name;
 // nameBoard9 = newUnique[9].username;

  console.log(idFetched95);
  // console.log(nameFinally95);
 //  console.log(nameBoard9);
}

function Fetch96(){
 Fetch95()
 idFetched96 = newUnique[96]
//  nameFinally96 = newUnique[96].name;
 // nameBoard96 = newUnique[96].username;

  console.log(idFetched96);
  // console.log(nameFinally96);
 //  console.log(nameBoard96);
}

function Fetch97(){
 Fetch96()
 idFetched97 = newUnique[97]
//  nameFinally97 = newUnique[97].name;
 // nameBoard97 = newUnique[97].username;

  console.log(idFetched97);
  // console.log(nameFinally97);
 //  console.log(nameBoard97);
}

function Fetch98(){
 Fetch97()
 idFetched98 = newUnique[98]
//  nameFinally98 = newUnique[98].name;
 // nameBoard98 = newUnique[98].username;

  console.log(idFetched98);
  // console.log(nameFinally98);
 //  console.log(nameBoard98);
}

function Fetch99(){
 Fetch98()
 idFetched99 = newUnique[99]
//  nameFinally99 = newUnique[99].name;
 // nameBoard99 = newUnique[99].username;

  console.log(idFetched99);
  // console.log(nameFinally99);
 //  console.log(nameBoard99);
}

function Fetch100(){
 Fetch99()
 idFetched100 = newUnique[100]
//  nameFinally100 = newUnique[100].name;
 // nameBoard100 = newUnique[100].username;

  console.log(idFetched100);
  // console.log(nameFinally100);
 //  console.log(nameBoard100);
}

function Fetch101(){
 Fetch100()
 idFetched101 = newUnique[101]
//  nameFinally101 = newUnique[101].name;
 // nameBoard101 = data[101].username;

  console.log(idFetched101);
  // console.log(nameFinally101);
 //  console.log(nameBoard101);
}
       
    

function selectedFetch0(){
  Fetch0();
  }
  
  function selectedFetch1(){
      selectedFetch0()
      Fetch1();}
  
  function selectedFetch2(){
      selectedFetch1()
      Fetch2();};
  
  function selectedFetch3(){
      selectedFetch2()
      Fetch3();}
  
  function selectedFetch4(){
      selectedFetch3()
      Fetch4();} 
      
  function selectedFetch5(){
      selectedFetch4()
      Fetch5();} 
  
  function selectedFetch6(){
      selectedFetch5()
      Fetch6();}
  
  function selectedFetch7(){
      selectedFetch6()
      Fetch7();}
  
  function selectedFetch8(){
      selectedFetch7()
      Fetch8();}

  function selectedFetch9(){
      selectedFetch8()
      Fetch9();}
      
function selectedFetch10(){
      selectedFetch9()
      Fetch10();}

function selectedFetch11(){
      selectedFetch10()
      Fetch11();}

function selectedFetch12(){
      selectedFetch11()
      Fetch12();}

function selectedFetch13(){
      selectedFetch12()
      Fetch13();}

function selectedFetch14(){
      selectedFetch13()
      Fetch14();}

function selectedFetch15(){
      selectedFetch14()
      Fetch15();}

function selectedFetch16(){
      selectedFetch15()
      Fetch16();}

function selectedFetch17(){
      selectedFetch16()
      Fetch17();}

function selectedFetch18(){
      selectedFetch17()
      Fetch18();}
      
function selectedFetch19(){
  selectedFetch18()
  Fetch19();}
  
function selectedFetch20(){
  selectedFetch19()
  Fetch20();}
  
function selectedFetch21(){
  selectedFetch20()
  Fetch21();}
  
function selectedFetch22(){
  selectedFetch21()
  Fetch22();}
  
function selectedFetch23(){
  selectedFetch22()
  Fetch23();}
  
function selectedFetch24(){
  selectedFetch23()
  Fetch24();}
  
function selectedFetch25(){
  selectedFetch24()
  Fetch25();}
  
function selectedFetch26(){
  selectedFetch25()
  Fetch26();}
  
function selectedFetch27(){
  selectedFetch26()
  Fetch27();}
  
function selectedFetch28(){
  selectedFetch27()
  Fetch28();}
  
function selectedFetch29(){
  selectedFetch28()
  Fetch29();}
  
function selectedFetch30(){
  selectedFetch29()
  Fetch30();}

  function selectedFetch31(){
      selectedFetch30()
      Fetch31();}
      
  function selectedFetch32(){
      selectedFetch31()
      Fetch32();}
      
  function selectedFetch33(){
      selectedFetch32()
      Fetch33();}
      
  function selectedFetch34(){
      selectedFetch33()
      Fetch34();}
      
  function selectedFetch35(){
      selectedFetch34()
      Fetch35();}
      
  function selectedFetch36(){
      selectedFetch35()
      Fetch36();}
      
  function selectedFetch37(){
      selectedFetch36()
      Fetch37();}
      
  function selectedFetch38(){
      selectedFetch37()
      Fetch38();}
      
  function selectedFetch39(){
      selectedFetch38()
      Fetch39();}
      
  function selectedFetch40(){
      selectedFetch39()
      Fetch40();}

  function selectedFetch41(){
  selectedFetch40()
  Fetch41();}
  
function selectedFetch42(){
  selectedFetch41()
  Fetch42();}
  
function selectedFetch43(){
  selectedFetch42()
  Fetch43();}
  
function selectedFetch44(){
  selectedFetch43()
  Fetch44();}
  
function selectedFetch45(){
  selectedFetch44()
  Fetch45();}
  
function selectedFetch46(){
  selectedFetch45()
  Fetch46();}
  
function selectedFetch47(){
  selectedFetch46()
  Fetch47();}
  
function selectedFetch48(){
  selectedFetch47()
  Fetch48();}
  
function selectedFetch49(){
  selectedFetch48()
  Fetch49();}
  
function selectedFetch50(){
  selectedFetch49()
  Fetch50();}

  function selectedFetch51(){
      selectedFetch50()
      Fetch51();}
      
  function selectedFetch52(){
      selectedFetch51()
      Fetch52();}
      
  function selectedFetch53(){
      selectedFetch52()
      Fetch53();}
      
  function selectedFetch54(){
      selectedFetch53()
      Fetch54();}
      
  function selectedFetch55(){
      selectedFetch54()
      Fetch55();}
      
  function selectedFetch56(){
      selectedFetch55()
      Fetch56();}
      
  function selectedFetch57(){
      selectedFetch56()
      Fetch57();}
      
  function selectedFetch58(){
      selectedFetch57()
      Fetch58();}
      
  function selectedFetch59(){
      selectedFetch58()
      Fetch59();}
      
  function selectedFetch60(){
      selectedFetch59()
      Fetch60();}

function selectedFetch61(){
  selectedFetch60()
  Fetch61();}
  
function selectedFetch62(){
  selectedFetch61()
  Fetch62();}
  
function selectedFetch63(){
  selectedFetch62()
  Fetch63();}
  
function selectedFetch64(){
  selectedFetch63()
  Fetch64();}
  
function selectedFetch65(){
  selectedFetch64()
  Fetch65();}
  
function selectedFetch66(){
  selectedFetch65()
  Fetch66();}
  
function selectedFetch67(){
  selectedFetch66()
  Fetch67();}
  
function selectedFetch68(){
  selectedFetch67()
  Fetch68();}
  
function selectedFetch69(){
  selectedFetch68()
  Fetch69();}
  
function selectedFetch70(){
  selectedFetch69()
  Fetch70();}

function selectedFetch71(){
  selectedFetch70()
  Fetch71();}
  
function selectedFetch72(){
  selectedFetch71()
  Fetch72();}
  
function selectedFetch73(){
  selectedFetch72()
  Fetch73();}
  
function selectedFetch74(){
  selectedFetch73()
  Fetch74();}
  
function selectedFetch75(){
  selectedFetch74()
  Fetch75();}
  
function selectedFetch76(){
  selectedFetch75()
  Fetch76();}
  
function selectedFetch77(){
  selectedFetch76()
  Fetch77();}
  
function selectedFetch78(){
  selectedFetch77()
  Fetch78();}
  
function selectedFetch79(){
  selectedFetch78()
  Fetch79();}
  
function selectedFetch80(){
  selectedFetch79()
  Fetch80();}

function selectedFetch81(){
  selectedFetch80()
  Fetch81();}
  
function selectedFetch82(){
  selectedFetch81()
  Fetch82();}
  
function selectedFetch83(){
  selectedFetch82()
  Fetch83();}
  
function selectedFetch84(){
  selectedFetch83()
  Fetch84();}
  
function selectedFetch85(){
  selectedFetch84()
  Fetch85();}
  
function selectedFetch86(){
  selectedFetch85()
  Fetch86();}
  
function selectedFetch87(){
  selectedFetch86()
  Fetch87();}
  
function selectedFetch88(){
  selectedFetch87()
  Fetch88();}
  
function selectedFetch89(){
  selectedFetch88()
  Fetch89();}
  
function selectedFetch90(){
  selectedFetch89()
  Fetch90();}
  
function selectedFetch91(){
  selectedFetch90()
  Fetch91();}
  
function selectedFetch92(){
  selectedFetch91()
  Fetch92();}
  
function selectedFetch93(){
  selectedFetch92()
  Fetch93();}
  
function selectedFetch94(){
  selectedFetch93()
  Fetch94();}
  
function selectedFetch95(){
  selectedFetch94()
  Fetch95();}
  
function selectedFetch96(){
  selectedFetch95()
  Fetch96();}
  
function selectedFetch97(){
  selectedFetch96()
  Fetch97();}
  
function selectedFetch98(){
  selectedFetch97()
  Fetch98();}
  
function selectedFetch99(){
  selectedFetch98()
  Fetch99();}
  
function selectedFetch100(){
  selectedFetch99()
  Fetch100();};

//Selecting how many workspace Ids to fetch based on lenght of the Newunique array data lenght//
function FinalCheckingId () {

if (newUniqueLenght==0){
  selectedFetch0 () }

 else if (newUniqueLenght==1){
    selectedFetch1 () }

else if (newUniqueLenght==2){
    selectedFetch2 () }

else if (newUniqueLenght==3){
    selectedFetch3 () }

else if (newUniqueLenght==3){
    selectedFetch3 () }
 
else if (newUniqueLenght==4){
    selectedFetch4 () }

else if (newUniqueLenght==5){
    selectedFetch5 () }
 
else if (newUniqueLenght==6){
    selectedFetch6 () }

else if (newUniqueLenght==7){
    selectedFetch7 () }
 
else if (newUniqueLenght==8){
    selectedFetch8 () }
 
else if (newUniqueLenght==9){
    selectedFetch9 () }

else if (newUniqueLenght==10){
    selectedFetch10 () }

 else if (newUniqueLenght==11){
  selectedFetch11 ()
 } 

 else if (newUniqueLenght==12){
  selectedFetch12 ()
 } 

 else if (newUniqueLenght==13){
  selectedFetch13 ()
 } 

 else if (newUniqueLenght==14){
  selectedFetch14 ()
 } 

 else if (newUniqueLenght==15){
  selectedFetch15 ()
 } 

 else if (newUniqueLenght==16){
  selectedFetch16 ()
 } 

 else if (newUniqueLenght==17){
  selectedFetch17 ()
 } 

 else if (newUniqueLenght==18){
  selectedFetch18 ()
 } 

 else if (newUniqueLenght==19){
  selectedFetch19 ()
 } 

 else if (newUniqueLenght==20){
  selectedFetch20 ()
 } 


 else if (newUniqueLenght==21){
  selectedFetch21 ()
 } 

 else if (newUniqueLenght==22){
  selectedFetch22 ()
 } 

 else if (newUniqueLenght==23){
  selectedFetch23 ()
 } 

 else if (newUniqueLenght==24){
  selectedFetch24 ()
 } 

 else if (newUniqueLenght==25){
  selectedFetch25 ()
 } 

 else if (newUniqueLenght==26){
  selectedFetch26 ()
 } 

 else if (newUniqueLenght==27){
  selectedFetch27 ()
 } 

 else if (newUniqueLenght==28){
  selectedFetch28 ()
 } 

 else if (newUniqueLenght==29){
  selectedFetch29 ()
 } 


 else if (newUniqueLenght==30){
  selectedFetch30 ()
 } 

 else if (newUniqueLenght==31){
  selectedFetch31 ()
 } 

 else if (newUniqueLenght==32){
  selectedFetch32 ()
 } 

 else if (newUniqueLenght==33){
  selectedFetch33 ()
 } 

 else if (newUniqueLenght==34){
  selectedFetch34 ()
 } 

 else if (newUniqueLenght==35){
  selectedFetch35 ()
 } 

 else if (newUniqueLenght==36){
  selectedFetch36 ()
 } 

 else if (newUniqueLenght==37){
  selectedFetch37 ()
 } 

 else if (newUniqueLenght==38){
  selectedFetch38 ()
 } 

 else if (newUniqueLenght==39){
  selectedFetch39 ()
 } 

 else if (newUniqueLenght==40){
  selectedFetch40 ()
 } 

 else if (newUniqueLenght==41){
  selectedFetch41 ()
 } 

 else if (newUniqueLenght==42){
  selectedFetch42 ()
 } 

 else if (newUniqueLenght==43){
  selectedFetch43 ()
 } 

 else if (newUniqueLenght==44){
  selectedFetch44 ()
 } 

 else if (newUniqueLenght==45){
  selectedFetch45 ()
 } 

 else if (newUniqueLenght==46){
  selectedFetch46 ()
 } 

 else if (newUniqueLenght==47){
  selectedFetch47 ()
 } 

 else if (newUniqueLenght==48){
  selectedFetch48 ()
 } 

 else if (newUniqueLenght==49){
  selectedFetch49 ()
 } 


 else if (newUniqueLenght==50){
  selectedFetch50 ()
 } 

 else if (newUniqueLenght==51){
  selectedFetch51 ()
 } 

 else if (newUniqueLenght==52){
  selectedFetch52 ()
 } 

 else if (newUniqueLenght==53){
  selectedFetch53 ()
 } 

 else if (newUniqueLenght==54){
  selectedFetch54 ()
 } 

 else if (newUniqueLenght==55){
  selectedFetch55 ()
 } 

 else if (newUniqueLenght==56){
  selectedFetch56 ()
 } 

 else if (newUniqueLenght==57){
  selectedFetch57 ()
 } 

 else if (newUniqueLenght==58){
  selectedFetch58 ()
 } 

 else if (newUniqueLenght==59){
  selectedFetch59 ()
 } 


 else if (newUniqueLenght==60){
  selectedFetch60 ()
 } 

 else if (newUniqueLenght==61){
  selectedFetch61 ()
 } 

 else if (newUniqueLenght==62){
  selectedFetch62 ()
 } 

 else if (newUniqueLenght==63){
  selectedFetch63 ()
 } 

 else if (newUniqueLenght==64){
  selectedFetch64 ()
 } 

 else if (newUniqueLenght==65){
  selectedFetch65 ()
 } 

 else if (newUniqueLenght==66){
  selectedFetch66 ()
 } 

 else if (newUniqueLenght==67){
  selectedFetch67 ()
 } 

 else if (newUniqueLenght==68){
  selectedFetch68 ()
 } 

 else if (newUniqueLenght==69){
  selectedFetch69 ()
 } 

 else if (newUniqueLenght==70){
  selectedFetch70 ()
 } 

 else if (newUniqueLenght==71){
  selectedFetch71 ()
 } 

 else if (newUniqueLenght==72){
  selectedFetch72 ()
 } 

 else if (newUniqueLenght==73){
  selectedFetch73 ()
 } 

 else if (newUniqueLenght==74){
  selectedFetch74 ()
 } 

 else if (newUniqueLenght==75){
  selectedFetch75 ()
 } 

 else if (newUniqueLenght==76){
  selectedFetch76 ()
 } 

 else if (newUniqueLenght==77){
  selectedFetch77 ()
 } 

 else if (newUniqueLenght==78){
  selectedFetch78 ()
 } 

 else if (newUniqueLenght==79){
  selectedFetch79 ()
 } 

 else if (newUniqueLenght==80){
  selectedFetch80 ()
 } 

 else if (newUniqueLenght==81){
  selectedFetch81 ()
 } 

 else if (newUniqueLenght==82){
  selectedFetch82 ()
 } 

 else if (newUniqueLenght==83){
  selectedFetch83 ()
 } 

 else if (newUniqueLenght==84){
  selectedFetch84 ()
 } 

 else if (newUniqueLenght==85){
  selectedFetch85 ()
 } 

 else if (newUniqueLenght==86){
  selectedFetch86 ()
 } 

 else if (newUniqueLenght==87){
  selectedFetch87 ()
 } 

 else if (newUniqueLenght==88){
  selectedFetch88 ()
 } 

 else if (newUniqueLenght==89){
  selectedFetch89 ()
 } 

 else if (newUniqueLenght==90){
  selectedFetch90 ()
 } 

 else if (newUniqueLenght==91){
  selectedFetch91 ()
 } 

 else if (newUniqueLenght==92){
  selectedFetch92 ()
 } 

 else if (newUniqueLenght==93){
  selectedFetch93 ()
 } 

 else if (newUniqueLenght==94){
  selectedFetch94 ()
 } 

 else if (newUniqueLenght==95){
  selectedFetch95 ()
 } 

 else if (newUniqueLenght==96){
  selectedFetch96 ()
 } 

 else if (newUniqueLenght==97){
  selectedFetch97 ()
 } 

 else if (newUniqueLenght==98){
  selectedFetch98 ()
 } 

 else if (newUniqueLenght==99){
  selectedFetch99 ()
 } 

 else if (newUniqueLenght==100){
  selectedFetch100 ()
 
} 

}
//dispaying the workspaces on html page after 4 seconds//
            setTimeout(() => {

              setTimeout(() => {
                organizationDisplay ()

               setTimeout(() => {
                sortingWorkspace ();

               }, 4000);
              }, 10);
             
            }, 0);

            showChecked();
        
}
fetchworkspace0().catch(error=>{
  
    console.log(error)
  })
};


// Functions for fetching the name of the organizations/workspaces and sorting the alpahbetically using the fetched orgainization Ids from above//

function Add0 () {

  async function addWorkspace0(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched0}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data0 = await response.json()
    organizationSorting.push(data0);
    organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data0
  }
      addWorkspace0().catch(error=>{
        
          console.log(error)
        })}


function Add1 () {

  async function addWorkspace1(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched1}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data1 = await response.json()
    organizationSorting.push(data1)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data1
  }
      addWorkspace1().catch(error=>{
        
          console.log(error)
        })}



function Add2 () {

    async function addWorkspace2(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched2}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data2 = await response.json();
      organizationSorting.push(data2)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data2
    }
        addWorkspace2().catch(error=>{
          
            console.log(error)
          })}

          
function Add3 () {

  async function addWorkspace3(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched3}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data3 = await response.json();
    organizationSorting.push(data3)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data3
  }
      addWorkspace3().catch(error=>{
        
          console.log(error)
        })}


function Add4 () {

  async function addWorkspace4(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched4}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data4 = await response.json();
    organizationSorting.push(data4)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data4
  }
      addWorkspace4().catch(error=>{
        
          console.log(error)
        })}


function Add5 () {

    async function addWorkspace5(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched5}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data5 = await response.json()
      organizationSorting.push(data5)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data5
    }
        addWorkspace5().catch(error=>{
          
            console.log(error)
          })}
  
  
function Add6 () {

  async function addWorkspace6(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched6}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data6 = await response.json();
    organizationSorting.push(data6)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data6
  }
      addWorkspace6().catch(error=>{
        
          console.log(error)
        })}


function Add7 () {

    async function addWorkspace7(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched7}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data7 = await response.json();
      organizationSorting.push(data7)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data7
    }
        addWorkspace7().catch(error=>{
          
            console.log(error)
          })}
  
  
function Add8 () {

  async function addWorkspace8(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched8}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data8 = await response.json();
    organizationSorting.push(data8)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data8
  }
      addWorkspace8().catch(error=>{
        
          console.log(error)
        })}

function Add9 () {

    async function addWorkspace9(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched9}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data9 = await response.json();
      organizationSorting.push(data9)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data9
    }
        addWorkspace9().catch(error=>{
          
            console.log(error)
          })}
  
function Add10 () {

  async function addWorkspace10(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched10}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data10 = await response.json()
    organizationSorting.push(data10)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
  
    return data10
  }
      addWorkspace10().catch(error=>{
        
          console.log(error)
        })}


function Add11 () {

    async function addWorkspace11(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched11}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data11 = await response.json();
      organizationSorting.push(data11)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data11
    }
        addWorkspace11().catch(error=>{
          
            console.log(error)
          })}
  
function Add12 () {

  async function addWorkspace12(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched12}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data12 = await response.json();
    organizationSorting.push(data12)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data12
  }
      addWorkspace12().catch(error=>{
        
          console.log(error)
        })}


function Add13 () {

    async function addWorkspace13(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched13}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data13 = await response.json();
      organizationSorting.push(data13)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data13
    }
        addWorkspace13().catch(error=>{
          
            console.log(error)
          })};
  
  
function Add14 () {

  async function addWorkspace14(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched14}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data14 = await response.json()
    organizationSorting.push(data14)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
    return data14
  }
      addWorkspace14().catch(error=>{
        
          console.log(error)
        })}


function Add15 () {

    async function addWorkspace15(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched15}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data15 = await response.json();
      organizationSorting.push(data15)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data15
    }
        addWorkspace15().catch(error=>{
          
            console.log(error)
          })}


function Add16 () {

  async function addWorkspace16(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched16}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data16 = await response.json();
      organizationSorting.push(data16)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data16
    }
        addWorkspace16().catch(error=>{
          
            console.log(error)
          })}

        

function Add17 () {

  async function addWorkspace17(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched17}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data17 = await response.json();
    organizationSorting.push(data17)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data17
  }
      addWorkspace17().catch(error=>{
        
          console.log(error)
        })}
        

function Add18 () {

  async function addWorkspace18(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched18}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data18 = await response.json();
    organizationSorting.push(data18)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data18
  }
      addWorkspace18().catch(error=>{
        
          console.log(error)
        })}
        

function Add19 () {

  async function addWorkspace19(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched19}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data19 = await response.json();
    organizationSorting.push(data19)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data19
  }
      addWorkspace19().catch(error=>{
        
          console.log(error)
        })}
        

function Add20 () {

  async function addWorkspace20(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched20}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data20 = await response.json();
    organizationSorting.push(data20)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data20
  }
      addWorkspace20().catch(error=>{
        
          console.log(error)
        })}

        

function Add21 () {

  async function addWorkspace21(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched21}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data21 = await response.json();
    organizationSorting.push(data21)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data21
  }
      addWorkspace21().catch(error=>{
        
          console.log(error)
        })}
        

function Add22 () {

  async function addWorkspace22(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched22}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data22 = await response.json();
    organizationSorting.push(data22)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data22
  }
      addWorkspace22().catch(error=>{
        
          console.log(error)
        })}
        

function Add23 () {

  async function addWorkspace23(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched23}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data23 = await response.json();
    organizationSorting.push(data23)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data23
  }
      addWorkspace23().catch(error=>{
        
          console.log(error)
        })}
        

function Add24 () {

  async function addWorkspace24(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched24}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data24 = await response.json();
    organizationSorting.push(data24)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data24
  }
      addWorkspace24().catch(error=>{
        
          console.log(error)
        })}
        

function Add25 () {

  async function addWorkspace25(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched25}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data25 = await response.json();
    organizationSorting.push(data25)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data25
  }
      addWorkspace25().catch(error=>{
        
          console.log(error)
        })}
        

function Add26 () {

  async function addWorkspace26(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched26}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data26 = await response.json();
    organizationSorting.push(data26)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data26
  }
      addWorkspace26().catch(error=>{
        
          console.log(error)
        })}
        

function Add27 () {

  async function addWorkspace27(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched27}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data27 = await response.json();
    organizationSorting.push(data27)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data27
  }
      addWorkspace27().catch(error=>{
        
          console.log(error)
        })}


function Add28 () {

  async function addWorkspace28(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched28}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data28 = await response.json();
    organizationSorting.push(data28)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data28
  }
      addWorkspace28().catch(error=>{
        
          console.log(error)
        })}


function Add29 () {

  async function addWorkspace29(){

    const response = await fetch(`https://api.trello.com/1/organizations/${idFetched29}?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data29 = await response.json();
    organizationSorting.push(data29)
      organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.log(organizationSorted)
    return data29
  }
      addWorkspace29().catch(error=>{
        
          console.log(error)
        })}


        function Add30 () {

    async function addWorkspace30(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched30}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data30 = await response.json();
      organizationSorting.push(data30)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data30
    }
        addWorkspace30().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add31 () {
  
    async function addWorkspace31(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched31}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data31 = await response.json();
      organizationSorting.push(data31)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data31
    }
        addWorkspace31().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add32 () {
  
    async function addWorkspace32(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched32}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data32 = await response.json();
      organizationSorting.push(data32)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data32
    }
        addWorkspace32().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add33 () {
  
    async function addWorkspace33(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched33}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data33 = await response.json();
      organizationSorting.push(data33)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data33
    }
        addWorkspace33().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add34 () {
  
    async function addWorkspace34(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched34}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data34 = await response.json();
      organizationSorting.push(data34)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data34
    }
        addWorkspace34().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add35 () {
  
    async function addWorkspace35(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched35}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data35 = await response.json();
      organizationSorting.push(data35)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data35
    }
        addWorkspace35().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add36 () {
  
    async function addWorkspace36(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched36}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data36 = await response.json();
      organizationSorting.push(data36)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data36
    }
        addWorkspace36().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add37 () {
  
    async function addWorkspace37(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched37}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data37 = await response.json();
      organizationSorting.push(data37)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data37
    }
        addWorkspace37().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add38 () {
  
    async function addWorkspace38(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched38}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data38 = await response.json();
      organizationSorting.push(data38)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data38
    }
        addWorkspace38().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add39 () {
  
    async function addWorkspace39(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched39}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data39 = await response.json();
      organizationSorting.push(data39)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data39
    }
        addWorkspace39().catch(error=>{
          
            console.log(error)
          })}
  function Add40 () {

    async function addWorkspace40(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched40}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data40 = await response.json();
      organizationSorting.push(data40)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data40
    }
        addWorkspace40().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add41 () {
  
    async function addWorkspace41(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched41}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data41 = await response.json();
      organizationSorting.push(data41)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data41
    }
        addWorkspace41().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add42 () {
  
    async function addWorkspace42(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched42}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data42 = await response.json();
      organizationSorting.push(data42)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data42
    }
        addWorkspace42().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add43 () {
  
    async function addWorkspace43(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched43}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data43 = await response.json();
      organizationSorting.push(data43)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data43
    }
        addWorkspace43().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add44 () {
  
    async function addWorkspace44(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched44}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data44 = await response.json();
      organizationSorting.push(data44)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data44
    }
        addWorkspace44().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add45 () {
  
    async function addWorkspace45(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched45}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data45 = await response.json();
      organizationSorting.push(data45)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data45
    }
        addWorkspace45().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add46 () {
  
    async function addWorkspace46(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched46}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data46 = await response.json();
      organizationSorting.push(data46)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data46
    }
        addWorkspace46().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add47 () {
  
    async function addWorkspace47(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched47}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data47 = await response.json();
      organizationSorting.push(data47)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data47
    }
        addWorkspace47().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add48 () {
  
    async function addWorkspace48(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched48}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data48 = await response.json();
      organizationSorting.push(data48)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data48
    }
        addWorkspace48().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add49 () {
  
    async function addWorkspace49(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched49}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data49 = await response.json();
      organizationSorting.push(data49)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data49
    }
        addWorkspace49().catch(error=>{
          
            console.log(error)
          })}
          function Add50 () {

    async function addWorkspace50(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched50}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data50 = await response.json();
      organizationSorting.push(data50)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data50
    }
        addWorkspace50().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add51 () {
  
    async function addWorkspace51(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched51}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data51 = await response.json();
      organizationSorting.push(data51)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data51
    }
        addWorkspace51().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add52 () {
  
    async function addWorkspace52(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched52}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data52 = await response.json();
      organizationSorting.push(data52)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data52
    }
        addWorkspace52().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add53 () {
  
    async function addWorkspace53(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched53}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data53 = await response.json();
      organizationSorting.push(data53)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data53
    }
        addWorkspace53().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add54 () {
  
    async function addWorkspace54(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched54}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data54 = await response.json();
      organizationSorting.push(data54)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data54
    }
        addWorkspace54().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add55 () {
  
    async function addWorkspace55(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched55}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data55 = await response.json();
      organizationSorting.push(data55)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data55
    }
        addWorkspace55().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add56 () {
  
    async function addWorkspace56(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched56}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data56 = await response.json();
      organizationSorting.push(data56)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data56
    }
        addWorkspace56().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add57 () {
  
    async function addWorkspace57(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched57}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data57 = await response.json();
      organizationSorting.push(data57)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data57
    }
        addWorkspace57().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add58 () {
  
    async function addWorkspace58(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched58}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data58 = await response.json();
      organizationSorting.push(data58)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data58
    }
        addWorkspace58().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add59 () {
  
    async function addWorkspace59(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched59}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data59 = await response.json();
      organizationSorting.push(data59)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data59
    }
        addWorkspace59().catch(error=>{
          
            console.log(error)
          })}

          function Add60 () {

    async function addWorkspace60(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched60}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data60 = await response.json();
      organizationSorting.push(data60)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data60
    }
        addWorkspace60().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add61 () {
  
    async function addWorkspace61(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched61}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data61 = await response.json();
      organizationSorting.push(data61)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data61
    }
        addWorkspace61().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add62 () {
  
    async function addWorkspace62(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched62}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data62 = await response.json();
      organizationSorting.push(data62)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data62
    }
        addWorkspace62().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add63 () {
  
    async function addWorkspace63(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched63}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data63 = await response.json();
      organizationSorting.push(data63)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data63
    }
        addWorkspace63().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add64 () {
  
    async function addWorkspace64(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched64}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data64 = await response.json();
      organizationSorting.push(data64)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data64
    }
        addWorkspace64().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add65 () {
  
    async function addWorkspace65(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched65}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data65 = await response.json();
      organizationSorting.push(data65)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data65
    }
        addWorkspace65().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add66 () {
  
    async function addWorkspace66(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched66}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data66 = await response.json();
      organizationSorting.push(data66)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data66
    }
        addWorkspace66().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add67 () {
  
    async function addWorkspace67(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched67}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data67 = await response.json();
      organizationSorting.push(data67)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data67
    }
        addWorkspace67().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add68 () {
  
    async function addWorkspace68(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched68}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data68 = await response.json();
      organizationSorting.push(data68)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data68
    }
        addWorkspace68().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add69 () {
  
    async function addWorkspace69(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched69}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data69 = await response.json();
      organizationSorting.push(data69)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data69
    }
        addWorkspace69().catch(error=>{
          
            console.log(error)
          })}

          function Add70 () {

    async function addWorkspace70(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched70}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data70 = await response.json();
      organizationSorting.push(data70)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data70
    }
        addWorkspace70().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add71 () {
  
    async function addWorkspace71(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched71}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data71 = await response.json();
      organizationSorting.push(data71)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data71
    }
        addWorkspace71().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add72 () {
  
    async function addWorkspace72(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched72}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data72 = await response.json();
      organizationSorting.push(data72)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data72
    }
        addWorkspace72().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add73 () {
  
    async function addWorkspace73(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched73}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data73 = await response.json();
      organizationSorting.push(data73)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data73
    }
        addWorkspace73().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add74 () {
  
    async function addWorkspace74(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched74}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data74 = await response.json();
      organizationSorting.push(data74)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data74
    }
        addWorkspace74().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add75 () {
  
    async function addWorkspace75(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched75}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data75 = await response.json();
      organizationSorting.push(data75)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data75
    }
        addWorkspace75().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add76 () {
  
    async function addWorkspace76(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched76}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data76 = await response.json();
      organizationSorting.push(data76)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data76
    }
        addWorkspace76().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add77 () {
  
    async function addWorkspace77(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched77}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data77 = await response.json();
      organizationSorting.push(data77)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data77
    }
        addWorkspace77().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add78 () {
  
    async function addWorkspace78(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched78}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data78 = await response.json();
      organizationSorting.push(data78)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data78
    }
        addWorkspace78().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add79 () {
  
    async function addWorkspace79(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched79}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data79 = await response.json();
      organizationSorting.push(data79)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data79
    }
        addWorkspace79().catch(error=>{
          
            console.log(error)
          })}

          function Add80 () {

    async function addWorkspace80(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched80}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data80 = await response.json();
      organizationSorting.push(data80)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data80
    }
        addWorkspace80().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add81 () {
  
    async function addWorkspace81(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched81}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data81 = await response.json();
      organizationSorting.push(data81)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data81
    }
        addWorkspace81().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add82 () {
  
    async function addWorkspace82(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched82}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data82 = await response.json();
      organizationSorting.push(data82)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data82
    }
        addWorkspace82().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add83 () {
  
    async function addWorkspace83(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched83}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data83 = await response.json();
      organizationSorting.push(data83)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data83
    }
        addWorkspace83().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add84 () {
  
    async function addWorkspace84(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched84}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data84 = await response.json();
      organizationSorting.push(data84)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data84
    }
        addWorkspace84().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add85 () {
  
    async function addWorkspace85(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched85}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data85 = await response.json();
      organizationSorting.push(data85)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data85
    }
        addWorkspace85().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add86 () {
  
    async function addWorkspace86(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched86}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data86 = await response.json();
      organizationSorting.push(data86)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data86
    }
        addWorkspace86().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add87 () {
  
    async function addWorkspace87(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched87}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data87 = await response.json();
      organizationSorting.push(data87)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data87
    }
        addWorkspace87().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add88 () {
  
    async function addWorkspace88(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched88}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data88 = await response.json();
      organizationSorting.push(data88)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data88
    }
        addWorkspace88().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add89 () {
  
    async function addWorkspace89(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched89}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data89 = await response.json();
      organizationSorting.push(data89)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data89
    }
        addWorkspace89().catch(error=>{
          
            console.log(error)
          })}

          function Add90 () {

    async function addWorkspace90(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched90}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data90 = await response.json();
      organizationSorting.push(data90)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data90
    }
        addWorkspace90().catch(error=>{
          
            console.log(error)
          })}
  
          
  
  function Add91 () {
  
    async function addWorkspace91(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched91}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data91 = await response.json();
      organizationSorting.push(data91)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data91
    }
        addWorkspace91().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add92 () {
  
    async function addWorkspace92(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched92}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data92 = await response.json();
      organizationSorting.push(data92)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data92
    }
        addWorkspace92().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add93 () {
  
    async function addWorkspace93(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched93}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data93 = await response.json();
      organizationSorting.push(data93)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data93
    }
        addWorkspace93().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add94 () {
  
    async function addWorkspace94(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched94}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data94 = await response.json();
      organizationSorting.push(data94)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data94
    }
        addWorkspace94().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add95 () {
  
    async function addWorkspace95(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched95}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data95 = await response.json();
      organizationSorting.push(data95)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data95
    }
        addWorkspace95().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add96 () {
  
    async function addWorkspace96(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched96}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data96 = await response.json();
      organizationSorting.push(data96)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data96
    }
        addWorkspace96().catch(error=>{
          
            console.log(error)
          })}
          
  
  function Add97 () {
  
    async function addWorkspace97(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched97}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data97 = await response.json();
      organizationSorting.push(data97)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data97
    }
        addWorkspace97().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add98 () {
  
    async function addWorkspace98(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched98}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data98 = await response.json();
      organizationSorting.push(data98)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data98
    }
        addWorkspace98().catch(error=>{
          
            console.log(error)
          })}
  
  
  function Add99 () {
  
    async function addWorkspace99(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched99}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data99 = await response.json();
      organizationSorting.push(data99)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data99
    }
        addWorkspace99().catch(error=>{
          
            console.log(error)
          })}
  
     function Add100 () {
  
    async function addWorkspace100(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${idFetched100}?&key=${apiKey}&token=${apiToken}`,
       {
        method: 'GET'
       
       }
      )
         
      const data100 = await response.json();
      organizationSorting.push(data100)
        organizationSorted = organizationSorting.sort((a, b) => a.displayName.localeCompare(b.displayName));
    console.log(organizationSorted)
      return data100
    }
        addWorkspace100().catch(error=>{
          
            console.log(error)
          })}

//function for displaying what is happening as the progress bar starts moving//
function displayBoardFetched (){

   fetchingBoardsEl.innerHTML =`Deleting Member from ${document.querySelectorAll("input:checked").length} Workspaces... `
   emailEmptyErr.innerHTML =''
   emailEmptyErr2.innerHTML =''
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''
   addmailEl.innerHTML =''
   addmailEl2.innerHTML ='' 
   successEl.innerHTML = `` 
   HideDeleteButton();
}

function showMemeberNotFound (){


  setTimeout(() => {

    fetchingBoardsEl.innerHTML =`Member Not Found in Workspaces! `
  emailEmptyErr.innerHTML =''
  emailEmptyErr2.innerHTML =''
  serviceErrorEl.innerHTML = ''
  serviceErrorEl2.innerHTML =''
  sendingProgressEl2.innerHTML =''
  sendingProgressEl.innerHTML =''
  addmailEl.innerHTML =''
  addmailEl2.innerHTML ='' 
cancelnoBar()
okayBar()

  }, 7500);

 
 }

function errorMessage(){

    if (errorMes2 == null || errorMes ==null){
        fetchingBoardsEl.innerHTML =''
        addmailEl.innerHTML = ''
        addmailEl2.innerHTML = ''
        emailEmptyErr.innerHTML =''
        emailEmptyErr2.innerHTML =''
        serviceErrorEl.innerHTML = ''
        serviceErrorEl2.innerHTML =''
        sendingProgressEl2.innerHTML =''
        sendingProgressEl.innerHTML =''
       
    }
    
    else{
        showProgressBar()
        showContentswhenLoading () 

    emailEmptyErr.innerHTML =''
  emailEmptyErr2.innerHTML =''
  serviceErrorEl.innerHTML = ''
  serviceErrorEl2.innerHTML =''
  sendingProgressEl2.innerHTML =''
  sendingProgressEl.innerHTML =''
  fetchingBoardsEl.innerHTML =''

 reloading()}
}

function reloading(){

window.location.reload();
return false
}

function successMess (){
  displayBoardFetched()
  
 setTimeout(() => {

  setInterval(() => {
    cancelnoBar()
    okayBar()
  inviscibleWrongMessage ()
  emailEmptyErr.innerHTML =''
  emailEmptyErr2.innerHTML =''
  serviceErrorEl.innerHTML = ''
  serviceErrorEl2.innerHTML =''
  sendingProgressEl2.innerHTML =''
  addmailEl.innerHTML =''
  addmailEl2.innerHTML ='' 
 sendingProgressEl.innerHTML = `Member Removal Completed `
  }, 0);
  

 },  6000);

  
}


let localStorageErrorMes= JSON.parse (localStorage.getItem("error2"));


if (localStorageErrorMes ){

    window.onload = ''

        fetchingBoardsEl.innerHTML =``
    emailEmptyErr.innerHTML =''
    emailEmptyErr2.innerHTML =''
    serviceErrorEl.innerHTML = ''
    serviceErrorEl2.innerHTML =''
    sendingProgressEl2.innerHTML =''
    sendingProgressEl.innerHTML ='' 
    addmailEl2.innerHTML =`Refresh and Retry`
    successEl.innerHTML =  '' 
    serviceErrorEl.innerHTML = ''
 serviceErrorEl2.innerHTML = ''
    addmailEl.innerHTML  = `Invalid email address`

  inviscibleAdmail();
   
};


window.onunhandledrejection = event => {

    bmNetwork = `Refresh and Retry`
   bmNet = `Network was Interrupted`
    serviceErrorEl.innerHTML =`Network was Interrupted`;
    serviceErrorEl2.innerHTML=  `Refresh and Retry`
    fetchingBoardsEl.innerHTML = ''
    emailEmptyErr.innerHTML =''
    emailEmptyErr2.innerHTML =''
    successEl.innerHTML = ''
    sendingProgressEl.innerHTML =''
    sendingProgressEl2.innerHTML =''


    localStorage.setItem("bmnet1", JSON.stringify(bmNet))
    
    localStorage.setItem("bmnet2", JSON.stringify(bmNetwork))

   reloading()

   RefreshButtonShow();
  
  };
  
  window.onerror = function(message, source, lineNumber, colno, error) {
    console.warn(`UNHANDLED ERROR: ${error.stack}`);
  };

  let bmNetwork; let bmNet

  let localbmNet1 = JSON.parse(localStorage.getItem("bmnet1"))
  let localbmNet2 = JSON.parse(localStorage.getItem("bmnet2"))

  if (localbmNet1){

    showProgressBar()
    showContentswhenLoading () 
    window.onload = '';
        serviceErrorEl.innerHTML =`Network was Interrupted`;
        serviceErrorEl2.innerHTML=  `Refresh and Retry`
        fetchingBoardsEl.innerHTML = ''
        emailEmptyErr.innerHTML =''
        emailEmptyErr2.innerHTML =''
        successEl.innerHTML = ''
        sendingProgressEl.innerHTML =''
        sendingProgressEl2.innerHTML =''

      RefreshButtonShow();
  };

//recategorizing the delete functions which are originally in multiselectadd.js//

  function selectedBoard0(){
    checkno0();
    }
    
    function selectedBoard1(){
        selectedBoard0()
        checkno1();}
    
    function selectedBoard2(){
        selectedBoard1()
        checkno2();};
    
    function selectedBoard3(){
        selectedBoard2()
        checkno3();}
    
    function selectedBoard4(){
        selectedBoard3()
        checkno4();} 
        
    function selectedBoard5(){
        selectedBoard4()
        checkno5();} 
    
    function selectedBoard6(){
        selectedBoard5()
        checkno6();}
    
    function selectedBoard7(){
        selectedBoard6()
        checkno7();}
    
    function selectedBoard8(){
        selectedBoard7()
        checkno8();}
  
    function selectedBoard9(){
        selectedBoard8()
        checkno9();}
        
  function selectedBoard10(){
        selectedBoard9()
        checkno10();}
  
  function selectedBoard11(){
        selectedBoard10()
        checkno11();}
  
  function selectedBoard12(){
        selectedBoard11()
        checkno12();}
  
  function selectedBoard13(){
        selectedBoard12()
        checkno13();}
  
  function selectedBoard14(){
        selectedBoard13()
        checkno14();}
  
  function selectedBoard15(){
        selectedBoard14()
        checkno15();}
  
  function selectedBoard16(){
        selectedBoard15()
        checkno16();}
  
  function selectedBoard17(){
        selectedBoard16()
        checkno17();}
  
  function selectedBoard18(){
        selectedBoard17()
        checkno18();}
        
  function selectedBoard19(){
    selectedBoard18()
    checkno19();}
    
  function selectedBoard20(){
    selectedBoard19()
    checkno20();}
    
  function selectedBoard21(){
    selectedBoard20()
    checkno21();}
    
  function selectedBoard22(){
    selectedBoard21()
    checkno22();}
    
  function selectedBoard23(){
    selectedBoard22()
    checkno23();}
    
  function selectedBoard24(){
    selectedBoard23()
    checkno24();}
    
  function selectedBoard25(){
    selectedBoard24()
    checkno25();}
    
  function selectedBoard26(){
    selectedBoard25()
    checkno26();}
    
  function selectedBoard27(){
    selectedBoard26()
    checkno27();}
    
  function selectedBoard28(){
    selectedBoard27()
    checkno28();}
    
  function selectedBoard29(){
    selectedBoard28()
    checkno29();}
    
  function selectedBoard30(){
    selectedBoard29()
    checkno30();}
  
    function selectedBoard31(){
        selectedBoard30()
        checkno31();}
        
    function selectedBoard32(){
        selectedBoard31()
        checkno32();}
        
    function selectedBoard33(){
        selectedBoard32()
        checkno33();}
        
    function selectedBoard34(){
        selectedBoard33()
        checkno34();}
        
    function selectedBoard35(){
        selectedBoard34()
        checkno35();}
        
    function selectedBoard36(){
        selectedBoard35()
        checkno36();}
        
    function selectedBoard37(){
        selectedBoard36()
        checkno37();}
        
    function selectedBoard38(){
        selectedBoard37()
        checkno38();}
        
    function selectedBoard39(){
        selectedBoard38()
        checkno39();}
        
    function selectedBoard40(){
        selectedBoard39()
        checkno40();}
  
    function selectedBoard41(){
    selectedBoard40()
    checkno41();}
    
  function selectedBoard42(){
    selectedBoard41()
    checkno42();}
    
  function selectedBoard43(){
    selectedBoard42()
    checkno43();}
    
  function selectedBoard44(){
    selectedBoard43()
    checkno44();}
    
  function selectedBoard45(){
    selectedBoard44()
    checkno45();}
    
  function selectedBoard46(){
    selectedBoard45()
    checkno46();}
    
  function selectedBoard47(){
    selectedBoard46()
    checkno47();}
    
  function selectedBoard48(){
    selectedBoard47()
    checkno48();}
    
  function selectedBoard49(){
    selectedBoard48()
    checkno49();}
    
  function selectedBoard50(){
    selectedBoard49()
    checkno50();}
  
    function selectedBoard51(){
        selectedBoard50()
        checkno51();}
        
    function selectedBoard52(){
        selectedBoard51()
        checkno52();}
        
    function selectedBoard53(){
        selectedBoard52()
        checkno53();}
        
    function selectedBoard54(){
        selectedBoard53()
        checkno54();}
        
    function selectedBoard55(){
        selectedBoard54()
        checkno55();}
        
    function selectedBoard56(){
        selectedBoard55()
        checkno56();}
        
    function selectedBoard57(){
        selectedBoard56()
        checkno57();}
        
    function selectedBoard58(){
        selectedBoard57()
        checkno58();}
        
    function selectedBoard59(){
        selectedBoard58()
        checkno59();}
        
    function selectedBoard60(){
        selectedBoard59()
        checkno60();}
  
  function selectedBoard61(){
    selectedBoard60()
    checkno61();}
    
  function selectedBoard62(){
    selectedBoard61()
    checkno62();}
    
  function selectedBoard63(){
    selectedBoard62()
    checkno63();}
    
  function selectedBoard64(){
    selectedBoard63()
    checkno64();}
    
  function selectedBoard65(){
    selectedBoard64()
    checkno65();}
    
  function selectedBoard66(){
    selectedBoard65()
    checkno66();}
    
  function selectedBoard67(){
    selectedBoard66()
    checkno67();}
    
  function selectedBoard68(){
    selectedBoard67()
    checkno68();}
    
  function selectedBoard69(){
    selectedBoard68()
    checkno69();}
    
  function selectedBoard70(){
    selectedBoard69()
    checkno70();}
  
  function selectedBoard71(){
    selectedBoard70()
    checkno71();}
    
  function selectedBoard72(){
    selectedBoard71()
    checkno72();}
    
  function selectedBoard73(){
    selectedBoard72()
    checkno73();}
    
  function selectedBoard74(){
    selectedBoard73()
    checkno74();}
    
  function selectedBoard75(){
    selectedBoard74()
    checkno75();}
    
  function selectedBoard76(){
    selectedBoard75()
    checkno76();}
    
  function selectedBoard77(){
    selectedBoard76()
    checkno77();}
    
  function selectedBoard78(){
    selectedBoard77()
    checkno78();}
    
  function selectedBoard79(){
    selectedBoard78()
    checkno79();}
    
  function selectedBoard80(){
    selectedBoard79()
    checkno80();}
  
  function selectedBoard81(){
    selectedBoard80()
    checkno81();}
    
  function selectedBoard82(){
    selectedBoard81()
    checkno82();}
    
  function selectedBoard83(){
    selectedBoard82()
    checkno83();}
    
  function selectedBoard84(){
    selectedBoard83()
    checkno84();}
    
  function selectedBoard85(){
    selectedBoard84()
    checkno85();}
    
  function selectedBoard86(){
    selectedBoard85()
    checkno86();}
    
  function selectedBoard87(){
    selectedBoard86()
    checkno87();}
    
  function selectedBoard88(){
    selectedBoard87()
    checkno88();}
    
  function selectedBoard89(){
    selectedBoard88()
    checkno89();}
    
  function selectedBoard90(){
    selectedBoard89()
    checkno90();}
    
  function selectedBoard91(){
    selectedBoard90()
    checkno91();}
    
  function selectedBoard92(){
    selectedBoard91()
    checkno92();}
    
  function selectedBoard93(){
    selectedBoard92()
    checkno93();}
    
  function selectedBoard94(){
    selectedBoard93()
    checkno94();}
    
  function selectedBoard95(){
    selectedBoard94()
    checkno95();}
    
  function selectedBoard96(){
    selectedBoard95()
    checkno96();}
    
  function selectedBoard97(){
    selectedBoard96()
    checkno97();}
    
  function selectedBoard98(){
    selectedBoard97()
    checkno98();}
    
  function selectedBoard99(){
    selectedBoard98()
    checkno99();}
    
  function selectedBoard100(){
    selectedBoard99()
    checkno100();};

   
function deletingCheckboxed () {
  move()
  counterHide ()

  if (newUniqueLenght==0){
    selectedBoard0 () }
  
   else if (newUniqueLenght==1){
      selectedBoard1 () }
  
  else if (newUniqueLenght==2){
      selectedBoard2 () }
  
  else if (newUniqueLenght==3){
      selectedBoard3 () }
  
  else if (newUniqueLenght==3){
      selectedBoard3 () }
   
  else if (newUniqueLenght==4){
      selectedBoard4 () }
  
  else if (newUniqueLenght==5){
      selectedBoard5 () }
   
  else if (newUniqueLenght==6){
      selectedBoard6 () }
  
  else if (newUniqueLenght==7){
      selectedBoard7 () }
   
  else if (newUniqueLenght==8){
      selectedBoard8 () }
   
  else if (newUniqueLenght==9){
      selectedBoard9 () }
  
  else if (newUniqueLenght==10){
      selectedBoard10 () }
  
   else if (newUniqueLenght==11){
    selectedBoard11 ()
   } 
  
   else if (newUniqueLenght==12){
    selectedBoard12 ()
   } 
  
   else if (newUniqueLenght==13){
    selectedBoard13 ()
   } 
  
   else if (newUniqueLenght==14){
    selectedBoard14 ()
   } 
  
   else if (newUniqueLenght==15){
    selectedBoard15 ()
   } 
  
   else if (newUniqueLenght==16){
    selectedBoard16 ()
   } 
  
   else if (newUniqueLenght==17){
    selectedBoard17 ()
   } 
  
   else if (newUniqueLenght==18){
    selectedBoard18 ()
   } 
  
   else if (newUniqueLenght==19){
    selectedBoard19 ()
   } 
  
   else if (newUniqueLenght==20){
    selectedBoard20 ()
   } 
  
  
   else if (newUniqueLenght==21){
    selectedBoard21 ()
   } 
  
   else if (newUniqueLenght==22){
    selectedBoard22 ()
   } 
  
   else if (newUniqueLenght==23){
    selectedBoard23 ()
   } 
  
   else if (newUniqueLenght==24){
    selectedBoard24 ()
   } 
  
   else if (newUniqueLenght==25){
    selectedBoard25 ()
   } 
  
   else if (newUniqueLenght==26){
    selectedBoard26 ()
   } 
  
   else if (newUniqueLenght==27){
    selectedBoard27 ()
   } 
  
   else if (newUniqueLenght==28){
    selectedBoard28 ()
   } 
  
   else if (newUniqueLenght==29){
    selectedBoard29 ()
   } 
  
  
   else if (newUniqueLenght==30){
    selectedBoard30 ()
   } 
  
   else if (newUniqueLenght==31){
    selectedBoard31 ()
   } 
  
   else if (newUniqueLenght==32){
    selectedBoard32 ()
   } 
  
   else if (newUniqueLenght==33){
    selectedBoard33 ()
   } 
  
   else if (newUniqueLenght==34){
    selectedBoard34 ()
   } 
  
   else if (newUniqueLenght==35){
    selectedBoard35 ()
   } 
  
   else if (newUniqueLenght==36){
    selectedBoard36 ()
   } 
  
   else if (newUniqueLenght==37){
    selectedBoard37 ()
   } 
  
   else if (newUniqueLenght==38){
    selectedBoard38 ()
   } 
  
   else if (newUniqueLenght==39){
    selectedBoard39 ()
   } 
  
   else if (newUniqueLenght==40){
    selectedBoard40 ()
   } 
  
   else if (newUniqueLenght==41){
    selectedBoard41 ()
   } 
  
   else if (newUniqueLenght==42){
    selectedBoard42 ()
   } 
  
   else if (newUniqueLenght==43){
    selectedBoard43 ()
   } 
  
   else if (newUniqueLenght==44){
    selectedBoard44 ()
   } 
  
   else if (newUniqueLenght==45){
    selectedBoard45 ()
   } 
  
   else if (newUniqueLenght==46){
    selectedBoard46 ()
   } 
  
   else if (newUniqueLenght==47){
    selectedBoard47 ()
   } 
  
   else if (newUniqueLenght==48){
    selectedBoard48 ()
   } 
  
   else if (newUniqueLenght==49){
    selectedBoard49 ()
   } 
  
  
   else if (newUniqueLenght==50){
    selectedBoard50 ()
   } 
  
   else if (newUniqueLenght==51){
    selectedBoard51 ()
   } 
  
   else if (newUniqueLenght==52){
    selectedBoard52 ()
   } 
  
   else if (newUniqueLenght==53){
    selectedBoard53 ()
   } 
  
   else if (newUniqueLenght==54){
    selectedBoard54 ()
   } 
  
   else if (newUniqueLenght==55){
    selectedBoard55 ()
   } 
  
   else if (newUniqueLenght==56){
    selectedBoard56 ()
   } 
  
   else if (newUniqueLenght==57){
    selectedBoard57 ()
   } 
  
   else if (newUniqueLenght==58){
    selectedBoard58 ()
   } 
  
   else if (newUniqueLenght==59){
    selectedBoard59 ()
   } 
  
  
   else if (newUniqueLenght==60){
    selectedBoard60 ()
   } 
  
   else if (newUniqueLenght==61){
    selectedBoard61 ()
   } 
  
   else if (newUniqueLenght==62){
    selectedBoard62 ()
   } 
  
   else if (newUniqueLenght==63){
    selectedBoard63 ()
   } 
  
   else if (newUniqueLenght==64){
    selectedBoard64 ()
   } 
  
   else if (newUniqueLenght==65){
    selectedBoard65 ()
   } 
  
   else if (newUniqueLenght==66){
    selectedBoard66 ()
   } 
  
   else if (newUniqueLenght==67){
    selectedBoard67 ()
   } 
  
   else if (newUniqueLenght==68){
    selectedBoard68 ()
   } 
  
   else if (newUniqueLenght==69){
    selectedBoard69 ()
   } 
  
   else if (newUniqueLenght==70){
    selectedBoard70 ()
   } 
  
   else if (newUniqueLenght==71){
    selectedBoard71 ()
   } 
  
   else if (newUniqueLenght==72){
    selectedBoard72 ()
   } 
  
   else if (newUniqueLenght==73){
    selectedBoard73 ()
   } 
  
   else if (newUniqueLenght==74){
    selectedBoard74 ()
   } 
  
   else if (newUniqueLenght==75){
    selectedBoard75 ()
   } 
  
   else if (newUniqueLenght==76){
    selectedBoard76 ()
   } 
  
   else if (newUniqueLenght==77){
    selectedBoard77 ()
   } 
  
   else if (newUniqueLenght==78){
    selectedBoard78 ()
   } 
  
   else if (newUniqueLenght==79){
    selectedBoard79 ()
   } 
  
   else if (newUniqueLenght==80){
    selectedBoard80 ()
   } 
  
   else if (newUniqueLenght==81){
    selectedBoard81 ()
   } 
  
   else if (newUniqueLenght==82){
    selectedBoard82 ()
   } 
  
   else if (newUniqueLenght==83){
    selectedBoard83 ()
   } 
  
   else if (newUniqueLenght==84){
    selectedBoard84 ()
   } 
  
   else if (newUniqueLenght==85){
    selectedBoard85 ()
   } 
  
   else if (newUniqueLenght==86){
    selectedBoard86 ()
   } 
  
   else if (newUniqueLenght==87){
    selectedBoard87 ()
   } 
  
   else if (newUniqueLenght==88){
    selectedBoard88 ()
   } 
  
   else if (newUniqueLenght==89){
    selectedBoard89 ()
   } 
  
   else if (newUniqueLenght==90){
    selectedBoard90 ()
   } 
  
   else if (newUniqueLenght==91){
    selectedBoard91 ()
   } 
  
   else if (newUniqueLenght==92){
    selectedBoard92 ()
   } 
  
   else if (newUniqueLenght==93){
    selectedBoard93 ()
   } 
  
   else if (newUniqueLenght==94){
    selectedBoard94 ()
   } 
  
   else if (newUniqueLenght==95){
    selectedBoard95 ()
   } 
  
   else if (newUniqueLenght==96){
    selectedBoard96 ()
   } 
  
   else if (newUniqueLenght==97){
    selectedBoard97 ()
   } 
  
   else if (newUniqueLenght==98){
    selectedBoard98 ()
   } 
  
   else if (newUniqueLenght==99){
    selectedBoard99 ()
   } 
  
   else if (newUniqueLenght==100){
    selectedBoard100 ()
   
  } 

}


function sortingWorkspace () {

  loadingHide ()
  showingHeaders ()
  showingSelective ()
  if (newUniqueLenght==0){
    displayingWork0 () }
  
   else if (newUniqueLenght==1){
      displayingWork1 () }
  
  else if (newUniqueLenght==2){
      displayingWork2 () }
  
  else if (newUniqueLenght==3){
      displayingWork3 () }
  
  else if (newUniqueLenght==3){
      displayingWork3 () }
   
  else if (newUniqueLenght==4){
      displayingWork4 () }
  
  else if (newUniqueLenght==5){
      displayingWork5 () }
   
  else if (newUniqueLenght==6){
      displayingWork6 () }
  
  else if (newUniqueLenght==7){
      displayingWork7 () }
   
  else if (newUniqueLenght==8){
      displayingWork8 () }
   
  else if (newUniqueLenght==9){
      displayingWork9 () }
  
  else if (newUniqueLenght==10){
      displayingWork10 () }
  
   else if (newUniqueLenght==11){
    displayingWork11 ()
   } 
  
   else if (newUniqueLenght==12){
    displayingWork12 ()
   } 
  
   else if (newUniqueLenght==13){
    displayingWork13 ()
   } 
  
   else if (newUniqueLenght==14){
    displayingWork14 ()
   } 
  
   else if (newUniqueLenght==15){
    displayingWork15 ()
   } 
  
   else if (newUniqueLenght==16){
    displayingWork16 ()
   } 
  
   else if (newUniqueLenght==17){
    displayingWork17 ()
   } 
  
   else if (newUniqueLenght==18){
    displayingWork18 ()
   } 
  
   else if (newUniqueLenght==19){
    displayingWork19 ()
   } 
  
   else if (newUniqueLenght==20){
    displayingWork20 ()
   } 
  
  
   else if (newUniqueLenght==21){
    displayingWork21 ()
   } 
  
   else if (newUniqueLenght==22){
    displayingWork22 ()
   } 
  
   else if (newUniqueLenght==23){
    displayingWork23 ()
   } 
  
   else if (newUniqueLenght==24){
    displayingWork24 ()
   } 
  
   else if (newUniqueLenght==25){
    displayingWork25 ()
   } 
  
   else if (newUniqueLenght==26){
    displayingWork26 ()
   } 
  
   else if (newUniqueLenght==27){
    displayingWork27 ()
   } 
  
   else if (newUniqueLenght==28){
    displayingWork28 ()
   } 
  
   else if (newUniqueLenght==29){
    displayingWork29 ()
   } 
  
  
   else if (newUniqueLenght==30){
    displayingWork30 ()
   } 
  
   else if (newUniqueLenght==31){
    displayingWork31 ()
   } 
  
   else if (newUniqueLenght==32){
    displayingWork32 ()
   } 
  
   else if (newUniqueLenght==33){
    displayingWork33 ()
   } 
  
   else if (newUniqueLenght==34){
    displayingWork34 ()
   } 
  
   else if (newUniqueLenght==35){
    displayingWork35 ()
   } 
  
   else if (newUniqueLenght==36){
    displayingWork36 ()
   } 
  
   else if (newUniqueLenght==37){
    displayingWork37 ()
   } 
  
   else if (newUniqueLenght==38){
    displayingWork38 ()
   } 
  
   else if (newUniqueLenght==39){
    displayingWork39 ()
   } 
  
   else if (newUniqueLenght==40){
    displayingWork40 ()
   } 
  
   else if (newUniqueLenght==41){
    displayingWork41 ()
   } 
  
   else if (newUniqueLenght==42){
    displayingWork42 ()
   } 
  
   else if (newUniqueLenght==43){
    displayingWork43 ()
   } 
  
   else if (newUniqueLenght==44){
    displayingWork44 ()
   } 
  
   else if (newUniqueLenght==45){
    displayingWork45 ()
   } 
  
   else if (newUniqueLenght==46){
    displayingWork46 ()
   } 
  
   else if (newUniqueLenght==47){
    displayingWork47 ()
   } 
  
   else if (newUniqueLenght==48){
    displayingWork48 ()
   } 
  
   else if (newUniqueLenght==49){
    displayingWork49 ()
   } 
  
  
   else if (newUniqueLenght==50){
    displayingWork50 ()
   } 
  
   else if (newUniqueLenght==51){
    displayingWork51 ()
   } 
  
   else if (newUniqueLenght==52){
    displayingWork52 ()
   } 
  
   else if (newUniqueLenght==53){
    displayingWork53 ()
   } 
  
   else if (newUniqueLenght==54){
    displayingWork54 ()
   } 
  
   else if (newUniqueLenght==55){
    displayingWork55 ()
   } 
  
   else if (newUniqueLenght==56){
    displayingWork56 ()
   } 
  
   else if (newUniqueLenght==57){
    displayingWork57 ()
   } 
  
   else if (newUniqueLenght==58){
    displayingWork58 ()
   } 
  
   else if (newUniqueLenght==59){
    displayingWork59 ()
   } 
  
  
   else if (newUniqueLenght==60){
    displayingWork60 ()
   } 
  
   else if (newUniqueLenght==61){
    displayingWork61 ()
   } 
  
   else if (newUniqueLenght==62){
    displayingWork62 ()
   } 
  
   else if (newUniqueLenght==63){
    displayingWork63 ()
   } 
  
   else if (newUniqueLenght==64){
    displayingWork64 ()
   } 
  
   else if (newUniqueLenght==65){
    displayingWork65 ()
   } 
  
   else if (newUniqueLenght==66){
    displayingWork66 ()
   } 
  
   else if (newUniqueLenght==67){
    displayingWork67 ()
   } 
  
   else if (newUniqueLenght==68){
    displayingWork68 ()
   } 
  
   else if (newUniqueLenght==69){
    displayingWork69 ()
   } 
  
   else if (newUniqueLenght==70){
    displayingWork70 ()
   } 
  
   else if (newUniqueLenght==71){
    displayingWork71 ()
   } 
  
   else if (newUniqueLenght==72){
    displayingWork72 ()
   } 
  
   else if (newUniqueLenght==73){
    displayingWork73 ()
   } 
  
   else if (newUniqueLenght==74){
    displayingWork74 ()
   } 
  
   else if (newUniqueLenght==75){
    displayingWork75 ()
   } 
  
   else if (newUniqueLenght==76){
    displayingWork76 ()
   } 
  
   else if (newUniqueLenght==77){
    displayingWork77 ()
   } 
  
   else if (newUniqueLenght==78){
    displayingWork78 ()
   } 
  
   else if (newUniqueLenght==79){
    displayingWork79 ()
   } 
  
   else if (newUniqueLenght==80){
    displayingWork80 ()
   } 
  
   else if (newUniqueLenght==81){
    displayingWork81 ()
   } 
  
   else if (newUniqueLenght==82){
    displayingWork82 ()
   } 
  
   else if (newUniqueLenght==83){
    displayingWork83 ()
   } 
  
   else if (newUniqueLenght==84){
    displayingWork84 ()
   } 
  
   else if (newUniqueLenght==85){
    displayingWork85 ()
   } 
  
   else if (newUniqueLenght==86){
    displayingWork86 ()
   } 
  
   else if (newUniqueLenght==87){
    displayingWork87 ()
   } 
  
   else if (newUniqueLenght==88){
    displayingWork88 ()
   } 
  
   else if (newUniqueLenght==89){
    displayingWork89 ()
   } 
  
   else if (newUniqueLenght==90){
    displayingWork90 ()
   } 
  
   else if (newUniqueLenght==91){
    displayingWork91 ()
   } 
  
   else if (newUniqueLenght==92){
    displayingWork92 ()
   } 
  
   else if (newUniqueLenght==93){
    displayingWork93 ()
   } 
  
   else if (newUniqueLenght==94){
    displayingWork94 ()
   } 
  
   else if (newUniqueLenght==95){
    displayingWork95 ()
   } 
  
   else if (newUniqueLenght==96){
    displayingWork96 ()
   } 
  
   else if (newUniqueLenght==97){
    displayingWork97 ()
   } 
  
   else if (newUniqueLenght==98){
    displayingWork98 ()
   } 
  
   else if (newUniqueLenght==99){
    displayingWork99 ()
   } 
  
   else if (newUniqueLenght==100){
    displayingWork100 ()
   
  } 

}

//Displaying organization/workspace names on html page//

function organiz0(){
  checkboxShow0 ()
  nameOrg0 = organizationSorted[0].name;
  displayWorkspace0 = organizationSorted[0].displayName;
  labelcheckEl0.innerHTML = displayWorkspace0

  }

function organiz1(){
  checkboxShow1 ()
  nameOrg1 = organizationSorted[1].name;
  displayWorkspace1 = organizationSorted[1].displayName;
  labelcheckEl1.innerHTML = displayWorkspace1

  }
  
function organiz2(){
  checkboxShow2 ()
  nameOrg2 = organizationSorted[2].name;
  displayWorkspace2 = organizationSorted[2].displayName;
  labelcheckEl2.innerHTML = displayWorkspace2

  }
  
function organiz3(){
  checkboxShow3 ()
  nameOrg3 = organizationSorted[3].name;
  displayWorkspace3 = organizationSorted[3].displayName;
  labelcheckEl3.innerHTML = displayWorkspace3

  }
  
function organiz4(){
  checkboxShow4 ()
  nameOrg4 = organizationSorted[4].name;
  displayWorkspace4 = organizationSorted[4].displayName;
  labelcheckEl4.innerHTML = displayWorkspace4

  }
  
function organiz5(){
  checkboxShow5 ()
  nameOrg5 = organizationSorted[5].name;
  displayWorkspace5 = organizationSorted[5].displayName;
  labelcheckEl5.innerHTML = displayWorkspace5

  }
  
function organiz6(){
  checkboxShow6 ()
  nameOrg6 = organizationSorted[6].name;
  displayWorkspace6 = organizationSorted[6].displayName;
  labelcheckEl6.innerHTML = displayWorkspace6

  }
  
function organiz7(){
  checkboxShow7 ()
  nameOrg7 = organizationSorted[7].name;
  displayWorkspace7 = organizationSorted[7].displayName;
  labelcheckEl7.innerHTML = displayWorkspace7

  }
  
function organiz8(){
  checkboxShow8 ()
  nameOrg8 = organizationSorted[8].name;
  displayWorkspace8 = organizationSorted[8].displayName;
  labelcheckEl8.innerHTML = displayWorkspace8

  }
  
function organiz9(){
  checkboxShow9 ()
  nameOrg9 = organizationSorted[9].name;
  displayWorkspace9 = organizationSorted[9].displayName;
  labelcheckEl9.innerHTML = displayWorkspace9

  }
  
function organiz10(){
  checkboxShow10 ()
  nameOrg10 = organizationSorted[10].name;
  displayWorkspace10 = organizationSorted[10].displayName;
  labelcheckEl10.innerHTML = displayWorkspace10

  }
  
function organiz11(){
  checkboxShow11 ()
  nameOrg11 = organizationSorted[11].name;
  displayWorkspace11 = organizationSorted[11].displayName;
  labelcheckEl11.innerHTML = displayWorkspace11

  }
  
function organiz12(){
  checkboxShow12 ()
  nameOrg12 = organizationSorted[12].name;
  displayWorkspace12 = organizationSorted[12].displayName;
  labelcheckEl12.innerHTML = displayWorkspace12

  }
  
function organiz13(){
  checkboxShow13 ()
  nameOrg13 = organizationSorted[13].name;
  displayWorkspace13 = organizationSorted[13].displayName;
  labelcheckEl13.innerHTML = displayWorkspace13

  }
  
function organiz14(){
  checkboxShow14 ()
  nameOrg14 = organizationSorted[14].name;
  displayWorkspace14 = organizationSorted[14].displayName;
  labelcheckEl14.innerHTML = displayWorkspace14

  }
  
function organiz15(){
  checkboxShow15 ()
  nameOrg15 = organizationSorted[15].name;
  displayWorkspace15 = organizationSorted[15].displayName;
  labelcheckEl15.innerHTML = displayWorkspace15

  }
  
function organiz16(){
  checkboxShow16 ()
  nameOrg16 = organizationSorted[16].name;
  displayWorkspace16 = organizationSorted[16].displayName;
  labelcheckEl16.innerHTML = displayWorkspace16

  }
  
function organiz17(){
  checkboxShow17 ()
  nameOrg17 = organizationSorted[17].name;
  displayWorkspace17 = organizationSorted[17].displayName;
  labelcheckEl17.innerHTML = displayWorkspace17

  }
  
function organiz18(){
  checkboxShow18 ()
  nameOrg18 = organizationSorted[18].name;
  displayWorkspace18 = organizationSorted[18].displayName;
  labelcheckEl18.innerHTML = displayWorkspace18

  }

  
function organiz19(){
  checkboxShow19 ()
  nameOrg19 = organizationSorted[19].name;
  displayWorkspace19 = organizationSorted[19].displayName;
  labelcheckEl19.innerHTML = displayWorkspace19

  }

  function organiz20(){
      checkboxShow20 ()
      nameOrg20 = organizationSorted[20].name;
      displayWorkspace20 = organizationSorted[20].displayName;
      labelcheckEl20.innerHTML = displayWorkspace20
  
      }
      
  function organiz21(){
      checkboxShow21 ()
      nameOrg21 = organizationSorted[21].name;
      displayWorkspace21 = organizationSorted[21].displayName;
      labelcheckEl21.innerHTML = displayWorkspace21
  
      }
      
  function organiz22(){
      checkboxShow22 ()
      nameOrg22 = organizationSorted[22].name;
      displayWorkspace22 = organizationSorted[22].displayName;
      labelcheckEl22.innerHTML = displayWorkspace22
  
      }
      
  function organiz23(){
      checkboxShow23 ()
      nameOrg23 = organizationSorted[23].name;
      displayWorkspace23 = organizationSorted[23].displayName;
      labelcheckEl23.innerHTML = displayWorkspace23
  
      }
      
  function organiz24(){
      checkboxShow24 ()
      nameOrg24 = organizationSorted[24].name;
      displayWorkspace24 = organizationSorted[24].displayName;
      labelcheckEl24.innerHTML = displayWorkspace24
  
      }
      
  function organiz25(){
      checkboxShow25 ()
      nameOrg25 = organizationSorted[25].name;
      displayWorkspace25 = organizationSorted[25].displayName;
      labelcheckEl25.innerHTML = displayWorkspace25
  
      }
      
  function organiz26(){
      checkboxShow26 ()
      nameOrg26 = organizationSorted[26].name;
      displayWorkspace26 = organizationSorted[26].displayName;
      labelcheckEl26.innerHTML = displayWorkspace26
  
      }
      
  function organiz27(){
      checkboxShow27 ()
      nameOrg27 = organizationSorted[27].name;
      displayWorkspace27 = organizationSorted[27].displayName;
      labelcheckEl27.innerHTML = displayWorkspace27
  
      }
      
  function organiz28(){
      checkboxShow28 ()
      nameOrg28 = organizationSorted[28].name;
      displayWorkspace28 = organizationSorted[28].displayName;
      labelcheckEl28.innerHTML = displayWorkspace28
  
      }
  
      
  function organiz29(){
      checkboxShow29 ()
      nameOrg29 = organizationSorted[29].name;
      displayWorkspace29 = organizationSorted[29].displayName;
      labelcheckEl29.innerHTML = displayWorkspace29
  }

  function organiz30(){
    checkboxShow30 ()
    nameOrg30 = organizationSorted[30].name;
    displayWorkspace30 = organizationSorted[30].displayName;
    labelcheckEl30.innerHTML = displayWorkspace30

    }
    
function organiz31(){
    checkboxShow31 ()
    nameOrg31 = organizationSorted[31].name;
    displayWorkspace31 = organizationSorted[31].displayName;
    labelcheckEl31.innerHTML = displayWorkspace31

    }
    
function organiz32(){
    checkboxShow32 ()
    nameOrg32 = organizationSorted[32].name;
    displayWorkspace32 = organizationSorted[32].displayName;
    labelcheckEl32.innerHTML = displayWorkspace32

    }
    
function organiz33(){
    checkboxShow33 ()
    nameOrg33 = organizationSorted[33].name;
    displayWorkspace33 = organizationSorted[33].displayName;
    labelcheckEl33.innerHTML = displayWorkspace33

    }
    
function organiz34(){
    checkboxShow34 ()
    nameOrg34 = organizationSorted[34].name;
    displayWorkspace34 = organizationSorted[34].displayName;
    labelcheckEl34.innerHTML = displayWorkspace34

    }
    
function organiz35(){
    checkboxShow35 ()
    nameOrg35 = organizationSorted[35].name;
    displayWorkspace35 = organizationSorted[35].displayName;
    labelcheckEl35.innerHTML = displayWorkspace35

    }
    
function organiz36(){
    checkboxShow36 ()
    nameOrg36 = organizationSorted[36].name;
    displayWorkspace36 = organizationSorted[36].displayName;
    labelcheckEl36.innerHTML = displayWorkspace36

    }
    
function organiz37(){
    checkboxShow37 ()
    nameOrg37 = organizationSorted[37].name;
    displayWorkspace37 = organizationSorted[37].displayName;
    labelcheckEl37.innerHTML = displayWorkspace37

    }
    
function organiz38(){
    checkboxShow38 ()
    nameOrg38 = organizationSorted[38].name;
    displayWorkspace38 = organizationSorted[38].displayName;
    labelcheckEl38.innerHTML = displayWorkspace38

    }

    
function organiz39(){
    checkboxShow39 ()
    nameOrg39 = organizationSorted[39].name;
    displayWorkspace39 = organizationSorted[39].displayName;
    labelcheckEl39.innerHTML = displayWorkspace39
}

function organiz40(){
  checkboxShow40 ()
  nameOrg40 = organizationSorted[40].name;
  displayWorkspace40 = organizationSorted[40].displayName;
  labelcheckEl40.innerHTML = displayWorkspace40

  }
  
function organiz41(){
  checkboxShow41 ()
  nameOrg41 = organizationSorted[41].name;
  displayWorkspace41 = organizationSorted[41].displayName;
  labelcheckEl41.innerHTML = displayWorkspace41

  }
  
function organiz42(){
  checkboxShow42 ()
  nameOrg42 = organizationSorted[42].name;
  displayWorkspace42 = organizationSorted[42].displayName;
  labelcheckEl42.innerHTML = displayWorkspace42

  }
  
function organiz43(){
  checkboxShow43 ()
  nameOrg43 = organizationSorted[43].name;
  displayWorkspace43 = organizationSorted[43].displayName;
  labelcheckEl43.innerHTML = displayWorkspace43

  }
  
function organiz44(){
  checkboxShow44 ()
  nameOrg44 = organizationSorted[44].name;
  displayWorkspace44 = organizationSorted[44].displayName;
  labelcheckEl44.innerHTML = displayWorkspace44

  }
  
function organiz45(){
  checkboxShow45 ()
  nameOrg45 = organizationSorted[45].name;
  displayWorkspace45 = organizationSorted[45].displayName;
  labelcheckEl45.innerHTML = displayWorkspace45

  }
  
function organiz46(){
  checkboxShow46 ()
  nameOrg46 = organizationSorted[46].name;
  displayWorkspace46 = organizationSorted[46].displayName;
  labelcheckEl46.innerHTML = displayWorkspace46

  }
  
function organiz47(){
  checkboxShow47 ()
  nameOrg47 = organizationSorted[47].name;
  displayWorkspace47 = organizationSorted[47].displayName;
  labelcheckEl47.innerHTML = displayWorkspace47

  }
  
function organiz48(){
  checkboxShow48 ()
  nameOrg48 = organizationSorted[48].name;
  displayWorkspace48 = organizationSorted[48].displayName;
  labelcheckEl48.innerHTML = displayWorkspace48

  }

  
function organiz49(){
  checkboxShow49 ()
  nameOrg49 = organizationSorted[49].name;
  displayWorkspace49 = organizationSorted[49].displayName;
  labelcheckEl49.innerHTML = displayWorkspace49
}

function organiz50(){
  checkboxShow50 ()
  nameOrg50 = organizationSorted[50].name;
  displayWorkspace50 = organizationSorted[50].displayName;
  labelcheckEl50.innerHTML = displayWorkspace50

  }
  
function organiz51(){
  checkboxShow51 ()
  nameOrg51 = organizationSorted[51].name;
  displayWorkspace51 = organizationSorted[51].displayName;
  labelcheckEl51.innerHTML = displayWorkspace51

  }
  
function organiz52(){
  checkboxShow52 ()
  nameOrg52 = organizationSorted[52].name;
  displayWorkspace52 = organizationSorted[52].displayName;
  labelcheckEl52.innerHTML = displayWorkspace52

  }
  
function organiz53(){
  checkboxShow53 ()
  nameOrg53 = organizationSorted[53].name;
  displayWorkspace53 = organizationSorted[53].displayName;
  labelcheckEl53.innerHTML = displayWorkspace53

  }
  
function organiz54(){
  checkboxShow54 ()
  nameOrg54 = organizationSorted[54].name;
  displayWorkspace54 = organizationSorted[54].displayName;
  labelcheckEl54.innerHTML = displayWorkspace54

  }
  
function organiz55(){
  checkboxShow55 ()
  nameOrg55 = organizationSorted[55].name;
  displayWorkspace55 = organizationSorted[55].displayName;
  labelcheckEl55.innerHTML = displayWorkspace55

  }
  
function organiz56(){
  checkboxShow56 ()
  nameOrg56 = organizationSorted[56].name;
  displayWorkspace56 = organizationSorted[56].displayName;
  labelcheckEl56.innerHTML = displayWorkspace56

  }
  
function organiz57(){
  checkboxShow57 ()
  nameOrg57 = organizationSorted[57].name;
  displayWorkspace57 = organizationSorted[57].displayName;
  labelcheckEl57.innerHTML = displayWorkspace57

  }
  
function organiz58(){
  checkboxShow58 ()
  nameOrg58 = organizationSorted[58].name;
  displayWorkspace58 = organizationSorted[58].displayName;
  labelcheckEl58.innerHTML = displayWorkspace58

  }

  
function organiz59(){
  checkboxShow59 ()
  nameOrg59 = organizationSorted[59].name;
  displayWorkspace59 = organizationSorted[59].displayName;
  labelcheckEl59.innerHTML = displayWorkspace59
}

function organiz60(){
  checkboxShow60 ()
  nameOrg60 = organizationSorted[60].name;
  displayWorkspace60 = organizationSorted[60].displayName;
  labelcheckEl60.innerHTML = displayWorkspace60

  }
  
function organiz61(){
  checkboxShow61 ()
  nameOrg61 = organizationSorted[61].name;
  displayWorkspace61 = organizationSorted[61].displayName;
  labelcheckEl61.innerHTML = displayWorkspace61

  }
  
function organiz62(){
  checkboxShow62 ()
  nameOrg62 = organizationSorted[62].name;
  displayWorkspace62 = organizationSorted[62].displayName;
  labelcheckEl62.innerHTML = displayWorkspace62

  }
  
function organiz63(){
  checkboxShow63 ()
  nameOrg63 = organizationSorted[63].name;
  displayWorkspace63 = organizationSorted[63].displayName;
  labelcheckEl63.innerHTML = displayWorkspace63

  }
  
function organiz64(){
  checkboxShow64 ()
  nameOrg64 = organizationSorted[64].name;
  displayWorkspace64 = organizationSorted[64].displayName;
  labelcheckEl64.innerHTML = displayWorkspace64

  }
  
function organiz65(){
  checkboxShow65 ()
  nameOrg65 = organizationSorted[65].name;
  displayWorkspace65 = organizationSorted[65].displayName;
  labelcheckEl65.innerHTML = displayWorkspace65

  }
  
function organiz66(){
  checkboxShow66 ()
  nameOrg66 = organizationSorted[66].name;
  displayWorkspace66 = organizationSorted[66].displayName;
  labelcheckEl66.innerHTML = displayWorkspace66

  }
  
function organiz67(){
  checkboxShow67 ()
  nameOrg67 = organizationSorted[67].name;
  displayWorkspace67 = organizationSorted[67].displayName;
  labelcheckEl67.innerHTML = displayWorkspace67

  }
  
function organiz68(){
  checkboxShow68 ()
  nameOrg68 = organizationSorted[68].name;
  displayWorkspace68 = organizationSorted[68].displayName;
  labelcheckEl68.innerHTML = displayWorkspace68

  }

  
function organiz69(){
  checkboxShow69 ()
  nameOrg69 = organizationSorted[69].name;
  displayWorkspace69 = organizationSorted[69].displayName;
  labelcheckEl69.innerHTML = displayWorkspace69
}

function organiz70(){
  checkboxShow70 ()
  nameOrg70 = organizationSorted[70].name;
  displayWorkspace70 = organizationSorted[70].displayName;
  labelcheckEl70.innerHTML = displayWorkspace70

  }
  
function organiz71(){
  checkboxShow71 ()
  nameOrg71 = organizationSorted[71].name;
  displayWorkspace71 = organizationSorted[71].displayName;
  labelcheckEl71.innerHTML = displayWorkspace71

  }
  
function organiz72(){
  checkboxShow72 ()
  nameOrg72 = organizationSorted[72].name;
  displayWorkspace72 = organizationSorted[72].displayName;
  labelcheckEl72.innerHTML = displayWorkspace72

  }
  
function organiz73(){
  checkboxShow73 ()
  nameOrg73 = organizationSorted[73].name;
  displayWorkspace73 = organizationSorted[73].displayName;
  labelcheckEl73.innerHTML = displayWorkspace73

  }
  
function organiz74(){
  checkboxShow74 ()
  nameOrg74 = organizationSorted[74].name;
  displayWorkspace74 = organizationSorted[74].displayName;
  labelcheckEl74.innerHTML = displayWorkspace74

  }
  
function organiz75(){
  checkboxShow75 ()
  nameOrg75 = organizationSorted[75].name;
  displayWorkspace75 = organizationSorted[75].displayName;
  labelcheckEl75.innerHTML = displayWorkspace75

  }
  
function organiz76(){
  checkboxShow76 ()
  nameOrg76 = organizationSorted[76].name;
  displayWorkspace76 = organizationSorted[76].displayName;
  labelcheckEl76.innerHTML = displayWorkspace76

  }
  
function organiz77(){
  checkboxShow77 ()
  nameOrg77 = organizationSorted[77].name;
  displayWorkspace77 = organizationSorted[77].displayName;
  labelcheckEl77.innerHTML = displayWorkspace77

  }
  
function organiz78(){
  checkboxShow78 ()
  nameOrg78 = organizationSorted[78].name;
  displayWorkspace78 = organizationSorted[78].displayName;
  labelcheckEl78.innerHTML = displayWorkspace78

  }

  
function organiz79(){
  checkboxShow79 ()
  nameOrg79 = organizationSorted[79].name;
  displayWorkspace79 = organizationSorted[79].displayName;
  labelcheckEl79.innerHTML = displayWorkspace79
}

function organiz80(){
  checkboxShow80 ()
  nameOrg80 = organizationSorted[80].name;
  displayWorkspace80 = organizationSorted[80].displayName;
  labelcheckEl80.innerHTML = displayWorkspace80

  }
  
function organiz81(){
  checkboxShow81 ()
  nameOrg81 = organizationSorted[81].name;
  displayWorkspace81 = organizationSorted[81].displayName;
  labelcheckEl81.innerHTML = displayWorkspace81

  }
  
function organiz82(){
  checkboxShow82 ()
  nameOrg82 = organizationSorted[82].name;
  displayWorkspace82 = organizationSorted[82].displayName;
  labelcheckEl82.innerHTML = displayWorkspace82

  }
  
function organiz83(){
  checkboxShow83 ()
  nameOrg83 = organizationSorted[83].name;
  displayWorkspace83 = organizationSorted[83].displayName;
  labelcheckEl83.innerHTML = displayWorkspace83

  }
  
function organiz84(){
  checkboxShow84 ()
  nameOrg84 = organizationSorted[84].name;
  displayWorkspace84 = organizationSorted[84].displayName;
  labelcheckEl84.innerHTML = displayWorkspace84

  }
  
function organiz85(){
  checkboxShow85 ()
  nameOrg85 = organizationSorted[85].name;
  displayWorkspace85 = organizationSorted[85].displayName;
  labelcheckEl85.innerHTML = displayWorkspace85

  }
  
function organiz86(){
  checkboxShow86 ()
  nameOrg86 = organizationSorted[86].name;
  displayWorkspace86 = organizationSorted[86].displayName;
  labelcheckEl86.innerHTML = displayWorkspace86

  }
  
function organiz87(){
  checkboxShow87 ()
  nameOrg87 = organizationSorted[87].name;
  displayWorkspace87 = organizationSorted[87].displayName;
  labelcheckEl87.innerHTML = displayWorkspace87

  }
  
function organiz88(){
  checkboxShow88 ()
  nameOrg88 = organizationSorted[88].name;
  displayWorkspace88 = organizationSorted[88].displayName;
  labelcheckEl88.innerHTML = displayWorkspace88

  }
 
function organiz89(){
  checkboxShow89 ()
  nameOrg89 = organizationSorted[89].name;
  displayWorkspace89 = organizationSorted[89].displayName;
  labelcheckEl89.innerHTML = displayWorkspace89
}

function organiz90(){
  checkboxShow90 ()
  nameOrg90 = organizationSorted[90].name;
  displayWorkspace90 = organizationSorted[90].displayName;
  labelcheckEl90.innerHTML = displayWorkspace90

  }
  
function organiz91(){
  checkboxShow91 ()
  nameOrg91 = organizationSorted[91].name;
  displayWorkspace91 = organizationSorted[91].displayName;
  labelcheckEl91.innerHTML = displayWorkspace91

  }
  
function organiz92(){
  checkboxShow92 ()
  nameOrg92 = organizationSorted[92].name;
  displayWorkspace92 = organizationSorted[92].displayName;
  labelcheckEl92.innerHTML = displayWorkspace92

  }
  
function organiz93(){
  checkboxShow93 ()
  nameOrg93 = organizationSorted[93].name;
  displayWorkspace93 = organizationSorted[93].displayName;
  labelcheckEl93.innerHTML = displayWorkspace93

  }
  
function organiz94(){
  checkboxShow94 ()
  nameOrg94 = organizationSorted[94].name;
  displayWorkspace94 = organizationSorted[94].displayName;
  labelcheckEl94.innerHTML = displayWorkspace94

  }
  
function organiz95(){
  checkboxShow95 ()
  nameOrg95 = organizationSorted[95].name;
  displayWorkspace95 = organizationSorted[95].displayName;
  labelcheckEl95.innerHTML = displayWorkspace95

  }
  
function organiz96(){
  checkboxShow96 ()
  nameOrg96 = organizationSorted[96].name;
  displayWorkspace96 = organizationSorted[96].displayName;
  labelcheckEl96.innerHTML = displayWorkspace96

  }
  
function organiz97(){
  checkboxShow97 ()
  nameOrg97 = organizationSorted[97].name;
  displayWorkspace97 = organizationSorted[97].displayName;
  labelcheckEl97.innerHTML = displayWorkspace97

  }
  
function organiz98(){
  checkboxShow98 ()
  nameOrg98 = organizationSorted[98].name;
  displayWorkspace98 = organizationSorted[98].displayName;
  labelcheckEl98.innerHTML = displayWorkspace98

  }

function organiz99(){
  checkboxShow99 ()
  nameOrg99 = organizationSorted[99].name;
  displayWorkspace99 = organizationSorted[99].displayName;
  labelcheckEl99.innerHTML = displayWorkspace99
}
function organiz100(){
  checkboxShow100 ()
  nameOrg100 = organizationSorted[100].name;
  displayWorkspace100 = organizationSorted[100].displayName;
  labelcheckEl100.innerHTML = displayWorkspace100
}
  
function selectedOrganization0(){
  Add0();
  }
  
  function selectedOrganization1(){
      selectedOrganization0()
      Add1();}
  
  function selectedOrganization2(){
      selectedOrganization1()
      Add2();};
  
  function selectedOrganization3(){
      selectedOrganization2()
      Add3();}
  
  function selectedOrganization4(){
      selectedOrganization3()
      Add4();} 
      
  function selectedOrganization5(){
      selectedOrganization4()
      Add5();} 
  
  function selectedOrganization6(){
      selectedOrganization5()
      Add6();}
  
  function selectedOrganization7(){
      selectedOrganization6()
      Add7();}
  
  function selectedOrganization8(){
      selectedOrganization7()
      Add8();}

  function selectedOrganization9(){
      selectedOrganization8()
      Add9();}
      
function selectedOrganization10(){
      selectedOrganization9()
      Add10();}

function selectedOrganization11(){
      selectedOrganization10()
      Add11();}

function selectedOrganization12(){
      selectedOrganization11()
      Add12();}

function selectedOrganization13(){
      selectedOrganization12()
      Add13();}

function selectedOrganization14(){
      selectedOrganization13()
      Add14();}

function selectedOrganization15(){
      selectedOrganization14()
      Add15();}

function selectedOrganization16(){
      selectedOrganization15()
      Add16();}

function selectedOrganization17(){
      selectedOrganization16()
      Add17();}

function selectedOrganization18(){
      selectedOrganization17()
      Add18();}
      
function selectedOrganization19(){
  selectedOrganization18()
  Add19();}
  
function selectedOrganization20(){
  selectedOrganization19()
  Add20();}
  
function selectedOrganization21(){
  selectedOrganization20()
  Add21();}
  
function selectedOrganization22(){
  selectedOrganization21()
  Add22();}
  
function selectedOrganization23(){
  selectedOrganization22()
  Add23();}
  
function selectedOrganization24(){
  selectedOrganization23()
  Add24();}
  
function selectedOrganization25(){
  selectedOrganization24()
  Add25();}
  
function selectedOrganization26(){
  selectedOrganization25()
  Add26();}
  
function selectedOrganization27(){
  selectedOrganization26()
  Add27();}
  
function selectedOrganization28(){
  selectedOrganization27()
  Add28();}
  
function selectedOrganization29(){
  selectedOrganization28()
  Add29();}
  
function selectedOrganization30(){
  selectedOrganization29()
  Add30();}

  function selectedOrganization31(){
      selectedOrganization30()
      Add31();}
      
  function selectedOrganization32(){
      selectedOrganization31()
      Add32();}
      
  function selectedOrganization33(){
      selectedOrganization32()
      Add33();}
      
  function selectedOrganization34(){
      selectedOrganization33()
      Add34();}
      
  function selectedOrganization35(){
      selectedOrganization34()
      Add35();}
      
  function selectedOrganization36(){
      selectedOrganization35()
      Add36();}
      
  function selectedOrganization37(){
      selectedOrganization36()
      Add37();}
      
  function selectedOrganization38(){
      selectedOrganization37()
      Add38();}
      
  function selectedOrganization39(){
      selectedOrganization38()
      Add39();}
      
  function selectedOrganization40(){
      selectedOrganization39()
      Add40();}

  function selectedOrganization41(){
  selectedOrganization40()
  Add41();}
  
function selectedOrganization42(){
  selectedOrganization41()
  Add42();}
  
function selectedOrganization43(){
  selectedOrganization42()
  Add43();}
  
function selectedOrganization44(){
  selectedOrganization43()
  Add44();}
  
function selectedOrganization45(){
  selectedOrganization44()
  Add45();}
  
function selectedOrganization46(){
  selectedOrganization45()
  Add46();}
  
function selectedOrganization47(){
  selectedOrganization46()
  Add47();}
  
function selectedOrganization48(){
  selectedOrganization47()
  Add48();}
  
function selectedOrganization49(){
  selectedOrganization48()
  Add49();}
  
function selectedOrganization50(){
  selectedOrganization49()
  Add50();}

  function selectedOrganization51(){
      selectedOrganization50()
      Add51();}
      
  function selectedOrganization52(){
      selectedOrganization51()
      Add52();}
      
  function selectedOrganization53(){
      selectedOrganization52()
      Add53();}
      
  function selectedOrganization54(){
      selectedOrganization53()
      Add54();}
      
  function selectedOrganization55(){
      selectedOrganization54()
      Add55();}
      
  function selectedOrganization56(){
      selectedOrganization55()
      Add56();}
      
  function selectedOrganization57(){
      selectedOrganization56()
      Add57();}
      
  function selectedOrganization58(){
      selectedOrganization57()
      Add58();}
      
  function selectedOrganization59(){
      selectedOrganization58()
      Add59();}
      
  function selectedOrganization60(){
      selectedOrganization59()
      Add60();}

function selectedOrganization61(){
  selectedOrganization60()
  Add61();}
  
function selectedOrganization62(){
  selectedOrganization61()
  Add62();}
  
function selectedOrganization63(){
  selectedOrganization62()
  Add63();}
  
function selectedOrganization64(){
  selectedOrganization63()
  Add64();}
  
function selectedOrganization65(){
  selectedOrganization64()
  Add65();}
  
function selectedOrganization66(){
  selectedOrganization65()
  Add66();}
  
function selectedOrganization67(){
  selectedOrganization66()
  Add67();}
  
function selectedOrganization68(){
  selectedOrganization67()
  Add68();}
  
function selectedOrganization69(){
  selectedOrganization68()
  Add69();}
  
function selectedOrganization70(){
  selectedOrganization69()
  Add70();}

function selectedOrganization71(){
  selectedOrganization70()
  Add71();}
  
function selectedOrganization72(){
  selectedOrganization71()
  Add72();}
  
function selectedOrganization73(){
  selectedOrganization72()
  Add73();}
  
function selectedOrganization74(){
  selectedOrganization73()
  Add74();}
  
function selectedOrganization75(){
  selectedOrganization74()
  Add75();}
  
function selectedOrganization76(){
  selectedOrganization75()
  Add76();}
  
function selectedOrganization77(){
  selectedOrganization76()
  Add77();}
  
function selectedOrganization78(){
  selectedOrganization77()
  Add78();}
  
function selectedOrganization79(){
  selectedOrganization78()
  Add79();}
  
function selectedOrganization80(){
  selectedOrganization79()
  Add80();}

function selectedOrganization81(){
  selectedOrganization80()
  Add81();}
  
function selectedOrganization82(){
  selectedOrganization81()
  Add82();}
  
function selectedOrganization83(){
  selectedOrganization82()
  Add83();}
  
function selectedOrganization84(){
  selectedOrganization83()
  Add84();}
  
function selectedOrganization85(){
  selectedOrganization84()
  Add85();}
  
function selectedOrganization86(){
  selectedOrganization85()
  Add86();}
  
function selectedOrganization87(){
  selectedOrganization86()
  Add87();}
  
function selectedOrganization88(){
  selectedOrganization87()
  Add88();}
  
function selectedOrganization89(){
  selectedOrganization88()
  Add89();}
  
function selectedOrganization90(){
  selectedOrganization89()
  Add90();}
  
function selectedOrganization91(){
  selectedOrganization90()
  Add91();}
  
function selectedOrganization92(){
  selectedOrganization91()
  Add92();}
  
function selectedOrganization93(){
  selectedOrganization92()
  Add93();}
  
function selectedOrganization94(){
  selectedOrganization93()
  Add94();}
  
function selectedOrganization95(){
  selectedOrganization94()
  Add95();}
  
function selectedOrganization96(){
  selectedOrganization95()
  Add96();}
  
function selectedOrganization97(){
  selectedOrganization96()
  Add97();}
  
function selectedOrganization98(){
  selectedOrganization97()
  Add98();}
  
function selectedOrganization99(){
  selectedOrganization98()
  Add99();}
  
function selectedOrganization100(){
  selectedOrganization99()
  Add100();};


function organizationDisplay () {

if (newUniqueLenght==0){
  selectedOrganization0 () }

 else if (newUniqueLenght==1){
    selectedOrganization1 () }

else if (newUniqueLenght==2){
    selectedOrganization2 () }

else if (newUniqueLenght==3){
    selectedOrganization3 () }

else if (newUniqueLenght==3){
    selectedOrganization3 () }
 
else if (newUniqueLenght==4){
    selectedOrganization4 () }

else if (newUniqueLenght==5){
    selectedOrganization5 () }
 
else if (newUniqueLenght==6){
    selectedOrganization6 () }

else if (newUniqueLenght==7){
    selectedOrganization7 () }
 
else if (newUniqueLenght==8){
    selectedOrganization8 () }
 
else if (newUniqueLenght==9){
    selectedOrganization9 () }

else if (newUniqueLenght==10){
    selectedOrganization10 () }

 else if (newUniqueLenght==11){
  selectedOrganization11 ()
 } 

 else if (newUniqueLenght==12){
  selectedOrganization12 ()
 } 

 else if (newUniqueLenght==13){
  selectedOrganization13 ()
 } 

 else if (newUniqueLenght==14){
  selectedOrganization14 ()
 } 

 else if (newUniqueLenght==15){
  selectedOrganization15 ()
 } 

 else if (newUniqueLenght==16){
  selectedOrganization16 ()
 } 

 else if (newUniqueLenght==17){
  selectedOrganization17 ()
 } 

 else if (newUniqueLenght==18){
  selectedOrganization18 ()
 } 

 else if (newUniqueLenght==19){
  selectedOrganization19 ()
 } 

 else if (newUniqueLenght==20){
  selectedOrganization20 ()
 } 


 else if (newUniqueLenght==21){
  selectedOrganization21 ()
 } 

 else if (newUniqueLenght==22){
  selectedOrganization22 ()
 } 

 else if (newUniqueLenght==23){
  selectedOrganization23 ()
 } 

 else if (newUniqueLenght==24){
  selectedOrganization24 ()
 } 

 else if (newUniqueLenght==25){
  selectedOrganization25 ()
 } 

 else if (newUniqueLenght==26){
  selectedOrganization26 ()
 } 

 else if (newUniqueLenght==27){
  selectedOrganization27 ()
 } 

 else if (newUniqueLenght==28){
  selectedOrganization28 ()
 } 

 else if (newUniqueLenght==29){
  selectedOrganization29 ()
 } 


 else if (newUniqueLenght==30){
  selectedOrganization30 ()
 } 

 else if (newUniqueLenght==31){
  selectedOrganization31 ()
 } 

 else if (newUniqueLenght==32){
  selectedOrganization32 ()
 } 

 else if (newUniqueLenght==33){
  selectedOrganization33 ()
 } 

 else if (newUniqueLenght==34){
  selectedOrganization34 ()
 } 

 else if (newUniqueLenght==35){
  selectedOrganization35 ()
 } 

 else if (newUniqueLenght==36){
  selectedOrganization36 ()
 } 

 else if (newUniqueLenght==37){
  selectedOrganization37 ()
 } 

 else if (newUniqueLenght==38){
  selectedOrganization38 ()
 } 

 else if (newUniqueLenght==39){
  selectedOrganization39 ()
 } 

 else if (newUniqueLenght==40){
  selectedOrganization40 ()
 } 

 else if (newUniqueLenght==41){
  selectedOrganization41 ()
 } 

 else if (newUniqueLenght==42){
  selectedOrganization42 ()
 } 

 else if (newUniqueLenght==43){
  selectedOrganization43 ()
 } 

 else if (newUniqueLenght==44){
  selectedOrganization44 ()
 } 

 else if (newUniqueLenght==45){
  selectedOrganization45 ()
 } 

 else if (newUniqueLenght==46){
  selectedOrganization46 ()
 } 

 else if (newUniqueLenght==47){
  selectedOrganization47 ()
 } 

 else if (newUniqueLenght==48){
  selectedOrganization48 ()
 } 

 else if (newUniqueLenght==49){
  selectedOrganization49 ()
 } 


 else if (newUniqueLenght==50){
  selectedOrganization50 ()
 } 

 else if (newUniqueLenght==51){
  selectedOrganization51 ()
 } 

 else if (newUniqueLenght==52){
  selectedOrganization52 ()
 } 

 else if (newUniqueLenght==53){
  selectedOrganization53 ()
 } 

 else if (newUniqueLenght==54){
  selectedOrganization54 ()
 } 

 else if (newUniqueLenght==55){
  selectedOrganization55 ()
 } 

 else if (newUniqueLenght==56){
  selectedOrganization56 ()
 } 

 else if (newUniqueLenght==57){
  selectedOrganization57 ()
 } 

 else if (newUniqueLenght==58){
  selectedOrganization58 ()
 } 

 else if (newUniqueLenght==59){
  selectedOrganization59 ()
 } 


 else if (newUniqueLenght==60){
  selectedOrganization60 ()
 } 

 else if (newUniqueLenght==61){
  selectedOrganization61 ()
 } 

 else if (newUniqueLenght==62){
  selectedOrganization62 ()
 } 

 else if (newUniqueLenght==63){
  selectedOrganization63 ()
 } 

 else if (newUniqueLenght==64){
  selectedOrganization64 ()
 } 

 else if (newUniqueLenght==65){
  selectedOrganization65 ()
 } 

 else if (newUniqueLenght==66){
  selectedOrganization66 ()
 } 

 else if (newUniqueLenght==67){
  selectedOrganization67 ()
 } 

 else if (newUniqueLenght==68){
  selectedOrganization68 ()
 } 

 else if (newUniqueLenght==69){
  selectedOrganization69 ()
 } 

 else if (newUniqueLenght==70){
  selectedOrganization70 ()
 } 

 else if (newUniqueLenght==71){
  selectedOrganization71 ()
 } 

 else if (newUniqueLenght==72){
  selectedOrganization72 ()
 } 

 else if (newUniqueLenght==73){
  selectedOrganization73 ()
 } 

 else if (newUniqueLenght==74){
  selectedOrganization74 ()
 } 

 else if (newUniqueLenght==75){
  selectedOrganization75 ()
 } 

 else if (newUniqueLenght==76){
  selectedOrganization76 ()
 } 

 else if (newUniqueLenght==77){
  selectedOrganization77 ()
 } 

 else if (newUniqueLenght==78){
  selectedOrganization78 ()
 } 

 else if (newUniqueLenght==79){
  selectedOrganization79 ()
 } 

 else if (newUniqueLenght==80){
  selectedOrganization80 ()
 } 

 else if (newUniqueLenght==81){
  selectedOrganization81 ()
 } 

 else if (newUniqueLenght==82){
  selectedOrganization82 ()
 } 

 else if (newUniqueLenght==83){
  selectedOrganization83 ()
 } 

 else if (newUniqueLenght==84){
  selectedOrganization84 ()
 } 

 else if (newUniqueLenght==85){
  selectedOrganization85 ()
 } 

 else if (newUniqueLenght==86){
  selectedOrganization86 ()
 } 

 else if (newUniqueLenght==87){
  selectedOrganization87 ()
 } 

 else if (newUniqueLenght==88){
  selectedOrganization88 ()
 } 

 else if (newUniqueLenght==89){
  selectedOrganization89 ()
 } 

 else if (newUniqueLenght==90){
  selectedOrganization90 ()
 } 

 else if (newUniqueLenght==91){
  selectedOrganization91 ()
 } 

 else if (newUniqueLenght==92){
  selectedOrganization92 ()
 } 

 else if (newUniqueLenght==93){
  selectedOrganization93 ()
 } 

 else if (newUniqueLenght==94){
  selectedOrganization94 ()
 } 

 else if (newUniqueLenght==95){
  selectedOrganization95 ()
 } 

 else if (newUniqueLenght==96){
  selectedOrganization96 ()
 } 

 else if (newUniqueLenght==97){
  selectedOrganization97 ()
 } 

 else if (newUniqueLenght==98){
  selectedOrganization98 ()
 } 

 else if (newUniqueLenght==99){
  selectedOrganization99 ()
 } 

 else if (newUniqueLenght==100){
  selectedOrganization100 ()
 
} 

}




function displayingWork0(){
  organiz0();
  }
  
  function displayingWork1(){
      displayingWork0()
      organiz1();}
  
  function displayingWork2(){
      displayingWork1()
      organiz2();};
  
  function displayingWork3(){
      displayingWork2()
      organiz3();}
  
  function displayingWork4(){
      displayingWork3()
      organiz4();} 
      
  function displayingWork5(){
      displayingWork4()
      organiz5();} 
  
  function displayingWork6(){
      displayingWork5()
      organiz6();}
  
  function displayingWork7(){
      displayingWork6()
      organiz7();}
  
  function displayingWork8(){
      displayingWork7()
      organiz8();}

  function displayingWork9(){
      displayingWork8()
      organiz9();}
      
function displayingWork10(){
      displayingWork9()
      organiz10();}

function displayingWork11(){
      displayingWork10()
      organiz11();}

function displayingWork12(){
      displayingWork11()
      organiz12();}

function displayingWork13(){
      displayingWork12()
      organiz13();}

function displayingWork14(){
      displayingWork13()
      organiz14();}

function displayingWork15(){
      displayingWork14()
      organiz15();}

function displayingWork16(){
      displayingWork15()
      organiz16();}

function displayingWork17(){
      displayingWork16()
      organiz17();}

function displayingWork18(){
      displayingWork17()
      organiz18();}
      
function displayingWork19(){
  displayingWork18()
  organiz19();}
  
function displayingWork20(){
  displayingWork19()
  organiz20();}
  
function displayingWork21(){
  displayingWork20()
  organiz21();}
  
function displayingWork22(){
  displayingWork21()
  organiz22();}
  
function displayingWork23(){
  displayingWork22()
  organiz23();}
  
function displayingWork24(){
  displayingWork23()
  organiz24();}
  
function displayingWork25(){
  displayingWork24()
  organiz25();}
  
function displayingWork26(){
  displayingWork25()
  organiz26();}
  
function displayingWork27(){
  displayingWork26()
  organiz27();}
  
function displayingWork28(){
  displayingWork27()
  organiz28();}
  
function displayingWork29(){
  displayingWork28()
  organiz29();}
  
function displayingWork30(){
  displayingWork29()
  organiz30();}

  function displayingWork31(){
      displayingWork30()
      organiz31();}
      
  function displayingWork32(){
      displayingWork31()
      organiz32();}
      
  function displayingWork33(){
      displayingWork32()
      organiz33();}
      
  function displayingWork34(){
      displayingWork33()
      organiz34();}
      
  function displayingWork35(){
      displayingWork34()
      organiz35();}
      
  function displayingWork36(){
      displayingWork35()
      organiz36();}
      
  function displayingWork37(){
      displayingWork36()
      organiz37();}
      
  function displayingWork38(){
      displayingWork37()
      organiz38();}
      
  function displayingWork39(){
      displayingWork38()
      organiz39();}
      
  function displayingWork40(){
      displayingWork39()
      organiz40();}

  function displayingWork41(){
  displayingWork40()
  organiz41();}
  
function displayingWork42(){
  displayingWork41()
  organiz42();}
  
function displayingWork43(){
  displayingWork42()
  organiz43();}
  
function displayingWork44(){
  displayingWork43()
  organiz44();}
  
function displayingWork45(){
  displayingWork44()
  organiz45();}
  
function displayingWork46(){
  displayingWork45()
  organiz46();}
  
function displayingWork47(){
  displayingWork46()
  organiz47();}
  
function displayingWork48(){
  displayingWork47()
  organiz48();}
  
function displayingWork49(){
  displayingWork48()
  organiz49();}
  
function displayingWork50(){
  displayingWork49()
  organiz50();}

  function displayingWork51(){
      displayingWork50()
      organiz51();}
      
  function displayingWork52(){
      displayingWork51()
      organiz52();}
      
  function displayingWork53(){
      displayingWork52()
      organiz53();}
      
  function displayingWork54(){
      displayingWork53()
      organiz54();}
      
  function displayingWork55(){
      displayingWork54()
      organiz55();}
      
  function displayingWork56(){
      displayingWork55()
      organiz56();}
      
  function displayingWork57(){
      displayingWork56()
      organiz57();}
      
  function displayingWork58(){
      displayingWork57()
      organiz58();}
      
  function displayingWork59(){
      displayingWork58()
      organiz59();}
      
  function displayingWork60(){
      displayingWork59()
      organiz60();}

function displayingWork61(){
  displayingWork60()
  organiz61();}
  
function displayingWork62(){
  displayingWork61()
  organiz62();}
  
function displayingWork63(){
  displayingWork62()
  organiz63();}
  
function displayingWork64(){
  displayingWork63()
  organiz64();}
  
function displayingWork65(){
  displayingWork64()
  organiz65();}
  
function displayingWork66(){
  displayingWork65()
  organiz66();}
  
function displayingWork67(){
  displayingWork66()
  organiz67();}
  
function displayingWork68(){
  displayingWork67()
  organiz68();}
  
function displayingWork69(){
  displayingWork68()
  organiz69();}
  
function displayingWork70(){
  displayingWork69()
  organiz70();}

function displayingWork71(){
  displayingWork70()
  organiz71();}
  
function displayingWork72(){
  displayingWork71()
  organiz72();}
  
function displayingWork73(){
  displayingWork72()
  organiz73();}
  
function displayingWork74(){
  displayingWork73()
  organiz74();}
  
function displayingWork75(){
  displayingWork74()
  organiz75();}
  
function displayingWork76(){
  displayingWork75()
  organiz76();}
  
function displayingWork77(){
  displayingWork76()
  organiz77();}
  
function displayingWork78(){
  displayingWork77()
  organiz78();}
  
function displayingWork79(){
  displayingWork78()
  organiz79();}
  
function displayingWork80(){
  displayingWork79()
  organiz80();}

function displayingWork81(){
  displayingWork80()
  organiz81();}
  
function displayingWork82(){
  displayingWork81()
  organiz82();}
  
function displayingWork83(){
  displayingWork82()
  organiz83();}
  
function displayingWork84(){
  displayingWork83()
  organiz84();}
  
function displayingWork85(){
  displayingWork84()
  organiz85();}
  
function displayingWork86(){
  displayingWork85()
  organiz86();}
  
function displayingWork87(){
  displayingWork86()
  organiz87();}
  
function displayingWork88(){
  displayingWork87()
  organiz88();}
  
function displayingWork89(){
  displayingWork88()
  organiz89();}
  
function displayingWork90(){
  displayingWork89()
  organiz90();}
  
function displayingWork91(){
  displayingWork90()
  organiz91();}
  
function displayingWork92(){
  displayingWork91()
  organiz92();}
  
function displayingWork93(){
  displayingWork92()
  organiz93();}
  
function displayingWork94(){
  displayingWork93()
  organiz94();}
  
function displayingWork95(){
  displayingWork94()
  organiz95();}
  
function displayingWork96(){
  displayingWork95()
  organiz96();}
  
function displayingWork97(){
  displayingWork96()
  organiz97();}
  
function displayingWork98(){
  displayingWork97()
  organiz98();}
  
function displayingWork99(){
  displayingWork98()
  organiz99();}
  
function displayingWork100(){
  displayingWork99()
  organiz100();};

  //hiding checkboxes when deleting starts//
function hideIdiotCheckbox0(){
  checkboxHide0();
  }
  
  function hideIdiotCheckbox1(){
      hideIdiotCheckbox0()
      checkboxHide1();}
  
  function hideIdiotCheckbox2(){
      hideIdiotCheckbox1()
      checkboxHide2();};
  
  function hideIdiotCheckbox3(){
      hideIdiotCheckbox2()
      checkboxHide3();}
  
  function hideIdiotCheckbox4(){
      hideIdiotCheckbox3()
      checkboxHide4();} 
      
  function hideIdiotCheckbox5(){
      hideIdiotCheckbox4()
      checkboxHide5();} 
  
  function hideIdiotCheckbox6(){
      hideIdiotCheckbox5()
      checkboxHide6();}
  
  function hideIdiotCheckbox7(){
      hideIdiotCheckbox6()
      checkboxHide7();}
  
  function hideIdiotCheckbox8(){
      hideIdiotCheckbox7()
      checkboxHide8();}

  function hideIdiotCheckbox9(){
      hideIdiotCheckbox8()
      checkboxHide9();}
      
function hideIdiotCheckbox10(){
      hideIdiotCheckbox9()
      checkboxHide10();}

function hideIdiotCheckbox11(){
      hideIdiotCheckbox10()
      checkboxHide11();}

function hideIdiotCheckbox12(){
      hideIdiotCheckbox11()
      checkboxHide12();}

function hideIdiotCheckbox13(){
      hideIdiotCheckbox12()
      checkboxHide13();}

function hideIdiotCheckbox14(){
      hideIdiotCheckbox13()
      checkboxHide14();}

function hideIdiotCheckbox15(){
      hideIdiotCheckbox14()
      checkboxHide15();}

function hideIdiotCheckbox16(){
      hideIdiotCheckbox15()
      checkboxHide16();}

function hideIdiotCheckbox17(){
      hideIdiotCheckbox16()
      checkboxHide17();}

function hideIdiotCheckbox18(){
      hideIdiotCheckbox17()
      checkboxHide18();}
      
function hideIdiotCheckbox19(){
  hideIdiotCheckbox18()
  checkboxHide19();}
  
function hideIdiotCheckbox20(){
  hideIdiotCheckbox19()
  checkboxHide20();}
  
function hideIdiotCheckbox21(){
  hideIdiotCheckbox20()
  checkboxHide21();}
  
function hideIdiotCheckbox22(){
  hideIdiotCheckbox21()
  checkboxHide22();}
  
function hideIdiotCheckbox23(){
  hideIdiotCheckbox22()
  checkboxHide23();}
  
function hideIdiotCheckbox24(){
  hideIdiotCheckbox23()
  checkboxHide24();}
  
function hideIdiotCheckbox25(){
  hideIdiotCheckbox24()
  checkboxHide25();}
  
function hideIdiotCheckbox26(){
  hideIdiotCheckbox25()
  checkboxHide26();}
  
function hideIdiotCheckbox27(){
  hideIdiotCheckbox26()
  checkboxHide27();}
  
function hideIdiotCheckbox28(){
  hideIdiotCheckbox27()
  checkboxHide28();}
  
function hideIdiotCheckbox29(){
  hideIdiotCheckbox28()
  checkboxHide29();}
  
function hideIdiotCheckbox30(){
  hideIdiotCheckbox29()
  checkboxHide30();}

  function hideIdiotCheckbox31(){
      hideIdiotCheckbox30()
      checkboxHide31();}
      
  function hideIdiotCheckbox32(){
      hideIdiotCheckbox31()
      checkboxHide32();}
      
  function hideIdiotCheckbox33(){
      hideIdiotCheckbox32()
      checkboxHide33();}
      
  function hideIdiotCheckbox34(){
      hideIdiotCheckbox33()
      checkboxHide34();}
      
  function hideIdiotCheckbox35(){
      hideIdiotCheckbox34()
      checkboxHide35();}
      
  function hideIdiotCheckbox36(){
      hideIdiotCheckbox35()
      checkboxHide36();}
      
  function hideIdiotCheckbox37(){
      hideIdiotCheckbox36()
      checkboxHide37();}
      
  function hideIdiotCheckbox38(){
      hideIdiotCheckbox37()
      checkboxHide38();}
      
  function hideIdiotCheckbox39(){
      hideIdiotCheckbox38()
      checkboxHide39();}
      
  function hideIdiotCheckbox40(){
      hideIdiotCheckbox39()
      checkboxHide40();}

  function hideIdiotCheckbox41(){
  hideIdiotCheckbox40()
  checkboxHide41();}
  
function hideIdiotCheckbox42(){
  hideIdiotCheckbox41()
  checkboxHide42();}
  
function hideIdiotCheckbox43(){
  hideIdiotCheckbox42()
  checkboxHide43();}
  
function hideIdiotCheckbox44(){
  hideIdiotCheckbox43()
  checkboxHide44();}
  
function hideIdiotCheckbox45(){
  hideIdiotCheckbox44()
  checkboxHide45();}
  
function hideIdiotCheckbox46(){
  hideIdiotCheckbox45()
  checkboxHide46();}
  
function hideIdiotCheckbox47(){
  hideIdiotCheckbox46()
  checkboxHide47();}
  
function hideIdiotCheckbox48(){
  hideIdiotCheckbox47()
  checkboxHide48();}
  
function hideIdiotCheckbox49(){
  hideIdiotCheckbox48()
  checkboxHide49();}
  
function hideIdiotCheckbox50(){
  hideIdiotCheckbox49()
  checkboxHide50();}

  function hideIdiotCheckbox51(){
      hideIdiotCheckbox50()
      checkboxHide51();}
      
  function hideIdiotCheckbox52(){
      hideIdiotCheckbox51()
      checkboxHide52();}
      
  function hideIdiotCheckbox53(){
      hideIdiotCheckbox52()
      checkboxHide53();}
      
  function hideIdiotCheckbox54(){
      hideIdiotCheckbox53()
      checkboxHide54();}
      
  function hideIdiotCheckbox55(){
      hideIdiotCheckbox54()
      checkboxHide55();}
      
  function hideIdiotCheckbox56(){
      hideIdiotCheckbox55()
      checkboxHide56();}
      
  function hideIdiotCheckbox57(){
      hideIdiotCheckbox56()
      checkboxHide57();}
      
  function hideIdiotCheckbox58(){
      hideIdiotCheckbox57()
      checkboxHide58();}
      
  function hideIdiotCheckbox59(){
      hideIdiotCheckbox58()
      checkboxHide59();}
      
  function hideIdiotCheckbox60(){
      hideIdiotCheckbox59()
      checkboxHide60();}

function hideIdiotCheckbox61(){
  hideIdiotCheckbox60()
  checkboxHide61();}
  
function hideIdiotCheckbox62(){
  hideIdiotCheckbox61()
  checkboxHide62();}
  
function hideIdiotCheckbox63(){
  hideIdiotCheckbox62()
  checkboxHide63();}
  
function hideIdiotCheckbox64(){
  hideIdiotCheckbox63()
  checkboxHide64();}
  
function hideIdiotCheckbox65(){
  hideIdiotCheckbox64()
  checkboxHide65();}
  
function hideIdiotCheckbox66(){
  hideIdiotCheckbox65()
  checkboxHide66();}
  
function hideIdiotCheckbox67(){
  hideIdiotCheckbox66()
  checkboxHide67();}
  
function hideIdiotCheckbox68(){
  hideIdiotCheckbox67()
  checkboxHide68();}
  
function hideIdiotCheckbox69(){
  hideIdiotCheckbox68()
  checkboxHide69();}
  
function hideIdiotCheckbox70(){
  hideIdiotCheckbox69()
  checkboxHide70();}

function hideIdiotCheckbox71(){
  hideIdiotCheckbox70()
  checkboxHide71();}
  
function hideIdiotCheckbox72(){
  hideIdiotCheckbox71()
  checkboxHide72();}
  
function hideIdiotCheckbox73(){
  hideIdiotCheckbox72()
  checkboxHide73();}
  
function hideIdiotCheckbox74(){
  hideIdiotCheckbox73()
  checkboxHide74();}
  
function hideIdiotCheckbox75(){
  hideIdiotCheckbox74()
  checkboxHide75();}
  
function hideIdiotCheckbox76(){
  hideIdiotCheckbox75()
  checkboxHide76();}
  
function hideIdiotCheckbox77(){
  hideIdiotCheckbox76()
  checkboxHide77();}
  
function hideIdiotCheckbox78(){
  hideIdiotCheckbox77()
  checkboxHide78();}
  
function hideIdiotCheckbox79(){
  hideIdiotCheckbox78()
  checkboxHide79();}
  
function hideIdiotCheckbox80(){
  hideIdiotCheckbox79()
  checkboxHide80();}

function hideIdiotCheckbox81(){
  hideIdiotCheckbox80()
  checkboxHide81();}
  
function hideIdiotCheckbox82(){
  hideIdiotCheckbox81()
  checkboxHide82();}
  
function hideIdiotCheckbox83(){
  hideIdiotCheckbox82()
  checkboxHide83();}
  
function hideIdiotCheckbox84(){
  hideIdiotCheckbox83()
  checkboxHide84();}
  
function hideIdiotCheckbox85(){
  hideIdiotCheckbox84()
  checkboxHide85();}
  
function hideIdiotCheckbox86(){
  hideIdiotCheckbox85()
  checkboxHide86();}
  
function hideIdiotCheckbox87(){
  hideIdiotCheckbox86()
  checkboxHide87();}
  
function hideIdiotCheckbox88(){
  hideIdiotCheckbox87()
  checkboxHide88();}
  
function hideIdiotCheckbox89(){
  hideIdiotCheckbox88()
  checkboxHide89();}
  
function hideIdiotCheckbox90(){
  hideIdiotCheckbox89()
  checkboxHide90();}
  
function hideIdiotCheckbox91(){
  hideIdiotCheckbox90()
  checkboxHide91();}
  
function hideIdiotCheckbox92(){
  hideIdiotCheckbox91()
  checkboxHide92();}
  
function hideIdiotCheckbox93(){
  hideIdiotCheckbox92()
  checkboxHide93();}
  
function hideIdiotCheckbox94(){
  hideIdiotCheckbox93()
  checkboxHide94();}
  
function hideIdiotCheckbox95(){
  hideIdiotCheckbox94()
  checkboxHide95();}
  
function hideIdiotCheckbox96(){
  hideIdiotCheckbox95()
  checkboxHide96();}
  
function hideIdiotCheckbox97(){
  hideIdiotCheckbox96()
  checkboxHide97();}
  
function hideIdiotCheckbox98(){
  hideIdiotCheckbox97()
  checkboxHide98();}
  
function hideIdiotCheckbox99(){
  hideIdiotCheckbox98()
  checkboxHide99();}
  
function hideIdiotCheckbox100(){
  hideIdiotCheckbox99()
  checkboxHide100();};

  
  
  
  
function hidingCheckboxed () {

  if (newUniqueLenght==0){
    hideIdiotCheckbox0 () }
  
   else if (newUniqueLenght==1){
      hideIdiotCheckbox1 () }
  
  else if (newUniqueLenght==2){
      hideIdiotCheckbox2 () }
  
  else if (newUniqueLenght==3){
      hideIdiotCheckbox3 () }
  
  else if (newUniqueLenght==3){
      hideIdiotCheckbox3 () }
   
  else if (newUniqueLenght==4){
      hideIdiotCheckbox4 () }
  
  else if (newUniqueLenght==5){
      hideIdiotCheckbox5 () }
   
  else if (newUniqueLenght==6){
      hideIdiotCheckbox6 () }
  
  else if (newUniqueLenght==7){
      hideIdiotCheckbox7 () }
   
  else if (newUniqueLenght==8){
      hideIdiotCheckbox8 () }
   
  else if (newUniqueLenght==9){
      hideIdiotCheckbox9 () }
  
  else if (newUniqueLenght==10){
      hideIdiotCheckbox10 () }
  
   else if (newUniqueLenght==11){
    hideIdiotCheckbox11 ()
   } 
  
   else if (newUniqueLenght==12){
    hideIdiotCheckbox12 ()
   } 
  
   else if (newUniqueLenght==13){
    hideIdiotCheckbox13 ()
   } 
  
   else if (newUniqueLenght==14){
    hideIdiotCheckbox14 ()
   } 
  
   else if (newUniqueLenght==15){
    hideIdiotCheckbox15 ()
   } 
  
   else if (newUniqueLenght==16){
    hideIdiotCheckbox16 ()
   } 
  
   else if (newUniqueLenght==17){
    hideIdiotCheckbox17 ()
   } 
  
   else if (newUniqueLenght==18){
    hideIdiotCheckbox18 ()
   } 
  
   else if (newUniqueLenght==19){
    hideIdiotCheckbox19 ()
   } 
  
   else if (newUniqueLenght==20){
    hideIdiotCheckbox20 ()
   } 
  
  
   else if (newUniqueLenght==21){
    hideIdiotCheckbox21 ()
   } 
  
   else if (newUniqueLenght==22){
    hideIdiotCheckbox22 ()
   } 
  
   else if (newUniqueLenght==23){
    hideIdiotCheckbox23 ()
   } 
  
   else if (newUniqueLenght==24){
    hideIdiotCheckbox24 ()
   } 
  
   else if (newUniqueLenght==25){
    hideIdiotCheckbox25 ()
   } 
  
   else if (newUniqueLenght==26){
    hideIdiotCheckbox26 ()
   } 
  
   else if (newUniqueLenght==27){
    hideIdiotCheckbox27 ()
   } 
  
   else if (newUniqueLenght==28){
    hideIdiotCheckbox28 ()
   } 
  
   else if (newUniqueLenght==29){
    hideIdiotCheckbox29 ()
   } 
  
  
   else if (newUniqueLenght==30){
    hideIdiotCheckbox30 ()
   } 
  
   else if (newUniqueLenght==31){
    hideIdiotCheckbox31 ()
   } 
  
   else if (newUniqueLenght==32){
    hideIdiotCheckbox32 ()
   } 
  
   else if (newUniqueLenght==33){
    hideIdiotCheckbox33 ()
   } 
  
   else if (newUniqueLenght==34){
    hideIdiotCheckbox34 ()
   } 
  
   else if (newUniqueLenght==35){
    hideIdiotCheckbox35 ()
   } 
  
   else if (newUniqueLenght==36){
    hideIdiotCheckbox36 ()
   } 
  
   else if (newUniqueLenght==37){
    hideIdiotCheckbox37 ()
   } 
  
   else if (newUniqueLenght==38){
    hideIdiotCheckbox38 ()
   } 
  
   else if (newUniqueLenght==39){
    hideIdiotCheckbox39 ()
   } 
  
   else if (newUniqueLenght==40){
    hideIdiotCheckbox40 ()
   } 
  
   else if (newUniqueLenght==41){
    hideIdiotCheckbox41 ()
   } 
  
   else if (newUniqueLenght==42){
    hideIdiotCheckbox42 ()
   } 
  
   else if (newUniqueLenght==43){
    hideIdiotCheckbox43 ()
   } 
  
   else if (newUniqueLenght==44){
    hideIdiotCheckbox44 ()
   } 
  
   else if (newUniqueLenght==45){
    hideIdiotCheckbox45 ()
   } 
  
   else if (newUniqueLenght==46){
    hideIdiotCheckbox46 ()
   } 
  
   else if (newUniqueLenght==47){
    hideIdiotCheckbox47 ()
   } 
  
   else if (newUniqueLenght==48){
    hideIdiotCheckbox48 ()
   } 
  
   else if (newUniqueLenght==49){
    hideIdiotCheckbox49 ()
   } 
  
  
   else if (newUniqueLenght==50){
    hideIdiotCheckbox50 ()
   } 
  
   else if (newUniqueLenght==51){
    hideIdiotCheckbox51 ()
   } 
  
   else if (newUniqueLenght==52){
    hideIdiotCheckbox52 ()
   } 
  
   else if (newUniqueLenght==53){
    hideIdiotCheckbox53 ()
   } 
  
   else if (newUniqueLenght==54){
    hideIdiotCheckbox54 ()
   } 
  
   else if (newUniqueLenght==55){
    hideIdiotCheckbox55 ()
   } 
  
   else if (newUniqueLenght==56){
    hideIdiotCheckbox56 ()
   } 
  
   else if (newUniqueLenght==57){
    hideIdiotCheckbox57 ()
   } 
  
   else if (newUniqueLenght==58){
    hideIdiotCheckbox58 ()
   } 
  
   else if (newUniqueLenght==59){
    hideIdiotCheckbox59 ()
   } 
  
  
   else if (newUniqueLenght==60){
    hideIdiotCheckbox60 ()
   } 
  
   else if (newUniqueLenght==61){
    hideIdiotCheckbox61 ()
   } 
  
   else if (newUniqueLenght==62){
    hideIdiotCheckbox62 ()
   } 
  
   else if (newUniqueLenght==63){
    hideIdiotCheckbox63 ()
   } 
  
   else if (newUniqueLenght==64){
    hideIdiotCheckbox64 ()
   } 
  
   else if (newUniqueLenght==65){
    hideIdiotCheckbox65 ()
   } 
  
   else if (newUniqueLenght==66){
    hideIdiotCheckbox66 ()
   } 
  
   else if (newUniqueLenght==67){
    hideIdiotCheckbox67 ()
   } 
  
   else if (newUniqueLenght==68){
    hideIdiotCheckbox68 ()
   } 
  
   else if (newUniqueLenght==69){
    hideIdiotCheckbox69 ()
   } 
  
   else if (newUniqueLenght==70){
    hideIdiotCheckbox70 ()
   } 
  
   else if (newUniqueLenght==71){
    hideIdiotCheckbox71 ()
   } 
  
   else if (newUniqueLenght==72){
    hideIdiotCheckbox72 ()
   } 
  
   else if (newUniqueLenght==73){
    hideIdiotCheckbox73 ()
   } 
  
   else if (newUniqueLenght==74){
    hideIdiotCheckbox74 ()
   } 
  
   else if (newUniqueLenght==75){
    hideIdiotCheckbox75 ()
   } 
  
   else if (newUniqueLenght==76){
    hideIdiotCheckbox76 ()
   } 
  
   else if (newUniqueLenght==77){
    hideIdiotCheckbox77 ()
   } 
  
   else if (newUniqueLenght==78){
    hideIdiotCheckbox78 ()
   } 
  
   else if (newUniqueLenght==79){
    hideIdiotCheckbox79 ()
   } 
  
   else if (newUniqueLenght==80){
    hideIdiotCheckbox80 ()
   } 
  
   else if (newUniqueLenght==81){
    hideIdiotCheckbox81 ()
   } 
  
   else if (newUniqueLenght==82){
    hideIdiotCheckbox82 ()
   } 
  
   else if (newUniqueLenght==83){
    hideIdiotCheckbox83 ()
   } 
  
   else if (newUniqueLenght==84){
    hideIdiotCheckbox84 ()
   } 
  
   else if (newUniqueLenght==85){
    hideIdiotCheckbox85 ()
   } 
  
   else if (newUniqueLenght==86){
    hideIdiotCheckbox86 ()
   } 
  
   else if (newUniqueLenght==87){
    hideIdiotCheckbox87 ()
   } 
  
   else if (newUniqueLenght==88){
    hideIdiotCheckbox88 ()
   } 
  
   else if (newUniqueLenght==89){
    hideIdiotCheckbox89 ()
   } 
  
   else if (newUniqueLenght==90){
    hideIdiotCheckbox90 ()
   } 
  
   else if (newUniqueLenght==91){
    hideIdiotCheckbox91 ()
   } 
  
   else if (newUniqueLenght==92){
    hideIdiotCheckbox92 ()
   } 
  
   else if (newUniqueLenght==93){
    hideIdiotCheckbox93 ()
   } 
  
   else if (newUniqueLenght==94){
    hideIdiotCheckbox94 ()
   } 
  
   else if (newUniqueLenght==95){
    hideIdiotCheckbox95 ()
   } 
  
   else if (newUniqueLenght==96){
    hideIdiotCheckbox96 ()
   } 
  
   else if (newUniqueLenght==97){
    hideIdiotCheckbox97 ()
   } 
  
   else if (newUniqueLenght==98){
    hideIdiotCheckbox98 ()
   } 
  
   else if (newUniqueLenght==99){
    hideIdiotCheckbox99 ()
   } 
  
   else if (newUniqueLenght==100){
    hideIdiotCheckbox100 ()
   
  } 

}


//showing parts of html page after 4s//
function stabilized (){
if (stabilizedEl.style.display === "none") {
  stabilizedEl.style.display = "block";

} else {
  stabilizedEl.style.display = "block";


}   
  

 
};


