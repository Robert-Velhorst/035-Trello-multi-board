
let emailValue1 =[];
let stringedId
let idFinally;
let data;
let lenghtID;
let errorMes; let errorMes2;
let Fetch13
let getId4; let getId3;
let seriaNo;

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

const apiToken = '2ebc1d7d22cebcbb4b31049c25b34b0ccf2211b7e67e864f61b84a90ef9f23b5'
const apiKey = 'eda71c6538a148f072216a00d82c07e9'


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
        console.log("error")
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
  
  function lenghtIDCheck(){
      if (lenghtID){
          serviceErrorEl.innerHTML = '';
          serviceErrorEl2.innerHTML = '';
          successEl.innerHTML = `Enter email to be added`
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


//clearing local storage//

let okayEl = document.querySelector("#okay");
let cancelEl = document.querySelector("#cancel");




cancelEl.addEventListener("click", function(){
    cancelLocal ()
})

okayEl.addEventListener("click", function(){
  cancelLocal ()
})

function cancelLocal (){
    localStorage.clear()
    reloading()
}

let slider = document.getElementById("progressBar");
let progress = document.getElementById("progress");
let button = document.getElementById("myButton");

let speed = 1;

let widthBar = parseInt(window.getComputedStyle(progress).width);
let widthProgress = parseInt(window.getComputedStyle(slider).width);
let realLenght;

let result = Math.round((widthBar/widthProgress)*100);



//visibilities hiding//
function RefreshButtonShow (){
  if (refreshEl.style. visibility === "hidden") {
    refreshEl.style. visibility = "visible";
  } else {
    refreshEl.style. visibility = "visible";
  }   
}

function DeleteButtonShow (){
  if (submitEl.style. visibility === "hidden") {
    submitEl.style. visibility = "visible";
  } else {
    submitEl.style. visibility = "visible";
  }   
}


function HideDeleteButton (){
  if (submitEl.style. visibility === "visible") {
    submitEl.style. visibility = "hidden";
  } else {
    submitEl.style. visibility = "hidden";
  }   
}

function HideRefreshButton (){
  if (refreshEl.style. visibility === "visible") {
    refreshEl.style. visibility = "hidden";
  } else {
    refreshEl.style. visibility = "hidden";
  }   
}


function HideAddEmailMessage (){
  if (successEl.style. visibility === "visible") {
    successEl.style. visibility = "hidden";
  } else {
    successEl.style. visibility = "hidden";
  }   
}



function inviscibleWrongMessage (){
  if (fetchingBoardsEl.style. visibility === "visible") {
    fetchingBoardsEl.style. visibility = "hidden";
  } else {
    fetchingBoardsEl.style. visibility = "hidden";
  }   
}

function inviscibleAdmail (){
    if (emailEmptyErr.style. visibility === "visible") {
      emailEmptyErr.style. visibility = "hidden";
    } else {
      emailEmptyErr.style. visibility = "hidden";
    }   
  }


function cancelBar(){
    if (cancelEl.style. visibility === "hidden") {
      cancelEl.style. visibility = "visible";
    } else {
      cancelEl.style. visibility = "visible";
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




  function cancelnoBar(){
    if (cancelEl.style. visibility === "visible") {
      cancelEl.style. visibility = "hidden";
    } else {
      cancelEl.style. visibility = "hidden";
    }
   
  }

  

function okayBar(){
  if (okayEl.style. visibility === "hidden") {
    okayEl.style. visibility = "visible";
  } else {
    okayEl.style. visibility = "visible";
  }
 
}



function negokayBar(){
    if (okayEl.style. visibility === "visible") {
      okayEl.style. visibility = "hidden";
    } else {
      okayEl.style. visibility = "hidden";
    }
   
  }

  negokayBar()

let serialNo
let hideContent = document.querySelector("#hidecontents")


let div = document.querySelector("#container");

  function hideProgressBar(){
    if (div.style. visibility === "hidden") {
      div.style. visibility = "visible";
    } else {
      div.style. visibility = "visible";
    }
   
  }
  

  function move() { 
    HideRefreshButton ()
    HideRefreshButton()
     hideProgressBar()  
      setInterval(addFrame, 5*32);
      function addFrame() {
          if (result < 100) {
              result = result + speed;
              progress.style.width = result + "%";
              progress.innerHTML = result + "%";
          }
        }
      }
  

//Refresh button//

refreshEl.addEventListener("click", function(){

    localStorage.clear()
    
window.location.reload();
return false;


}
)

let emailb
let emaila  

let localStorageemailB = JSON.parse(localStorage.getItem("emailerrb")) 

//Main Add Button// 

submitEl.addEventListener("click", function (){
  
    localStorage.clear()
    emailValue1.push(emailEl.value)

    for( let i = 0; i <emailValue1.length; i++){

            emailValue = (emailValue1[i])

    }

   

if (emailValue == [] || emailValue == '' ){
  emaila = 'stop';
  emailb = ' now'

   emailEmptyErr.innerHTML = `Username is Empty.`
   emailEmptyErr2.innerHTML =`Enter a valid Username`
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   successEl.innerHTML = ''
   fetchingBoardsEl.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''

   window.onload = ''

   localStorage.setItem("emailerr", JSON.stringify(emaila))
   localStorage.setItem("emailerrb", JSON.stringify(emailb))
   
}

  else{

    HideDeleteButton()
    Fetch0 ()
  }
    emailEl.value =""
    console.log(emailValue)
   
    
});



//Fetching Workspaces ID//
 function Fetch0 () {
  HideDeleteButton()

    
async function  fetchworkspace0(){
    seriaNo = 1
    HideDeleteButton()
   
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
    )


    HideDeleteButton();
   
     data = await response.json()
     realLenght = data.length
    lenghtID = (data.length) -1
    durationFetching = (seriaNo * 0.8) + 3;
    console.log(data)
    console.log(realLenght)
    hideContentswhenLoading ()
    move ()

    
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
         
         
      function FinalCheckingId () {
         if (newUniqueLenght==0){
             serialNo = 1;
             setTimeout(() => {
              
               Fetch0 ();
             }, serialNo*0); } 
     
         else if (newUniqueLenght==1){
             serialNo = 2;
                 
             setTimeout(() => {
              
               Fetch0 (); Fetch1 ();
             }, serialNo*0); } 
          
             else if (newUniqueLenght==2){
                serialNo = 3;
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); 
             }, serialNo*0); } 
          
             else if (newUniqueLenght==3){
                serialNo = 4
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 ();
             }, serialNo*0); } 
          
             else if (newUniqueLenght==4){
                serialNo=5
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 ();
             }, serialNo*0); } 
          
             else if (newUniqueLenght==5){
                serialNo=6
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 ()
             }, serialNo*0); } 
          
             else if (newUniqueLenght==6){
                serialNo = 7
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             }, serialNo*0); } 
          
             else if (newUniqueLenght==7){
                serialNo=8
              
             setTimeout(() => {
              
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 ();
             }, serialNo*0); } 
          
             else if (newUniqueLenght==8){
                serialNo=9
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 ();
             }, serialNo*0); } 
          
             else if (newUniqueLenght==9){
                serialNo = 10;
              
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==10){
                serialNo= 11;
     
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==11){
                serialNo =12;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==12){
                serialNo = 13
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==13){
                serialNo =14;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==14){
                serialNo =15
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 ();
             }, 13120); } 
          
             else if (newUniqueLenght==15){
                serialNo =16;
     
             setTimeout(() => {
              
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==16){
                serialNo =17;
     
             
             setTimeout(() => {
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==17){
          
                serialNo =18;
             
             setTimeout(() => {
               
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             },   serialNo *0); } 
           
          
             else if (newUniqueLenght==18){
                
                serialNo =19;
     
             setTimeout(() => {
              
            
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==19){
                serialNo =20
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==20){
                serialNo =21;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 ();
             },   serialNo *0); } 
          
          
             else if (newUniqueLenght==21){
                serialNo =22;
     
             
             setTimeout(() => {
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==22){
                serialNo = 23;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==23){
                serialNo = 24;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==24){
                serialNo = 25;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); 
             },   serialNo *0); } 
          
             else if (newUniqueLenght==25){
                serialNo =26;
          
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==26){
                serialNo= 27;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==27){
                serialNo =28;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==28){
                serialNo = 29;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==29){
                serialNo = 30;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 ();
             },   serialNo *0); } 
          
          
             else if (newUniqueLenght==30){
                serialNo =31;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==31){
                serialNo = 32;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==32){
                serialNo = 33;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==33){
                serialNo = 34;
          
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==34){
                serialNo = 35
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); 
             },   serialNo *0); } 
          
             else if (newUniqueLenght==35){
                serialNo = 36
     
             
             setTimeout(() => {
              
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); 
             },   serialNo *0); } 
          
             else if (newUniqueLenght==36){
                serialNo = 37;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==37){
                serialNo = 38;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==38){
                serialNo = 39
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==39){
                serialNo = 40;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==40){
                serialNo =41;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==41){
                serialNo = 42;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==42){
                serialNo =43;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==43){
                serialNo = 44;
     
             
             setTimeout(() => {
              
             
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==44){
                serialNo = 45;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 ();
             },   serialNo *0); } 
          
             else if (newUniqueLenght==45){
                serialNo =46;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==46){
                serialNo = 47;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==47){
                serialNo = 48;
     
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
  
             },   serialNo *0); } 
          
             else if (newUniqueLenght==48){
                serialNo = 49;
     
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); 
             },   serialNo *0); } 
          
             else if (newUniqueLenght==49){
                serialNo = 50;
             
             setTimeout(() => {
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 ();
             },   serialNo *0); } 
          
          
             else if (newUniqueLenght==50){
                serialNo = 51;    
             
             setTimeout(() => {
  
          
              
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 ();
        
               
             },   serialNo *0); } 
  
             else if (newUniqueLenght==51){
               serialNo = 52;    
            
            setTimeout(() => {
  
             
              Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
              Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
              Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
              Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
              Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
              Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
              Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
              Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
              Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
              Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 ();
       
              
            },   serialNo *0); } 
  
             
            else if (newUniqueLenght==52){
             serialNo = 53;    
          
          setTimeout(() => {
  
       
           
            Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
            Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
            Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
            Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
            Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
            Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
            Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
            Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
            Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
            Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();
     
            
          },   serialNo *0); } 
          
             
          else if (newUniqueLenght==53){
           serialNo = 54;    
        
        setTimeout(() => {
  
     
         
          Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
          Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
          Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
          Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
          Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
          Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
          Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
          Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
          Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
          Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 ();
   
          
        },   serialNo *0); }
        
             
        else if (newUniqueLenght==54){  
      
      setTimeout(() => {
  
   
       
        Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
        Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
        Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
        Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
        Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
        Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
        Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
        Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
        Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
        Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
  
        
      },   serialNo *0); }
  
             
             
      else if (newUniqueLenght==55){  
      
       setTimeout(() => {
  
    
        
         Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
         Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
         Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
         Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
         Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
         Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
         Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
         Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
         Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
         Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
         Fetch55 ();
  
         
       },   serialNo *0); }
  
                   
             
      else if (newUniqueLenght==56){  
      
       setTimeout(() => {
  
    
        
         Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
         Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
         Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
         Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
         Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
         Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
         Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
         Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
         Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
         Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
         Fetch55 (); Fetch56 ();
  
         
       },   serialNo *0); } 
                   
             
      else if (lenghtID==57){  
      
       setTimeout(() => {
  
    
        
         Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
         Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
         Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
         Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
         Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
         Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
         Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
         Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
         Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
         Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
         Fetch55 (); Fetch56 (); Fetch57 ();
  
         
       },   serialNo *0); }
  
  
       else if (lenghtID==58){  
      
         setTimeout(() => {
    
      
          
           Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
           Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
           Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
           Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
           Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
           Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
           Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
           Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
           Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
           Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
           Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 ();
    
           
         },   serialNo *0); }
  
         
  
       else if (lenghtID==59){  
      
         setTimeout(() => {
    
      
          
           Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
           Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
           Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
           Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
           Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
           Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
           Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
           Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
           Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
           Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
           Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 ();
    
           
         },   serialNo *0); }
  
         else if (lenghtID==60){  
      
           setTimeout(() => {
      
        
            
             Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
             Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
             Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
             Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
             Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 ();
      
             
           },   serialNo *0); }
                  
  
           
         else if (lenghtID==61){  
      
           setTimeout(() => {
      
        
            
             Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
             Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
             Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
             Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
             Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
      
             
           },   serialNo *0); }
  
           
           
         else if (lenghtID==62){  
      
           setTimeout(() => {
      
        
            
             Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
             Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
             Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
             Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
             Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
             Fetch62 ();
             
           },   serialNo *0); }
                     
           
         else if (lenghtID==63){  
      
           setTimeout(() => {
      
             Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
             Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
             Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
             Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
             Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
             Fetch62 (); Fetch63 ();
             
           },   serialNo *0); }
  
                  
         else if (lenghtID==64){  
      
           setTimeout(() => {
      
             Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
             Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
             Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
             Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
             Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
             Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
             Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
             Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
             Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
             Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
             Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
             Fetch62 (); Fetch63 (); Fetch64 ();
             
           },   serialNo *0); }
  
           else if (lenghtID==65){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 ();
               
             },   serialNo *0); }
  
  
             
           else if (lenghtID==66){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 (); Fetch66 ();
               
             },   serialNo *0); }
  
             
  
             
           else if (lenghtID==67){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 (); Fetch66 (); Fetch67 ();
               
             },   serialNo *0); }
  
                         
  
             
           else if (lenghtID==68){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 (); Fetch66 (); Fetch67 ();
               Fetch68 ();
               
             },   serialNo *0); }
  
             
                         
  
             
           else if (lenghtID==69){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 (); Fetch66 (); Fetch67 ();
               Fetch68 (); Fetch69 ();
               
             },   serialNo *0); }
                         
                         
  
             
           else if (lenghtID==70){  
      
             setTimeout(() => {
        
               Fetch0 (); Fetch1 (); Fetch2 (); Fetch3 (); Fetch4 (); Fetch5 (); Fetch6 ()
               Fetch7 (); Fetch8 (); Fetch9 ();  Fetch10 ();  Fetch11 (); Fetch12 ();
               Fetch13 (); Fetch14 (); Fetch15 (); Fetch16 ();  Fetch17 ();
               Fetch18 (); Fetch19 (); Fetch20 (); Fetch21 (); Fetch22 ();
               Fetch23 (); Fetch24 (); Fetch25 (); Fetch26 (); Fetch27 ();
               Fetch28 (); Fetch29 (); Fetch30 (); Fetch31 (); Fetch32 ();
               Fetch33 (); Fetch34 (); Fetch35 (); Fetch36 (); Fetch37 ();
               Fetch38 ();  Fetch39 (); Fetch40 (); Fetch41 (); Fetch42 ();
               Fetch43 (); Fetch44 (); Fetch45 ();  Fetch46 (); Fetch47 ();
               Fetch48 (); Fetch49 (); Fetch50 (); Fetch51 (); Fetch52 ();  Fetch53 (); Fetch54 ();
               Fetch55 (); Fetch56 (); Fetch57 (); Fetch58 (); Fetch59 (); Fetch60 (); Fetch61 ();
               Fetch62 (); Fetch63 (); Fetch64 (); Fetch65 (); Fetch66 (); Fetch67 ();
               Fetch68 (); Fetch69 (); Fetch70 ();
               
             },   serialNo *0); }
          
            }

        setTimeout(() => {
        gettingNecessaryboards()
        },100);

        
}
fetchworkspace0().catch(error=>{
    console.log("error")
    console.log(error)
  })
}




