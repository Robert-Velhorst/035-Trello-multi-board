let emailValue1 =[];
let stringedId
let idFinally;
let data;
let lenghtID;
let errorMes; let errorMes2; let emailValue;

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

function fetchBoardNow() {
    

  async function FetchingBoards1(){
  
      const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
      )
     
       data = await response.json()
       realLenght = data.length
      lenghtID = (data.length) -1
     
     
      numberoneId = (data[1].idOrganization)
      numberoneId2 = (data[0].name)
      console.log(numberoneId)
      console.log(numberoneId2)
          
  }
  
  FetchingBoards1().catch(error=>{
      console.log("error")
      console.log(error)
    })
  }


//clearing local storage//

let okayEl = document.querySelector("#okay");
let cancelEl = document.querySelector("#cancel");


cancelEl.addEventListener("click", function(){
    cancelLocal ()
})

okayEl.addEventListener("click", function (){
  cancelLocal ()
})

function cancelLocal (){
    localStorage.clear()
    reloading()
}



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


function inviscibleWrongMessage (){
  if (fetchingBoardsEl.style. visibility === "visible") {
    fetchingBoardsEl.style. visibility = "hidden";
  } else {
    fetchingBoardsEl.style. visibility = "hidden";
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


  function cancelnoBar(){
    if (cancelEl.style. visibility === "visible") {
      cancelEl.style. visibility = "hidden";
    } else {
      cancelEl.style. visibility = "hidden";
    }
   
  };

function okayBar(){
  if (okayEl.style. visibility === "hidden") {
    okayEl.style. visibility = "visible";
  } else {
    okayEl.style. visibility = "visible";
  }
 
};

function negokayBar(){
    if (okayEl.style. visibility === "visible") {
      okayEl.style. visibility = "hidden";
    } else {
      okayEl.style. visibility = "hidden";
    }
   
  }

  negokayBar()


 let hideContent = document.querySelector("#hidecontents")


let div = document.querySelector("#container");

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

let realLenght;

function move() { 
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

  

//Refresh button//

refreshEl.addEventListener("click", function(){

    localStorage.clear()
    
window.location.reload();
return false;


});

function reloading () {
    
    window.location.reload();
    return false;
}

function displayBoardFetched (){
   HideDeleteButton()
    fetchingBoardsEl.innerHTML =`Adding email to all ${realLenght} Boards `
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

 




 function successMess (){
  displayBoardFetched ();

  if (result >60) {

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
   sendingProgressEl.innerHTML = `Email Add Successfull.`
    }, 0);
  }, 3500);
  }

  else if (result <50) {
    
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
 sendingProgressEl.innerHTML = `Email Add Successfull.`
  }, 0);
}, 5000);

  }




}
//FetchingBoard0 //

function fetchBoard0() {
    

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


// Getting ALL boards//
function getReady (){ 

  fetchBoardNow ();
  setTimeout(() => {
    localStorage.clear ();
    lenghtIDCheck()
   }, 1000);
  setTimeout(() => {
     
      lenghtIDCheck()
     }, 2000); 
     setTimeout(() => {
     
      lenghtIDCheck()
     }, 4000);
  }
window.onload = getReady;

function lenghtIDCheck(){
  if (lenghtID){
      serviceErrorEl.innerHTML = '';
      serviceErrorEl2.innerHTML = '';
      HideRefreshButton()
      DeleteButtonShow()
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




//Main Add Button// 

submitEl.addEventListener("click", function (){
    localStorage.clear()
    emailValue1.push(emailEl.value)

    for( let i = 0; i <emailValue1.length; i++){

            emailValue = (emailValue1[i])

    }



    
let emailb
let emaila  

let localStorageemailB = JSON.parse(localStorage.getItem("emailerrb")) 
   

if (emailValue == [] || emailValue == '' ){
  emaila = 'stop';
  emailb = ' now'

   emailEmptyErr.innerHTML = `Email is Empty!`
   emailEmptyErr2.innerHTML =`Enter a Valid Email`
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



  else if(localStorageErrorMes || localbmNet1 || localStorageemailB) {
    window.onload = ''


  }
  else{

    Fetch0 ()
    emailEl.value =""
    console.log(emailValue)
  }
      
})

//Recategorising   boards//



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

   reloading();


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


  
let stringedId0 ; let stringedId1; let stringedId2; let stringedId3; let stringedId4;let stringedId5;
let stringedId6; let stringedId7; let stringedId8; let stringedId9; let stringedId10; let stringedId11;
let stringedId12; let stringedId13; let stringedId14; let stringedId15; let stringedId16; let stringedId17;
let stringedId18; let stringedId19; let stringedId20; let stringedId21; let stringedId22;let stringedId23;
let stringedId24; let stringedId25; let stringedId26; let stringedId27; let stringedId28; let stringedId29;
let stringedId30; let stringedId31; let stringedId32; let stringedId33; let stringedId34; let stringedId35;
let stringedId36; let stringedId37; let stringedId38; let stringedId39; let stringedId40; let stringedId41; let stringedId42;
let stringedId43; let  stringedId44; let stringedId45; let stringedId46; let stringedId47; let stringedId48; let stringedId49;
let stringedId50; let stringedId51; let stringedId52; let stringedId53; let stringedId54;let stringedId55;
let stringedId56; let stringedId57; let stringedId58; let stringedId59; let stringedId61; let stringedId62; let stringedId63; let stringedId64;let stringedId65;
let stringedId66; let stringedId67; let stringedId68; let stringedId69; let stringedId60;