function displayBoardFetched (){
  HideAddEmailMessage ()
   fetchingBoardsEl.innerHTML =`Removing Member from ${newUniqueLenght+1} Workspaces... `
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
  HideRefreshButton ()
 HideDeleteButton();

displayBoardFetched ()
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

   HideDeleteButton ()
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

        
      HideDeleteButton ()
      RefreshButtonShow();
  }


  
      


function gettingNecessaryboards () {

if (newUniqueLenght==0){
    serialNo = 1
    
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard0 ()
    setTimeout(() => {
     
     RealDeal1 ()
    },2000); } 

    else if (newUniqueLenght==1){
    serialNo = 2
    
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard1 ()
    setTimeout(() => {
     
     RealDeal1 ()
    },2000); } 
 
    else if (newUniqueLenght==2){
       serialNo = 3
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard2 ()
    setTimeout(() => {
     
     RealDeal2 ()
    },2000); } 
 
    else if (newUniqueLenght==3){
       serialNo = 4
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard3 ()
    setTimeout(() => {
     
     RealDeal3 ()
    },2000); } 
 
    else if (newUniqueLenght==4){
       serialNo=5
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard4 ()
    setTimeout(() => {
     
     RealDeal4 ()
    },2000); } 
 
    else if (newUniqueLenght==5){
       serialNo=6
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard5 ()
    setTimeout(() => {
     
     RealDeal5 ()
    },2000); } 
 
    else if (newUniqueLenght==6){
       serialNo = 7
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard6 ()
    setTimeout(() => {
     
     RealDeal6 ()
    },2000); } 
 
    else if (newUniqueLenght==7){
       serialNo=8
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard7 ()
    setTimeout(() => {
     
     RealDeal7 ()
    },2000); } 
 
    else if (newUniqueLenght==8){
       serialNo=9
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard8 ()
    setTimeout(() => {
     
     RealDeal8 ()
    },2000); } 
 
    else if (newUniqueLenght==9){
       serialNo = 10;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard9 ()
    setTimeout(() => {
     
     RealDeal9 ()
    },   2000); } 
 
    else if (newUniqueLenght==10){
       serialNo= 11;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard10 ()
    setTimeout(() => {
     
     RealDeal10 ()
    },   2000); } 
 
    else if (newUniqueLenght==11){
       serialNo =12;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard11 ()
    setTimeout(() => {
     
     RealDeal11 ()
    },   2000); } 
 
    else if (newUniqueLenght==12){
       serialNo = 13
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard12 ()
    setTimeout(() => {
     
     RealDeal12 ()
    },   2000); } 
 
    else if (newUniqueLenght==13){
       serialNo =14;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard13 ()
    setTimeout(() => {
     
     RealDeal13 ()
    },   2000); } 
 
    else if (newUniqueLenght==14){
       serialNo =15
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard14 ()
    setTimeout(() => {
     
     RealDeal14 ()
    }, 13120); } 
 
    else if (newUniqueLenght==15){
       serialNo =16;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
     getBoard15 ()
    setTimeout(() => {
     
     RealDeal15 ()
    },   2000); } 
 
    else if (newUniqueLenght==16){
       serialNo =17;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard16 ()
    setTimeout(() => {
     RealDeal16 ()
    },   2000); } 
 
    else if (newUniqueLenght==17){
 
       serialNo =18;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard17 ()
    setTimeout(() => {
      
     RealDeal17 ()
    },   2000); } 
  
 
    else if (newUniqueLenght==18){
       
       serialNo =19;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard18 ()
    setTimeout(() => {
     
     RealDeal18 ()
    },   2000); } 
 
    else if (newUniqueLenght==19){
       serialNo =20
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard19 ()
    setTimeout(() => {
     
     RealDeal19 ()
    },   2000); } 
 
    else if (newUniqueLenght==20){
       serialNo =21;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard20 ()
    setTimeout(() => {
     
     RealDeal20 ()
    },   2000); } 
 
 
    else if (newUniqueLenght==21){
       serialNo =22;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard21 ()
    setTimeout(() => {
     
     RealDeal21 ()
    },   2000); } 
 
    else if (newUniqueLenght==22){
       serialNo = 23;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard22 ()
    setTimeout(() => {
     
     RealDeal22 ()
    },   2000); } 
 
    else if (newUniqueLenght==23){
       serialNo = 24;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard23 ()
    setTimeout(() => {
     
     RealDeal23 ()
    },   2000); } 
 
    else if (newUniqueLenght==24){
       serialNo = 25;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard24 ()
    setTimeout(() => {
     
     RealDeal24 ()
    },   2000); } 
 
    else if (newUniqueLenght==25){
       serialNo =26;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard25 ()
    setTimeout(() => {
     
     RealDeal25 ()
    },   2000); } 
 
    else if (newUniqueLenght==26){
       serialNo= 27;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard26 ()
    setTimeout(() => {
     
     RealDeal26 ()
    },   2000); } 
 
    else if (newUniqueLenght==27){
       serialNo =28;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard27 ()
    setTimeout(() => {
     
     RealDeal27 ()
    },   2000); } 
 
    else if (newUniqueLenght==28){
       serialNo = 29;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard28 ()
    setTimeout(() => {
     
     RealDeal28 ()
    },   2000); } 
 
    else if (newUniqueLenght==29){
       serialNo = 30;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard29 ()
    setTimeout(() => {
     
     RealDeal29 ()
    },   2000); } 
 
 
    else if (newUniqueLenght==30){
       serialNo =31;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard30 ()
    setTimeout(() => {
     
     RealDeal30 ()
    },   2000); } 
 
    else if (newUniqueLenght==31){
       serialNo = 32;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard31 ()
    setTimeout(() => {
     
     RealDeal31 ()
    },   2000); } 
 
    else if (newUniqueLenght==32){
       serialNo = 33;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard32 ()
    setTimeout(() => {
     
     RealDeal32 ()
    },   2000); } 
 
    else if (newUniqueLenght==33){
       serialNo = 34;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard33 ()
    setTimeout(() => {
     
     RealDeal33 ()
    },   2000); } 
 
    else if (newUniqueLenght==34){
       serialNo = 35
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard34 ()
    setTimeout(() => {
     
     RealDeal34 ()
    },   2000); } 
 
    else if (newUniqueLenght==35){
       serialNo = 36
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard35 ()
    setTimeout(() => {
     
     RealDeal35 ()
    },   2000); } 
 
    else if (newUniqueLenght==36){
       serialNo = 37;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard36 ()
    setTimeout(() => {
     
     RealDeal36 ()
    },   2000); } 
 
    else if (newUniqueLenght==37){
       serialNo = 38;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard37 ()
    setTimeout(() => {
     
     RealDeal37 ()
    },   2000); } 
 
    else if (newUniqueLenght==38){
       serialNo = 39
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard38 ()
    setTimeout(() => {
     
     RealDeal38 ()
    },   2000); } 
 
    else if (newUniqueLenght==39){
       serialNo = 40;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard39 ()
    setTimeout(() => {
     
     RealDeal39 ()
    },   2000); } 
 
    else if (newUniqueLenght==40){
       serialNo =41;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard40 ()
    setTimeout(() => {
     
     RealDeal40 ()
    },   2000); } 
 
    else if (newUniqueLenght==41){
       serialNo = 42;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard41 ()
    setTimeout(() => {
     
     RealDeal41 ()
    },   2000); } 
 
    else if (newUniqueLenght==42){
       serialNo =43;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard42 ()
    setTimeout(() => {
     
     RealDeal42 ()
    },   2000); } 
 
    else if (newUniqueLenght==43){
       serialNo = 44;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard43 ()
    setTimeout(() => {
     
     RealDeal43 ()
    },   2000); } 
 
    else if (newUniqueLenght==44){
       serialNo = 45;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard44 ()
    setTimeout(() => {
     
     RealDeal44 ()
    },   2000); } 
 
    else if (newUniqueLenght==45){
       serialNo =46;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard45 ()
    setTimeout(() => {
     
     RealDeal45 ()
    },   2000); } 
 
    else if (newUniqueLenght==46){
       serialNo = 47;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard46 ()
    setTimeout(() => {
     
     RealDeal46 ()
    },   2000); } 
 
    else if (newUniqueLenght==47){
       serialNo = 48;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard47 ()
    setTimeout(() => {
     
     RealDeal47 ()
    },   2000); } 
 
    else if (newUniqueLenght==48){
       serialNo = 49;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard48 ()
    setTimeout(() => {
     
     RealDeal48 ()
    },   2000); } 
 
    else if (newUniqueLenght==49){
       serialNo = 50;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard49 ()
    setTimeout(() => {
     
     RealDeal49 ()
    },   2000); } 
 
 
    else if (newUniqueLenght==50){
       serialNo = 51;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard50 ()
    setTimeout(() => {
     
     RealDeal50 ()
    },   2000); } 
 
    else if (newUniqueLenght==51){
       serialNo = 52;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard51 ()
    setTimeout(() => {
     
     RealDeal51 ()
    },   2000); } 
 
    else if (newUniqueLenght==52){
       serialNo = 53;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard52 ()
    setTimeout(() => {
     
     RealDeal52 ()
    },   2000); } 
 
    else if (newUniqueLenght==53){
       serialNo = 54;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard53 ()
    setTimeout(() => {
     
     RealDeal53 ()
    },   2000); } 
 
    else if (newUniqueLenght==54){
       serialNo = 55;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard54 ()
    setTimeout(() => {
     
     RealDeal54 ()
    },   2000); } 
 
    else if (newUniqueLenght==55){
       serialNo =56;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard55 ()
    setTimeout(() => {
     
     RealDeal55 ()
    },   2000); } 
 
    else if (newUniqueLenght==56){
       serialNo = 57
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard56 ()
    setTimeout(() => {
     
     RealDeal56 ()
    },   2000); } 
 
    else if (newUniqueLenght==57){
       serialNo =58
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard57 ()
    setTimeout(() => {
     
     RealDeal57 ()
    },2000); } 
 
    else if (newUniqueLenght==58){
       serialNo = 59
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard58 ()
    setTimeout(() => {
     
     RealDeal58 ()
    },2000); } 
 
    else if (newUniqueLenght==59){
       serialNo = 60
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard59 ()
    setTimeout(() => {
     
     RealDeal59 ()
    },2000); } 
 
 
    else if (newUniqueLenght==60){
       serialNo = 61;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard60 ()
    setTimeout(() => {
     
     RealDeal60 ()
    },   2000); } 
 
    else if (newUniqueLenght==61){
       serialNo=62;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
 
     getBoard61 ()
    setTimeout(() => {
     
     RealDeal61 ()
    },2000); } 
 
    else if (newUniqueLenght==62){
       serialNo=63;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard62 ()
    setTimeout(() => {
     
     RealDeal62 ()
    },2000); } 
 
    else if (newUniqueLenght==63){
       serialNo=64;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard63 ()
    setTimeout(() => {
     
     RealDeal63 ()
    },2000); } 
 
    else if (newUniqueLenght==64){
       serialNo = 65;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard64 ()
    setTimeout(() => {
     
     RealDeal64 ()
    },2000); } 
 
    else if (newUniqueLenght==65){
       serialNo= 66;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard65 ()
    setTimeout(() => {
     
     RealDeal65 ()
    },2000); } 
 
    else if (newUniqueLenght==66){
       serialNo= 67;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard66 ()
    setTimeout(() => {
     
     RealDeal66 ()
    },2000); } 
 
    else if (newUniqueLenght==67){
       serialNo= 68;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard67 ()
    setTimeout(() => {
     
     RealDeal67 ()
    },2000); } 
 
    else if (newUniqueLenght==68){
       serialNo=69;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard68 ()
    setTimeout(() => {
     
     RealDeal68 ()
    },2000); } 
 
    else if (newUniqueLenght==69){
       serialNo= 70;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard69 ()
    setTimeout(() => {
     
     RealDeal69 ()
    },2000); } 
 
    else if (newUniqueLenght==70){
       serialNo= 71;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard70 ()
    setTimeout(() => {
     
     RealDeal70 ()
    },2000); } 
 
    else if (newUniqueLenght==71){
       serialNo=72;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard71 ()
    setTimeout(() => {
     
     RealDeal71 ()
    },2000); } 
 
    else if (newUniqueLenght==72){
       serialNo= 73;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard72 ()
    setTimeout(() => {
     
     RealDeal72 ()
    },2000); } 
 
    else if (newUniqueLenght==73){
       serialNo= 74;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard73 ()
    setTimeout(() => {
     
     RealDeal73 ()
    },2000); } 
 
    else if (newUniqueLenght==74){
       serialNo = 75;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard74 ()
    setTimeout(() => {
     
     RealDeal74 ()
    },2000); } 
 
    else if (newUniqueLenght==75){
       serialNo = 76;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard75 ()
    setTimeout(() => {
     
     RealDeal75 ()
    },2000); } 
 
    else if (newUniqueLenght==76){
       serialNo = 77;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard76 ()
    setTimeout(() => {
     
     RealDeal76 ()
    },2000); } 
 
    else if (newUniqueLenght==77){
       serialNo = 78;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard77 ()
    setTimeout(() => {
     
     RealDeal77 ()
    },2000); } 
 
    else if (newUniqueLenght==78){
       serialNo = 79;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard78 ()
    setTimeout(() => {
     
     RealDeal78 ()
    },2000); } 
 
    else if (newUniqueLenght==79){
       serialNo = 80;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard79 ()
    setTimeout(() => {
     
     RealDeal79 ()
    },2000); } 
 
    else if (newUniqueLenght==80){
       serialNo = 81;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard80 ()
    setTimeout(() => {
     
     RealDeal80 ()
    },2000); } 
 
    else if (newUniqueLenght==81){
       serialNo = 82
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard81 ()
    setTimeout(() => {
     
     RealDeal81 ()
    },2000); } 
 
    else if (newUniqueLenght==82){
       serialNo = 83;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard82 ()
    setTimeout(() => {
     
     RealDeal82 ()
    },2000); } 
 
    else if (newUniqueLenght==83){
       serialNo = 84;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard83 ()
    setTimeout(() => {
     
     RealDeal83 ()
    },2000); } 
 
    else if (newUniqueLenght==84){
       serialNo = 85;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard84 ()
    setTimeout(() => {
     
     RealDeal84 ()
    },2000); } 
 
    else if (newUniqueLenght==85){
       serialNo = 86;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard85 ()
    setTimeout(() => {
     
     RealDeal85 ()
    },2000); } 
 
    else if (newUniqueLenght==86){
       serialNo = 87;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard86 ()
    setTimeout(() => {
     
     RealDeal86 ()
    },2000); } 
 
    else if (newUniqueLenght==87){
       serialNo = 88;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard87 ()
    setTimeout(() => {
     
     RealDeal87 ()
    },2000); } 
 
    else if (newUniqueLenght==88){
       serialNo = 89;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard88 ()
    setTimeout(() => {
     
     RealDeal88 ()
    },2000); } 
 
    else if (newUniqueLenght==89){
       serialNo = 90;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard89 ()
    setTimeout(() => {
     
     RealDeal89 ()
    },2000); } 
 
    else if (newUniqueLenght==90){
       serialNo = 91;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard90 ()
    setTimeout(() => {
     
     RealDeal90 ()
    },2000); } 
 
    else if (newUniqueLenght==91){
       serialNo = 92;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard91 ()
    setTimeout(() => {
     
     RealDeal91 ()
    },2000); } 
 
    else if (newUniqueLenght==92){
       serialNo = 93;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard92 ()
    setTimeout(() => {
     
     RealDeal92 ()
    },2000); } 
 
    else if (newUniqueLenght==93){
       serialNo = 94;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard93 ()
    setTimeout(() => {
     
     RealDeal93 ()
    },2000); } 
 
    else if (newUniqueLenght==94){
       serialNo = 95;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard94 ()
    setTimeout(() => {
     
     RealDeal94 ()
    },2000); } 
 
    else if (newUniqueLenght==95){
       serialNo = 96;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard95 ()
    setTimeout(() => {
     
     RealDeal95 ()
    },2000); } 
 
    else if (newUniqueLenght==96){
       serialNo = 97;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard96 ()
    setTimeout(() => {
     
     RealDeal96 ()
    },serialNo*100); } 
 
    else if (newUniqueLenght==97){
       serialNo = 98;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard97 ()
    setTimeout(() => {
     
     RealDeal97 ()
    }, 86160); } 
 
    else if (newUniqueLenght==98){
       serialNo = 99;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard98 ()
    setTimeout(() => {
     
     RealDeal98 ()
    }, 80040); } 
 
    else if (newUniqueLenght==99){
       serialNo = 100
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard99 ()
    setTimeout(() => {
     
     RealDeal99 ()
    },2000); } 
 
    else if (newUniqueLenght==100){
       serialNo = 101
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard100 ()
    setTimeout(() => {
     
     RealDeal100 ()
    },2000); } 
    

}




function getBoard0(){
  Add0();
  }
  
  function getBoard1(){
      getBoard0()
      Add1();}
  
  function getBoard2(){
      getBoard1()
      Add2();};
  
  function getBoard3(){
      getBoard2()
      Add3();}
  
  function getBoard4(){
      getBoard3()
      Add4();} 
      
  function getBoard5(){
      getBoard4()
      Add5();} 
  
  function getBoard6(){
      getBoard5()
      Add6();}
  
  function getBoard7(){
      getBoard6()
      Add7();}
  
  function getBoard8(){
      getBoard7()
      Add8();}

  function getBoard9(){
      getBoard8()
      Add9();}
      
function getBoard10(){
      getBoard9()
      Add10();}

function getBoard11(){
      getBoard10()
      Add11();}

function getBoard12(){
      getBoard11()
      Add12();}

function getBoard13(){
      getBoard12()
      Add13();}

function getBoard14(){
      getBoard13()
      Add14();}

function getBoard15(){
      getBoard14()
      Add15();}

function getBoard16(){
      getBoard15()
      Add16();}

function getBoard17(){
      getBoard16()
      Add17();}

function getBoard18(){
      getBoard17()
      Add18();}
      
function getBoard19(){
  getBoard18()
  Add19();}
  
function getBoard20(){
  getBoard19()
  Add20();}
  
function getBoard21(){
  getBoard20()
  Add21();}
  
function getBoard22(){
  getBoard21()
  Add22();}
  
function getBoard23(){
  getBoard22()
  Add23();}
  
function getBoard24(){
  getBoard23()
  Add24();}
  
function getBoard25(){
  getBoard24()
  Add25();}
  
function getBoard26(){
  getBoard25()
  Add26();}
  
function getBoard27(){
  getBoard26()
  Add27();}
  
function getBoard28(){
  getBoard27()
  Add28();}
  
function getBoard29(){
  getBoard28()
  Add29();}
  
function getBoard30(){
  getBoard29()
  Add30();}

  function getBoard31(){
      getBoard30()
      Add31();}
      
  function getBoard32(){
      getBoard31()
      Add32();}
      
  function getBoard33(){
      getBoard32()
      Add33();}
      
  function getBoard34(){
      getBoard33()
      Add34();}
      
  function getBoard35(){
      getBoard34()
      Add35();}
      
  function getBoard36(){
      getBoard35()
      Add36();}
      
  function getBoard37(){
      getBoard36()
      Add37();}
      
  function getBoard38(){
      getBoard37()
      Add38();}
      
  function getBoard39(){
      getBoard38()
      Add39();}
      
  function getBoard40(){
      getBoard39()
      Add40();}

  function getBoard41(){
  getBoard40()
  Add41();}
  
function getBoard42(){
  getBoard41()
  Add42();}
  
function getBoard43(){
  getBoard42()
  Add43();}
  
function getBoard44(){
  getBoard43()
  Add44();}
  
function getBoard45(){
  getBoard44()
  Add45();}
  
function getBoard46(){
  getBoard45()
  Add46();}
  
function getBoard47(){
  getBoard46()
  Add47();}
  
function getBoard48(){
  getBoard47()
  Add48();}
  
function getBoard49(){
  getBoard48()
  Add49();}
  
function getBoard50(){
  getBoard49()
  Add50();}

  function getBoard51(){
      getBoard50()
      Add51();}
      
  function getBoard52(){
      getBoard51()
      Add52();}
      
  function getBoard53(){
      getBoard52()
      Add53();}
      
  function getBoard54(){
      getBoard53()
      Add54();}
      
  function getBoard55(){
      getBoard54()
      Add55();}
      
  function getBoard56(){
      getBoard55()
      Add56();}
      
  function getBoard57(){
      getBoard56()
      Add57();}
      
  function getBoard58(){
      getBoard57()
      Add58();}
      
  function getBoard59(){
      getBoard58()
      Add59();}
      
  function getBoard60(){
      getBoard59()
      Add60();}

function getBoard61(){
  getBoard60()
  Add61();}
  
function getBoard62(){
  getBoard61()
  Add62();}
  
function getBoard63(){
  getBoard62()
  Add63();}
  
function getBoard64(){
  getBoard63()
  Add64();}
  
function getBoard65(){
  getBoard64()
  Add65();}
  
function getBoard66(){
  getBoard65()
  Add66();}
  
function getBoard67(){
  getBoard66()
  Add67();}
  
function getBoard68(){
  getBoard67()
  Add68();}
  
function getBoard69(){
  getBoard68()
  Add69();}
  
function getBoard70(){
  getBoard69()
  Add70();}

function getBoard71(){
  getBoard70()
  Add71();}
  
function getBoard72(){
  getBoard71()
  Add72();}
  
function getBoard73(){
  getBoard72()
  Add73();}
  
function getBoard74(){
  getBoard73()
  Add74();}
  
function getBoard75(){
  getBoard74()
  Add75();}
  
function getBoard76(){
  getBoard75()
  Add76();}
  
function getBoard77(){
  getBoard76()
  Add77();}
  
function getBoard78(){
  getBoard77()
  Add78();}
  
function getBoard79(){
  getBoard78()
  Add79();}
  
function getBoard80(){
  getBoard79()
  Add80();}

function getBoard81(){
  getBoard80()
  Add81();}
  
function getBoard82(){
  getBoard81()
  Add82();}
  
function getBoard83(){
  getBoard82()
  Add83();}
  
function getBoard84(){
  getBoard83()
  Add84();}
  
function getBoard85(){
  getBoard84()
  Add85();}
  
function getBoard86(){
  getBoard85()
  Add86();}
  
function getBoard87(){
  getBoard86()
  Add87();}
  
function getBoard88(){
  getBoard87()
  Add88();}
  
function getBoard89(){
  getBoard88()
  Add89();}
  
function getBoard90(){
  getBoard89()
  Add90();}
  
function getBoard91(){
  getBoard90()
  Add91();}
  
function getBoard92(){
  getBoard91()
  Add92();}
  
function getBoard93(){
  getBoard92()
  Add93();}
  
function getBoard94(){
  getBoard93()
  Add94();}
  
function getBoard95(){
  getBoard94()
  Add95();}
  
function getBoard96(){
  getBoard95()
  Add96();}
  
function getBoard97(){
  getBoard96()
  Add97();}
  
function getBoard98(){
  getBoard97()
  Add98();}
  
function getBoard99(){
  getBoard98()
  Add99();}
  
function getBoard100(){
  getBoard99()
  Add100();};



  function RealDeal0(){
    deleteMember0();
    }
    
    function RealDeal1(){
        RealDeal0()
        deleteMember1();}
    
    function RealDeal2(){
        RealDeal1()
        deleteMember2();};
    
    function RealDeal3(){
        RealDeal2()
        deleteMember3();}
    
    function RealDeal4(){
        RealDeal3()
        deleteMember4();} 
        
    function RealDeal5(){
        RealDeal4()
        deleteMember5();} 
    
    function RealDeal6(){
        RealDeal5()
        deleteMember6();}
    
    function RealDeal7(){
        RealDeal6()
        deleteMember7();}
    
    function RealDeal8(){
        RealDeal7()
        deleteMember8();}
  
    function RealDeal9(){
        RealDeal8()
        deleteMember9();}
        
  function RealDeal10(){
        RealDeal9()
        deleteMember10();}
  
  function RealDeal11(){
        RealDeal10()
        deleteMember11();}
  
  function RealDeal12(){
        RealDeal11()
        deleteMember12();}
  
  function RealDeal13(){
        RealDeal12()
        deleteMember13();}
  
  function RealDeal14(){
        RealDeal13()
        deleteMember14();}
  
  function RealDeal15(){
        RealDeal14()
        deleteMember15();}
  
  function RealDeal16(){
        RealDeal15()
        deleteMember16();}
  
  function RealDeal17(){
        RealDeal16()
        deleteMember17();}
  
  function RealDeal18(){
        RealDeal17()
        deleteMember18();}
        
  function RealDeal19(){
    RealDeal18()
    deleteMember19();}
    
  function RealDeal20(){
    RealDeal19()
    deleteMember20();}
    
  function RealDeal21(){
    RealDeal20()
    deleteMember21();}
    
  function RealDeal22(){
    RealDeal21()
    deleteMember22();}
    
  function RealDeal23(){
    RealDeal22()
    deleteMember23();}
    
  function RealDeal24(){
    RealDeal23()
    deleteMember24();}
    
  function RealDeal25(){
    RealDeal24()
    deleteMember25();}
    
  function RealDeal26(){
    RealDeal25()
    deleteMember26();}
    
  function RealDeal27(){
    RealDeal26()
    deleteMember27();}
    
  function RealDeal28(){
    RealDeal27()
    deleteMember28();}
    
  function RealDeal29(){
    RealDeal28()
    deleteMember29();}
    
  function RealDeal30(){
    RealDeal29()
    deleteMember30();}
  
    function RealDeal31(){
        RealDeal30()
        deleteMember31();}
        
    function RealDeal32(){
        RealDeal31()
        deleteMember32();}
        
    function RealDeal33(){
        RealDeal32()
        deleteMember33();}
        
    function RealDeal34(){
        RealDeal33()
        deleteMember34();}
        
    function RealDeal35(){
        RealDeal34()
        deleteMember35();}
        
    function RealDeal36(){
        RealDeal35()
        deleteMember36();}
        
    function RealDeal37(){
        RealDeal36()
        deleteMember37();}
        
    function RealDeal38(){
        RealDeal37()
        deleteMember38();}
        
    function RealDeal39(){
        RealDeal38()
        deleteMember39();}
        
    function RealDeal40(){
        RealDeal39()
        deleteMember40();}
  
    function RealDeal41(){
    RealDeal40()
    deleteMember41();}
    
  function RealDeal42(){
    RealDeal41()
    deleteMember42();}
    
  function RealDeal43(){
    RealDeal42()
    deleteMember43();}
    
  function RealDeal44(){
    RealDeal43()
    deleteMember44();}
    
  function RealDeal45(){
    RealDeal44()
    deleteMember45();}
    
  function RealDeal46(){
    RealDeal45()
    deleteMember46();}
    
  function RealDeal47(){
    RealDeal46()
    deleteMember47();}
    
  function RealDeal48(){
    RealDeal47()
    deleteMember48();}
    
  function RealDeal49(){
    RealDeal48()
    deleteMember49();}
    
  function RealDeal50(){
    RealDeal49()
    deleteMember50();}
  
    function RealDeal51(){
        RealDeal50()
        deleteMember51();}
        
    function RealDeal52(){
        RealDeal51()
        deleteMember52();}
        
    function RealDeal53(){
        RealDeal52()
        deleteMember53();}
        
    function RealDeal54(){
        RealDeal53()
        deleteMember54();}
        
    function RealDeal55(){
        RealDeal54()
        deleteMember55();}
        
    function RealDeal56(){
        RealDeal55()
        deleteMember56();}
        
    function RealDeal57(){
        RealDeal56()
        deleteMember57();}
        
    function RealDeal58(){
        RealDeal57()
        deleteMember58();}
        
    function RealDeal59(){
        RealDeal58()
        deleteMember59();}
        
    function RealDeal60(){
        RealDeal59()
        deleteMember60();}
  
  function RealDeal61(){
    RealDeal60()
    deleteMember61();}
    
  function RealDeal62(){
    RealDeal61()
    deleteMember62();}
    
  function RealDeal63(){
    RealDeal62()
    deleteMember63();}
    
  function RealDeal64(){
    RealDeal63()
    deleteMember64();}
    
  function RealDeal65(){
    RealDeal64()
    deleteMember65();}
    
  function RealDeal66(){
    RealDeal65()
    deleteMember66();}
    
  function RealDeal67(){
    RealDeal66()
    deleteMember67();}
    
  function RealDeal68(){
    RealDeal67()
    deleteMember68();}
    
  function RealDeal69(){
    RealDeal68()
    deleteMember69();}
    
  function RealDeal70(){
    RealDeal69()
    deleteMember70();}
  
  function RealDeal71(){
    RealDeal70()
    deleteMember71();}
    
  function RealDeal72(){
    RealDeal71()
    deleteMember72();}
    
  function RealDeal73(){
    RealDeal72()
    deleteMember73();}
    
  function RealDeal74(){
    RealDeal73()
    deleteMember74();}
    
  function RealDeal75(){
    RealDeal74()
    deleteMember75();}
    
  function RealDeal76(){
    RealDeal75()
    deleteMember76();}
    
  function RealDeal77(){
    RealDeal76()
    deleteMember77();}
    
  function RealDeal78(){
    RealDeal77()
    deleteMember78();}
    
  function RealDeal79(){
    RealDeal78()
    deleteMember79();}
    
  function RealDeal80(){
    RealDeal79()
    deleteMember80();}
  
  function RealDeal81(){
    RealDeal80()
    deleteMember81();}
    
  function RealDeal82(){
    RealDeal81()
    deleteMember82();}
    
  function RealDeal83(){
    RealDeal82()
    deleteMember83();}
    
  function RealDeal84(){
    RealDeal83()
    deleteMember84();}
    
  function RealDeal85(){
    RealDeal84()
    deleteMember85();}
    
  function RealDeal86(){
    RealDeal85()
    deleteMember86();}
    
  function RealDeal87(){
    RealDeal86()
    deleteMember87();}
    
  function RealDeal88(){
    RealDeal87()
    deleteMember88();}
    
  function RealDeal89(){
    RealDeal88()
    deleteMember89();}
    
  function RealDeal90(){
    RealDeal89()
    deleteMember90();}
    
  function RealDeal91(){
    RealDeal90()
    deleteMember91();}
    
  function RealDeal92(){
    RealDeal91()
    deleteMember92();}
    
  function RealDeal93(){
    RealDeal92()
    deleteMember93();}
    
  function RealDeal94(){
    RealDeal93()
    deleteMember94();}
    
  function RealDeal95(){
    RealDeal94()
    deleteMember95();}
    
  function RealDeal96(){
    RealDeal95()
    deleteMember96();}
    
  function RealDeal97(){
    RealDeal96()
    deleteMember97();}
    
  function RealDeal98(){
    RealDeal97()
    deleteMember98();}
    
  function RealDeal99(){
    RealDeal98()
    deleteMember99();}
    
  function RealDeal100(){
    RealDeal99()
    deleteMember100();};
  










   


  