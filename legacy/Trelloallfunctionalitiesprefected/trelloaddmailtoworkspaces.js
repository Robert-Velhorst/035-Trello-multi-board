
let emailValue1 =[];
let stringedId
let idFinally;
let data;
let lenghtID;
let errorMes; let errorMes2;
let workspace0; let workspace1;
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

//clearing local storage//

let okayEl = document.querySelector("#okay");
let cancelEl = document.querySelector("#cancel");

cancelEl.addEventListener("click", function(){
    cancelLocal ()
})

okayEl.addEventListener("click", function(){
  cancelLocal ()
})

let localStorageemailB = JSON.parse(localStorage.getItem("emailerrb"))
function cancelLocal (){
    localStorage.clear()
    reloading()
}

//visibilities hiding//

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
  

//Refresh button//

refreshEl.addEventListener("click", function (){
  cancelLocal ()
})

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


let realLenght;

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

// Getting ALL boards//
function getReady (){ 

    fetchBoardNow ();
    setTimeout(() => {
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
  HideDeleteButton ()
    localStorage.clear()
    emailValue1.push(emailEl.value)

    for( let i = 0; i <emailValue1.length; i++){

            emailValue = (emailValue1[i])

    }

   

if (emailValue == [] || emailValue == '' ){
  emaila = 'stop';
  emailb = ' now'

   emailEmptyErr.innerHTML = `Email is Empty!`
   emailEmptyErr2.innerHTML =`Enter a valid Email`
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   successEl.innerHTML = ''
   fetchingBoardsEl.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''

   window.onload = ''

   localStorage.setItem("emailerr", JSON.stringify(emaila))
   localStorage.setItem("emailerrb", JSON.stringify(emailb))

   DeleteButtonShow();
   
}




  else if(localStorageemailB) {
      successEl.innerHTML =''
    window.onload = ''


  }
  else{


    FetchStart0 ()
  }
    emailEl.value =""
    console.log(emailValue)
   
    
})


//Recategorise each member ID to fit LenghtID//


function addMember0(){
    Add0 ()
   }
   
    function addMember1(){
      addMember0()
        Add1 ();}
    
    function addMember2(){
        addMember1()
        Add2 ();};
    
    function addMember3(){
        addMember2()
        Add3();}
    
    function addMember4(){
        addMember3()
        Add4();} 
        
    function addMember5(){
        addMember4()
        Add5();} 
    
    function addMember6(){
        addMember5()
        Add6();}
    
    function addMember7(){
        addMember6()
        Add7();}
    
    function addMember8(){
        addMember7()
        Add8();}

    function addMember9(){
        addMember8()
        Add9();}
        
function addMember10(){
        addMember9()
        Add10();}

function addMember11(){
        addMember10()
        Add11();}

function addMember12(){
        addMember11()
        Add12();}

function addMember13(){
        addMember12()
        Add13();}

function addMember14(){
        addMember13()
        Add14();}

function addMember15(){
        addMember14()
        Add15();}

function addMember16(){
        addMember15()
        Add16();}

function addMember17(){
        addMember16()
        Add17();}

function addMember18(){
        addMember17()
        Add18();}
        
function addMember19(){
    addMember18()
    Add19();}
    
function addMember20(){
    addMember19()
    Add20();}
    
function addMember21(){
    addMember20()
    Add21();}
    
function addMember22(){
    addMember21()
    Add22();}
    
function addMember23(){
    addMember22()
    Add23();}
    
function addMember24(){
    addMember23()
    Add24();}
    
function addMember25(){
    addMember24()
    Add25();}
    
function addMember26(){
    addMember25()
    Add26();}
    
function addMember27(){
    addMember26()
    Add27();}
    
function addMember28(){
    addMember27()
    Add28();}
    
function addMember29(){
    addMember28()
    Add29();}
    
function addMember30(){
    addMember29()
    Add30();}

    function addMember31(){
        addMember30()
        Add31();}
        
    function addMember32(){
        addMember31()
        Add32();}
        
    function addMember33(){
        addMember32()
        Add33();}
        
    function addMember34(){
        addMember33()
        Add34();}
        
    function addMember35(){
        addMember34()
        Add35();}
        
    function addMember36(){
        addMember35()
        Add36();}
        
    function addMember37(){
        addMember36()
        Add37();}
        
    function addMember38(){
        addMember37()
        Add38();}
        
    function addMember39(){
        addMember38()
        Add39();}
        
    function addMember40(){
        addMember39()
        Add40();}

    function addMember41(){
    addMember40()
    Add41();}
    
function addMember42(){
    addMember41()
    Add42();}
    
function addMember43(){
    addMember42()
    Add43();}
    
function addMember44(){
    addMember43()
    Add44();}
    
function addMember45(){
    addMember44()
    Add45();}
    
function addMember46(){
    addMember45()
    Add46();}
    
function addMember47(){
    addMember46()
    Add47();}
    
function addMember48(){
    addMember47()
    Add48();}
    
function addMember49(){
    addMember48()
    Add49();}
    
function addMember50(){
    addMember49()
    Add50();}

    function addMember51(){
        addMember50()
        Add51();}
        
    function addMember52(){
        addMember51()
        Add52();}
        
    function addMember53(){
        addMember52()
        Add53();}
        
    function addMember54(){
        addMember53()
        Add54();}
        
    function addMember55(){
        addMember54()
        Add55();}
        
    function addMember56(){
        addMember55()
        Add56();}
        
    function addMember57(){
        addMember56()
        Add57();}
        
    function addMember58(){
        addMember57()
        Add58();}
        
    function addMember59(){
        addMember58()
        Add59();}
        
    function addMember60(){
        addMember59()
        Add60();}

function addMember61(){
    addMember60()
    Add61();}
    
function addMember62(){
    addMember61()
    Add62();}
    
function addMember63(){
    addMember62()
    Add63();}
    
function addMember64(){
    addMember63()
    Add64();}
    
function addMember65(){
    addMember64()
    Add65();}
    
function addMember66(){
    addMember65()
    Add66();}
    
function addMember67(){
    addMember66()
    Add67();}
    
function addMember68(){
    addMember67()
    Add68();}
    
function addMember69(){
    addMember68()
    Add69();}
    
function addMember70(){
    addMember69()
    Add70();}

function addMember71(){
    addMember70()
    Add71();}
    
function addMember72(){
    addMember71()
    Add72();}
    
function addMember73(){
    addMember72()
    Add73();}
    
function addMember74(){
    addMember73()
    Add74();}
    
function addMember75(){
    addMember74()
    Add75();}
    
function addMember76(){
    addMember75()
    Add76();}
    
function addMember77(){
    addMember76()
    Add77();}
    
function addMember78(){
    addMember77()
    Add78();}
    
function addMember79(){
    addMember78()
    Add79();}
    
function addMember80(){
    addMember79()
    Add80();}

function addMember81(){
    addMember80()
    Add81();}
    
function addMember82(){
    addMember81()
    Add82();}
    
function addMember83(){
    addMember82()
    Add83();}
    
function addMember84(){
    addMember83()
    Add84();}
    
function addMember85(){
    addMember84()
    Add85();}
    
function addMember86(){
    addMember85()
    Add86();}
    
function addMember87(){
    addMember86()
    Add87();}
    
function addMember88(){
    addMember87()
    Add88();}
    
function addMember89(){
    addMember88()
    Add89();}
    
function addMember90(){
    addMember89()
    Add90();}
    
function addMember91(){
    addMember90()
    Add91();}
    
function addMember92(){
    addMember91()
    Add92();}
    
function addMember93(){
    addMember92()
    Add93();}
    
function addMember94(){
    addMember93()
    Add94();}
    
function addMember95(){
    addMember94()
    Add95();}
    
function addMember96(){
    addMember95()
    Add96();}
    
function addMember97(){
    addMember96()
    Add97();}
    
function addMember98(){
    addMember97()
    Add98();}
    
function addMember99(){
    addMember98()
    Add99();}
    
function addMember100(){
    addMember99()
    Add100();};






let dataId = [];

//Fetching Workspaces ID//

 function FetchStart0 () {
  HideDeleteButton ()
  HideRefreshButton()
async function  fetchworkspace0(){
    seriaNo = 1
   
    const response = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`        
    )
   
    data = await response.json()
    realLenght = data.length
   lenghtID = (data.length) -1
  


   console.log(data)
   console.log(realLenght)
   hideContentswhenLoading ()
   move ()
   displayBoardFetched()


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
      console.log(newUnique)
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
       workspace0 = newUnique[0];
      //  nameFinally0 = newUnique[0].name;
       // nameBoard0 = newUnique[0].username;
       console.log(workspace0);
        // console.log(nameFinally0);
       //  console.log(nameBoard0);
       }

       function Fetch1 () {
           Fetch0 ()
           workspace1 = newUnique[1]
          //  nameFinally1 = newUnique[1].name;
           // nameBoard1 = newUnique[1].username;
        
            console.log(workspace1);
            // console.log(nameFinally1);
           //  console.log(nameBoard1);
       }
       
       function Fetch2(){
           Fetch1()
           workspace2 = newUnique[2]
          //  nameFinally2 = newUnique[2].name;
           // nameBoard2 = newUnique[2].username;
        
            console.log(workspace2);
            // console.log(nameFinally2);
           //  console.log(nameBoard2);
       
       }
       function Fetch3(){
           Fetch2()
           workspace3 = newUnique[3]
          //  nameFinally3 = newUnique[3].name;
           // nameBoard3 = newUnique[3].username;
        
            console.log(workspace3);
            // console.log(nameFinally3);
           //  console.log(nameBoard3);
       }
       function Fetch4(){
           Fetch3()
       
           workspace4 = newUnique[4]
          //  nameFinally4 = newUnique[4].name;
           // nameBoard4 = newUnique[4].username;
        
            console.log(workspace4);
            // console.log(nameFinally4);
           //  console.log(nameBoard4);
       }
       
       function Fetch5(){
           Fetch4()
           workspace5 = newUnique[5]
          //  nameFinally5 = newUnique[5].name;
           // nameBoard5 = newUnique[5].username;
        
            console.log(workspace5);
            // console.log(nameFinally5);
           //  console.log(nameBoard5);
       }
       
       function Fetch6(){
           Fetch5()
           workspace6 = newUnique[6]
          //  nameFinally6 = newUnique[6].name;
           // nameBoard6 = newUnique[6].username;
        
            console.log(workspace6);
            // console.log(nameFinally6);
           //  console.log(nameBoard6);
       }
       
       function Fetch7(){
           Fetch6()
           workspace7 = newUnique[7]
          //  nameFinally7 = newUnique[7].name;
           // nameBoard7 = newUnique[7].username;
       
            console.log(workspace7);
            // console.log(nameFinally7);
           //  console.log(nameBoard7);
       }
       
       function Fetch8(){
           Fetch7()
           workspace8 = newUnique[8]
          //  nameFinally8 = newUnique[8].name;
           // nameBoard8 = newUnique[8].username;
        
            console.log(workspace8);
            // console.log(nameFinally8);
       }
       function Fetch9(){
           Fetch8()
           workspace9 = newUnique[9]
          //  nameFinally9 = newUnique[9].name;
           // nameBoard9 = newUnique[9].username;
        
            console.log(workspace9);
            // console.log(nameFinally9);
           //  console.log(nameBoard9);
       }
       function Fetch10(){
           Fetch9()
           workspace10 = newUnique[10]
          //  nameFinally10 = newUnique[10].name;
           // nameBoard10 = newUnique[10].username;
        
            console.log(workspace10);
            // console.log(nameFinally10);
           //  console.log(nameBoard10);
       }
       
       function Fetch11(){
           Fetch10()
           workspace11 = newUnique[11]
          //  nameFinally11 = newUnique[11].name;
           // nameBoard11 = newUnique[11].username;
        
            console.log(workspace11);
            // console.log(nameFinally11);
           //  console.log(nameBoard11);
       }
       
       function Fetch11(){
           Fetch10()
           workspace11 = newUnique[11]
          //  nameFinally11 = newUnique[11].name;
           // nameBoard11 = newUnique[11].username;
        
            console.log(workspace11);
            // console.log(nameFinally11);
           //  console.log(nameBoard11);
       }
       
       function Fetch12(){
           Fetch11()
           workspace12 = newUnique[12]
          //  nameFinally12 = newUnique[12].name;
           // nameBoard12 = newUnique[12].username;
        
            console.log(workspace12);
            // console.log(nameFinally12);
           //  console.log(nameBoard12);
       }
       
       function Fetch13(){
           Fetch12()
           workspace13 = newUnique[13]
          //  nameFinally13 = newUnique[13].name;
           // nameBoard13 = newUnique[13].username;
        
            console.log(workspace13);
            // console.log(nameFinally13);
           //  console.log(nameBoard13);
       }
        
       function Fetch14(){
           Fetch13()
           workspace14 = newUnique[14]
          //  nameFinally14 = newUnique[14].name;
           // nameBoard14 = newUnique[14].username;
        
            console.log(workspace14);
            // console.log(nameFinally14);
           //  console.log(nameBoard14);
       }
       
       function Fetch15(){
           Fetch14()
           workspace15 = newUnique[15]
          //  nameFinally15 = newUnique[15].name;
           // nameBoard15 = newUnique[15].username;
        
            console.log(workspace15);
            // console.log(nameFinally15);
           //  console.log(nameBoard15);
       }
       
       function Fetch16(){
           Fetch15()
           workspace16 = newUnique[16]
          //  nameFinally16 = newUnique[16].name;
           // nameBoard16 = newUnique[16].username;
        
            console.log(workspace16);
            // console.log(nameFinally16);
           //  console.log(nameBoard16);
       }
       
       function Fetch17(){
           Fetch16()
           workspace17 = newUnique[17]
          //  nameFinally17 = newUnique[17].name;
           // nameBoard17 = newUnique[17].username;
        
            console.log(workspace17);
            // console.log(nameFinally17);
           //  console.log(nameBoard17);
       }
       
       function Fetch18(){
           Fetch17()
           workspace18 = newUnique[18]
          //  nameFinally18 = newUnique[18].name;
           // nameBoard18 = newUnique[18].username;
        
            console.log(workspace18);
            // console.log(nameFinally18);
           //  console.log(nameBoard18);
       }
          
       function Fetch19(){
           Fetch18()
           workspace19 = newUnique[19]
          //  nameFinally19 = newUnique[19].name;
           // nameBoard19 = newUnique[19].username;
        
            console.log(workspace19);
            // console.log(nameFinally19);
           //  console.log(nameBoard19);
       }
       
       function Fetch20(){
           Fetch19()
           workspace20 = newUnique[20]
          //  nameFinally20 = newUnique[20].name;
           // nameBoard20 = newUnique[20].username;
        
            console.log(workspace20);
            // console.log(nameFinally20);
           //  console.log(nameBoard20);
       }
       
       function Fetch21(){
           Fetch20()
           workspace21 = newUnique[21]
          //  nameFinally21 = newUnique[21].name;
           // nameBoard21 = newUnique[21].username;
        
            console.log(workspace21);
            // console.log(nameFinally21);
           //  console.log(nameBoard21);
       }
       
       function Fetch22(){
           Fetch21()
           workspace22 = newUnique[22]
           nameFinally22 = newUnique[22].name;
           // nameBoard22 = newUnique[22].username;
        
            console.log(workspace22);
            // console.log(nameFinally22);
           //  console.log(nameBoard22);
       }
       
       function Fetch23(){
           Fetch22()
           workspace23 = newUnique[23]
           nameFinally23 = newUnique[23].name;
           // nameBoard23 = newUnique[23].username;
        
            console.log(workspace23);
            // console.log(nameFinally23);
           //  console.log(nameBoard23);
       }
       
       function Fetch24(){
           Fetch23()
           workspace24 = newUnique[24]
           nameFinally24 = newUnique[24].name;
           // nameBoard24 = newUnique[24].username;
        
            console.log(workspace24);
            // console.log(nameFinally24);
           //  console.log(nameBoard24);
       }
       
       function Fetch25(){
           Fetch24()
           workspace25 = newUnique[25]
           nameFinally25 = newUnique[25].name;
           // nameBoard25 = newUnique[25].username;
        
            console.log(workspace25);
            // console.log(nameFinally25);
           //  console.log(nameBoard25);
       }
       
       function Fetch26(){
           Fetch25()
           workspace26 = newUnique[26]
           nameFinally26 = newUnique[26].name;
           // nameBoard26 = newUnique[26].username;
        
            console.log(workspace26);
            // console.log(nameFinally26);
           //  console.log(nameBoard26);
       }
       
       function Fetch27(){
           Fetch26()
           workspace27 = newUnique[27]
           nameFinally27 = newUnique[27].name;
           // nameBoard27 = newUnique[27].username;
        
            console.log(workspace27);
            // console.log(nameFinally27);
           //  console.log(nameBoard27);
       }
       
       function Fetch28(){
           Fetch27()
           workspace28 = newUnique[28]
           nameFinally28 = newUnique[28].name;
           // nameBoard28 = newUnique[28].username;
        
            console.log(workspace28);
            console.log(nameFinally28);
           //  console.log(nameBoard28);
       }
       
       function Fetch29(){
           Fetch28()
           workspace29 = newUnique[29]
           nameFinally29 = newUnique[29].name;
           // nameBoard29 = newUnique[29].username;
        
            console.log(workspace29);
            console.log(nameFinally29);
           //  console.log(nameBoard29);
       }
       
       function Fetch30(){
           Fetch29()
           workspace30 = newUnique[30]
           nameFinally30 = newUnique[30].name;
           // nameBoard30 = newUnique[30].username;
        
            console.log(workspace30);
            console.log(nameFinally30);
           //  console.log(nameBoard30);
       }
       
       function Fetch31(){
           Fetch30()
           workspace31 = newUnique[31]
           nameFinally31 = newUnique[31].name;
           // nameBoard31 = newUnique[31].username;
        
            console.log(workspace31);
            console.log(nameFinally31);
           //  console.log(nameBoard31);
       }
       
       function Fetch32(){
           Fetch31()
           workspace32 = newUnique[32]
           nameFinally32 = newUnique[32].name;
           // nameBoard32 = newUnique[32].username;
        
            console.log(workspace32);
            console.log(nameFinally32);
           //  console.log(nameBoard32);
       }
       
       function Fetch33(){
           Fetch32()
           workspace33 = newUnique[33]
           nameFinally33 = newUnique[33].name;
           // nameBoard33 = newUnique[33].username;
        
            console.log(workspace33);
            console.log(nameFinally33);
           //  console.log(nameBoard33);
       }
       
       function Fetch34(){
           Fetch33()
           workspace34 = newUnique[34]
           nameFinally34 = newUnique[34].name;
           // nameBoard34 = newUnique[34].username;
        
            console.log(workspace34);
            console.log(nameFinally34);
           //  console.log(nameBoard34);
       }
       
       function Fetch35(){
           Fetch34()
           workspace35 = newUnique[35]
           nameFinally35 = newUnique[35].name;
           // nameBoard35 = newUnique[35].username;
        
            console.log(workspace35);
            console.log(nameFinally35);
           //  console.log(nameBoard35);
       }
       
       function Fetch36(){
           Fetch35()
           workspace36 = newUnique[36]
           nameFinally36 = newUnique[36].name;
           // nameBoard36 = newUnique[36].username;
        
            console.log(workspace36);
            console.log(nameFinally36);
           //  console.log(nameBoard36);
       }
       
       function Fetch37(){
           Fetch36()
           workspace37 = newUnique[37]
           nameFinally37 = newUnique[37].name;
           // nameBoard37 = newUnique[37].username;
        
            console.log(workspace37);
            console.log(nameFinally37);
           //  console.log(nameBoard37);
       }
       
       function Fetch38(){
           Fetch37()
           workspace38 = newUnique[38]
           nameFinally38 = newUnique[38].name;
           // nameBoard38 = newUnique[38].username;
        
            console.log(workspace38);
            console.log(nameFinally38);
           //  console.log(nameBoard38);
       }
       
       function Fetch39(){
           Fetch38()
           workspace39 = newUnique[39]
           nameFinally39 = newUnique[39].name;
           // nameBoard39 = newUnique[39].username;
        
            console.log(workspace39);
            console.log(nameFinally39);
           //  console.log(nameBoard39);
       }
       
       function Fetch40(){
           Fetch39()
           workspace40 = newUnique[40]
           nameFinally40 = newUnique[40].name;
           // nameBoard40 = newUnique[40].username;
        
            console.log(workspace40);
            console.log(nameFinally40);
           //  console.log(nameBoard40);
       }
       
       function Fetch41(){
           Fetch40()
           workspace41 = newUnique[41]
           nameFinally41 = newUnique[41].name;
           // nameBoard41 = newUnique[41].username;
        
            console.log(workspace41);
            console.log(nameFinally41);
           //  console.log(nameBoard41);
       }
       
       function Fetch42(){
           Fetch41()
           workspace42 = newUnique[42]
           nameFinally42 = newUnique[42].name;
           // nameBoard42 = newUnique[42].username;
        
            console.log(workspace42);
            console.log(nameFinally42);
           //  console.log(nameBoard42);
       }
       
       function Fetch43(){
           Fetch42()
           workspace43 = newUnique[43]
           nameFinally43 = newUnique[43].name;
           // nameBoard43 = newUnique[43].username;
        
            console.log(workspace43);
            console.log(nameFinally43);
           //  console.log(nameBoard43);
       }
       
       function Fetch44(){
           Fetch43()
           workspace44 = newUnique[44]
           nameFinally44 = newUnique[44].name;
           // nameBoard44 = newUnique[44].username;
        
            console.log(workspace44);
            console.log(nameFinally44);
           //  console.log(nameBoard44);
       }
       
       function Fetch45(){
           Fetch44()
           workspace45 = newUnique[45]
           nameFinally45 = newUnique[45].name;
           // nameBoard45 = newUnique[45].username;
        
            console.log(workspace45);
            console.log(nameFinally45);
           //  console.log(nameBoard45);
       }
       
       function Fetch46(){
           Fetch45()
           workspace46 = newUnique[46]
           nameFinally46 = newUnique[46].name;
           // nameBoard46 = newUnique[46].username;
        
            console.log(workspace46);
            console.log(nameFinally46);
           //  console.log(nameBoard46);
       }
       
       function Fetch47(){
           Fetch46()
           workspace47 = newUnique[47]
           nameFinally47 = newUnique[47].name;
           // nameBoard47 = newUnique[47].username;
        
            console.log(workspace47);
            console.log(nameFinally47);
           //  console.log(nameBoard47);
       }
       
       function Fetch48(){
           Fetch47()
           workspace48 = newUnique[48]
           nameFinally48 = newUnique[48].name;
           // nameBoard48 = newUnique[48].username;
        
            console.log(workspace48);
            console.log(nameFinally48);
           //  console.log(nameBoard48);
       }
       
       function Fetch49(){
           Fetch48()
           workspace49 = newUnique[49]
           nameFinally49 = newUnique[49].name;
           // nameBoard49 = newUnique[49].username;
        
            console.log(workspace49);
            console.log(nameFinally49);
           //  console.log(nameBoard49);
       }
       
       function Fetch50(){
         Fetch49()
         workspace50 = newUnique[50]
         nameFinally50 = newUnique[50].name;
         // nameBoard50 = newUnique[50].username;
      
          console.log(workspace50);
          console.log(nameFinally50);
         //  console.log(nameBoard50);
     }
     
     function Fetch51(){
         Fetch50()
         workspace51 = newUnique[51]
         nameFinally51 = newUnique[51].name;
         // nameBoard51 = newUnique[51].username;
      
          console.log(workspace51);
          console.log(nameFinally51);
         //  console.log(nameBoard51);
     }
     
     function Fetch52(){
         Fetch51()
         workspace52 = newUnique[52]
         nameFinally52 = newUnique[52].name;
         // nameBoard52 = newUnique[52].username;
      
          console.log(workspace52);
          console.log(nameFinally52);
         //  console.log(nameBoard52);
     }
     
     function Fetch53(){
         Fetch52()
         workspace53 = newUnique[53]
         nameFinally53 = newUnique[53].name;
         // nameBoard53 = newUnique[53].username;
      
          console.log(workspace53);
          console.log(nameFinally53);
         //  console.log(nameBoard53);
     }
     
     function Fetch54(){
         Fetch53()
         workspace54 = newUnique[54]
         nameFinally54 = newUnique[54].name;
         // nameBoard54 = newUnique[54].username;
      
          console.log(workspace54);
          console.log(nameFinally54);
         //  console.log(nameBoard54);
     }
     
     function Fetch55(){
         Fetch54()
         workspace55 = newUnique[55]
         nameFinally55 = newUnique[55].name;
         // nameBoard55 = newUnique[55].username;
      
          console.log(workspace55);
          console.log(nameFinally55);
         //  console.log(nameBoard55);
     }
     
     function Fetch56(){
         Fetch55()
         workspace56 = newUnique[56]
         nameFinally56 = newUnique[56].name;
         // nameBoard56 = newUnique[56].username;
      
          console.log(workspace56);
          console.log(nameFinally56);
         //  console.log(nameBoard56);
     }
     
     function Fetch57(){
         Fetch56()
         workspace57 = newUnique[57]
         nameFinally57 = newUnique[57].name;
         // nameBoard57 = newUnique[57].username;
      
          console.log(workspace57);
          console.log(nameFinally57);
         //  console.log(nameBoard57);
     }
     
     function Fetch58(){
         Fetch57()
         workspace58 = newUnique[58]
         nameFinally58 = newUnique[58].name;
         // nameBoard58 = newUnique[58].username;
      
          console.log(workspace58);
          console.log(nameFinally58);
         //  console.log(nameBoard58);
     }
     
     function Fetch59(){
         Fetch58()
         workspace59 = newUnique[59]
         nameFinally59 = newUnique[59].name;
         // nameBoard59 = newUnique[59].username;
      
          console.log(workspace59);
          console.log(nameFinally59);
         //  console.log(nameBoard59);
     }


     function Fetch60(){
       Fetch59()
       workspace60 = newUnique[60]
       nameFinally60 = newUnique[60].name;
       // nameBoard60 = newUnique[60].username;
    
        console.log(workspace60);
        console.log(nameFinally60);
       //  console.log(nameBoard60);
   }
   
   function Fetch61(){
       Fetch60()
       workspace61 = newUnique[61]
       nameFinally61 = newUnique[61].name;
       // nameBoard61 = newUnique[61].username;
    
        console.log(workspace61);
        console.log(nameFinally61);
       //  console.log(nameBoard61);
   }
   
   function Fetch62(){
       Fetch61()
       workspace62 = newUnique[62]
       nameFinally62 = newUnique[62].name;
       // nameBoard62 = newUnique[62].username;
    
        console.log(workspace62);
        console.log(nameFinally62);
       //  console.log(nameBoard62);
   }
   
   function Fetch63(){
       Fetch62()
       workspace63 = newUnique[63]
       nameFinally63 = newUnique[63].name;
       // nameBoard63 = newUnique[63].username;
    
        console.log(workspace63);
        console.log(nameFinally63);
       //  console.log(nameBoard63);
   }
   
   function Fetch66(){
       Fetch63()
       workspace66 = newUnique[66]
       nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(workspace66);
        console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch66(){
       Fetch66()
       workspace66 = newUnique[66]
       nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(workspace66);
        console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch66(){
       Fetch66()
       workspace66 = newUnique[66]
       nameFinally66 = newUnique[66].name;
       // nameBoard66 = newUnique[66].username;
    
        console.log(workspace66);
        console.log(nameFinally66);
       //  console.log(nameBoard66);
   }
   
   function Fetch67(){
       Fetch66()
       workspace67 = newUnique[67]
       nameFinally67 = newUnique[67].name;
       // nameBoard67 = newUnique[67].username;
    
        console.log(workspace67);
        console.log(nameFinally67);
       //  console.log(nameBoard67);
   }
   
   function Fetch68(){
       Fetch67()
       workspace68 = newUnique[68]
       nameFinally68 = newUnique[68].name;
       // nameBoard68 = newUnique[68].username;
    
        console.log(workspace68);
        console.log(nameFinally68);
       //  console.log(nameBoard68);
   }
   
   function Fetch69(){
       Fetch68()
       workspace69 = newUnique[69]
       nameFinally69 = newUnique[69].name;
       // nameBoard69 = newUnique[69].username;
    
        console.log(workspace69);
        console.log(nameFinally69);
       //  console.log(nameBoard69);
   }
   
   
   function Fetch70(){
     Fetch69()
     workspace70 = newUnique[70]
     nameFinally70 = newUnique[70].name;
     // nameBoard70 = newUnique[70].username;
  
      console.log(workspace70);
      console.log(nameFinally70);
     //  console.log(nameBoard70);
 }
 
 function Fetch71(){
     Fetch70()
     workspace71 = newUnique[71]
     nameFinally71 = newUnique[71].name;
     // nameBoard71 = newUnique[71].username;
  
      console.log(workspace71);
      console.log(nameFinally71);
     //  console.log(nameBoard71);
 }
 
 function Fetch72(){
     Fetch71()
     workspace72 = newUnique[72]
     nameFinally72 = newUnique[72].name;
     // nameBoard72 = newUnique[72].username;
  
      console.log(workspace72);
      console.log(nameFinally72);
     //  console.log(nameBoard72);
 }
 
 function Fetch73(){
     Fetch72()
     workspace73 = newUnique[73]
     nameFinally73 = newUnique[73].name;
     // nameBoard73 = newUnique[73].username;
  
      console.log(workspace73);
      console.log(nameFinally73);
     //  console.log(nameBoard73);
 }
 
 function Fetch77(){
     Fetch73()
     workspace77 = newUnique[77]
     nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(workspace77);
      console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch77(){
     Fetch77()
     workspace77 = newUnique[77]
     nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(workspace77);
      console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch76(){
     Fetch77()
     workspace76 = newUnique[76]
     nameFinally76 = newUnique[76].name;
     // nameBoard76 = newUnique[76].username;
  
      console.log(workspace76);
      console.log(nameFinally76);
     //  console.log(nameBoard76);
 }
 
 function Fetch77(){
     Fetch76()
     workspace77 = newUnique[77]
     nameFinally77 = newUnique[77].name;
     // nameBoard77 = newUnique[77].username;
  
      console.log(workspace77);
      console.log(nameFinally77);
     //  console.log(nameBoard77);
 }
 
 function Fetch78(){
     Fetch77()
     workspace78 = newUnique[78]
     nameFinally78 = newUnique[78].name;
     // nameBoard78 = newUnique[78].username;
  
      console.log(workspace78);
      console.log(nameFinally78);
     //  console.log(nameBoard78);
 }
 
 function Fetch79(){
     Fetch78()
     workspace79 = newUnique[79]
     nameFinally79 = newUnique[79].name;
     // nameBoard79 = newUnique[79].username;
  
      console.log(workspace79);
      console.log(nameFinally79);
     //  console.log(nameBoard79);
 }
 
 
 function Fetch80(){
   Fetch79()
   workspace80 = newUnique[80]
   nameFinally80 = newUnique[80].name;
   // nameBoard80 = newUnique[80].username;

    console.log(workspace80);
    console.log(nameFinally80);
   //  console.log(nameBoard80);
}

function Fetch81(){
   Fetch80()
   workspace81 = newUnique[81]
   nameFinally81 = newUnique[81].name;
   // nameBoard81 = newUnique[81].username;

    console.log(workspace81);
    console.log(nameFinally81);
   //  console.log(nameBoard81);
}

function Fetch82(){
   Fetch81()
   workspace82 = newUnique[82]
   nameFinally82 = newUnique[82].name;
   // nameBoard82 = newUnique[82].username;

    console.log(workspace82);
    console.log(nameFinally82);
   //  console.log(nameBoard82);
}

function Fetch83(){
   Fetch82()
   workspace83 = newUnique[83]
   nameFinally83 = newUnique[83].name;
   // nameBoard83 = newUnique[83].username;

    console.log(workspace83);
    console.log(nameFinally83);
   //  console.log(nameBoard83);
}

function Fetch84(){
   Fetch83()
   workspace84 = newUnique[84]
   nameFinally84 = newUnique[84].name;
   // nameBoard8 = newUnique[84].username;

    console.log(workspace84);
    console.log(nameFinally84);
   //  console.log(nameBoard84);
}

function Fetch85(){
   Fetch84()
   workspace85 = newUnique[85]
   nameFinally85 = newUnique[85].name;
   // nameBoard8 = newUnique[8].username;

    console.log(workspace85);
    console.log(nameFinally85);
   //  console.log(nameBoard8);
}

function Fetch86(){
   Fetch85()
   workspace86 = newUnique[86]
   nameFinally86 = newUnique[86].name;
   // nameBoard86 = newUnique[86].username;

    console.log(workspace86);
    console.log(nameFinally86);
   //  console.log(nameBoard86);
}

function Fetch87(){
   Fetch86()
   workspace87 = newUnique[87]
   nameFinally87 = newUnique[87].name;
   // nameBoard87 = newUnique[87].username;

    console.log(workspace87);
    console.log(nameFinally87);
   //  console.log(nameBoard87);
}

function Fetch88(){
   Fetch87()
   workspace88 = newUnique[88]
   nameFinally88 = newUnique[88].name;
   // nameBoard88 = newUnique[88].username;

    console.log(workspace88);
    console.log(nameFinally88);
   //  console.log(nameBoard88);
}

function Fetch89(){
   Fetch88()
   workspace89 = newUnique[89]
   nameFinally89 = newUnique[89].name;
   // nameBoard89 = newUnique[89].username;

    console.log(workspace89);
    console.log(nameFinally89);
   //  console.log(nameBoard89);
}

function Fetch90(){
 Fetch89()
 workspace90 = newUnique[90]
 nameFinally90 = newUnique[90].name;
 // nameBoard90 = newUnique[90].username;

  console.log(workspace90);
  console.log(nameFinally90);
 //  console.log(nameBoard90);
}

function Fetch91(){
 Fetch90()
 workspace91 = newUnique[91]
 nameFinally91 = newUnique[91].name;
 // nameBoard91 = newUnique[91].username;

  console.log(workspace91);
  console.log(nameFinally91);
 //  console.log(nameBoard91);
}

function Fetch92(){
 Fetch91()
 workspace92 = newUnique[92]
 nameFinally92 = newUnique[92].name;
 // nameBoard92 = newUnique[92].username;

  console.log(workspace92);
  console.log(nameFinally92);
 //  console.log(nameBoard92);
}

function Fetch93(){
 Fetch92()
 workspace93 = newUnique[93]
 nameFinally93 = newUnique[93].name;
 // nameBoard93 = newUnique[93].username;

  console.log(workspace93);
  console.log(nameFinally93);
 //  console.log(nameBoard93);
}

function Fetch94(){
 Fetch93()
 workspace94 = newUnique[94]
 nameFinally94 = newUnique[94].name;
 // nameBoard94 = newUnique[94].username;

  console.log(workspace94);
  console.log(nameFinally94);
 //  console.log(nameBoard9);
}

function Fetch95(){
 Fetch94()
 workspace95 = newUnique[95]
 nameFinally95 = newUnique[95].name;
 // nameBoard9 = newUnique[9].username;

  console.log(workspace95);
  console.log(nameFinally95);
 //  console.log(nameBoard9);
}

function Fetch96(){
 Fetch95()
 workspace96 = newUnique[96]
 nameFinally96 = newUnique[96].name;
 // nameBoard96 = newUnique[96].username;

  console.log(workspace96);
  console.log(nameFinally96);
 //  console.log(nameBoard96);
}

function Fetch97(){
 Fetch96()
 workspace97 = newUnique[97]
 nameFinally97 = newUnique[97].name;
 // nameBoard97 = newUnique[97].username;

  console.log(workspace97);
  console.log(nameFinally97);
 //  console.log(nameBoard97);
}

function Fetch98(){
 Fetch97()
 workspace98 = newUnique[98]
 nameFinally98 = newUnique[98].name;
 // nameBoard98 = newUnique[98].username;

  console.log(workspace98);
  console.log(nameFinally98);
 //  console.log(nameBoard98);
}

function Fetch99(){
 Fetch98()
 workspace99 = newUnique[99]
 nameFinally99 = newUnique[99].name;
 // nameBoard99 = newUnique[99].username;

  console.log(workspace99);
  console.log(nameFinally99);
 //  console.log(nameBoard99);
}

function Fetch100(){
 Fetch99()
 workspace100 = newUnique[100]
 nameFinally100 = newUnique[100].name;
 // nameBoard100 = newUnique[100].username;

  console.log(workspace100);
  console.log(nameFinally100);
 //  console.log(nameBoard100);
}

function Fetch101(){
 Fetch100()
 workspace101 = newUnique[101]
 nameFinally101 = newUnique[101].name;
 // nameBoard101 = data[101].username;

  console.log(workspace101);
  console.log(nameFinally101);
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
            LetsCheckStart ()
           }, 50);
                


}
fetchworkspace0().catch(error=>{
    console.log("error")
    console.log(error)
  })
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

      window.onload=''
        showProgressBar()
        showContentswhenLoading () 

    emailEmptyErr.innerHTML =''
  emailEmptyErr2.innerHTML =''
  serviceErrorEl.innerHTML = ''
  serviceErrorEl2.innerHTML =''
  sendingProgressEl2.innerHTML =''
  sendingProgressEl.innerHTML =''
  fetchingBoardsEl.innerHTML =''
  reloading()
}
}

function reloading(){

window.location.reload();
return false
}


function inviscibleWrongMessage (){
  if (fetchingBoardsEl.style. visibility === "visible") {
    fetchingBoardsEl.style. visibility = "hidden";
  } else {
    fetchingBoardsEl.style. visibility = "hidden";
  }   
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
    addmailEl.innerHTML  = `Invalid email address.`

  inviscibleAdmail();
  HideDeleteButton ()
  RefreshButtonShow();
   
}



// Adding Members to each ID Fetched//

function Add0  () {

    async function addWorkspace0(){
  
      const response = await fetch(`https://api.trello.com/1/organizations/${workspace0}/members?key=${apiKey}&token=${apiToken}`
      ,{
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              
                email:`${emailValue}`
              
  })}
  )
         
      const data = await response.json()
      console.log(data)

      durationFetching = (seriaNo * 0.8) + 3
      errorMes2 = (data.error)
      errorMes =(data.message)
      errorMessage()
     
      successMess ()
      return data;
     
    }
    
        addWorkspace0().catch(error=>{
            console.log("error")
            console.log(error)
              if (error) {
  
  }
          })

}


function Add1(){
async function addWorkspace1(){
    seriaNo = 2
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace1}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                  email:`${emailValue}`
                
    })}
    )

       
    const data = await response.json()
    console.log(data)
     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}
addWorkspace1().catch(error=>{
    console.log("error")

  })

}


function Add2(){

    async function addWorkspace2(){
        seriaNo = 3
        const response = await fetch(`https://api.trello.com/1/organizations/${workspace2}/members?key=${apiKey}&token=${apiToken}`
            ,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                      email:`${emailValue}`
                    
        })}
        )
      
           
        const data = await response.json()
        console.log(data)
    
         durationFetching = (seriaNo * 0.8) + 3
        errorMes2 = (data.error)
        errorMes =(data.message)
        errorMessage()
        localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
       
        successMess ()
        return data;
    }
    addWorkspace2().catch(error=>{
        console.log("error")
        console.log(error)
          if (error) {
  
  }
      })

}

function Add3 (){
async function addWorkspace3(){
    seriaNo = 4
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace3}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(workspace3 == null) {
        console.log("Damn, Network")
    }

    const data = await response.json()
    console.log(data)
     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace3().catch(error=>{
    console.log("error")

  })

}

function Add4 (){
async function addWorkspace4(){

    seriaNo = 5
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace4}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )

    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace4().catch(error=>{
    console.log("error")

  if (error) {
  
  }

  })

}

function Add5 (){
async function addWorkspace5(){
    seriaNo = 6
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace5}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    if(workspace5 == null) {
        console.log("Damn, Network")
    }
    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace5().catch(error=>{
    console.log("error")

  })
}

function Add6(){

async function addWorkspace6(){
    seriaNo = 7
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace6}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(workspace6 == null) {
        console.log("Damn, Network")
    } 
    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace6().catch(error=>{
    console.log("error")

  })

}

function Add7 (){
async function addWorkspace7(){
    seriaNo = 8
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace7}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
    if(workspace7 == null) {
        console.log("Damn, Network")
    }
       
    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}
addWorkspace7().catch(error=>{
    console.log("error")

  })

}

function Add8 (){
async function addWorkspace8(){
    if(workspace8 == null) {
        console.log("Damn, Network")
    }
    seriaNo = 9
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace8}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
   
       
    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace8().catch(error=>{
    console.log("error")

  })

}

function Add9 (){
async function addWorkspace9(){
    seriaNo = 10
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace9}/members?key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                  email:`${emailValue}`
                
    })}
    )
       
    const data = await response.json()
    console.log(data)

     durationFetching = (seriaNo * 0.8) + 3
    errorMes2 = (data.error)
    errorMes =(data.message)
    errorMessage()
    localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
   
    successMess ()
    return data;
}

addWorkspace9().catch(error=>{
    console.log("error")

  })
}

function Add10 (){
async function addWorkspace10(){

    seriaNo = 11
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace10}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}

addWorkspace10().catch(error=>{
    console.log("error")

  })
}

function Add11 (){
async function addWorkspace11(){

    seriaNo = 12
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace11}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace11().catch(error=>{
    console.log("error")

  })

}

function Add12 (){
async function addWorkspace12(){

    seriaNo = 13
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace12}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace12().catch(error=>{
    console.log("error")

  })

}

function Add13 (){
async function addWorkspace13(){

    seriaNo = 14
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace13}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace13().catch(error=>{
    console.log("error")

  })
}

function Add14 (){
async function addWorkspace14(){

    seriaNo = 15
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace14}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}

addWorkspace14().catch(error=>{
    console.log("error")

  })
}

function Add15 (){
async function addWorkspace15(){

    seriaNo = 16
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace15}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}

addWorkspace15().catch(error=>{
    console.log("error")

  })

}

function Add16 (){
async function addWorkspace16(){

    seriaNo = 17
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace16}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace16().catch(error=>{
    console.log("error")

  })

}

function Add17 (){
async function addWorkspace17(){

    seriaNo = 18
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace17}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace17().catch(error=>{
    console.log("error")

  })

}


function Add18 (){
async function addWorkspace18(){

    seriaNo = 19
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace18}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace18().catch(error=>{
    console.log("error")

  })
}

function Add19 (){
async function addWorkspace19(){

    seriaNo = 20
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace19}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace19().catch(error=>{
    console.log("error")

  })

}

function Add20 (){
async function addWorkspace20(){

    seriaNo = 21
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace20}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
     localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
    successMess ()
   
    return data;
}
addWorkspace20().catch(error=>{
    console.log("error")

  })

}

function Add21 (){

async function addWorkspace21(){

    seriaNo = 22
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace21}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace21().catch(error=>{
    console.log("error")

  })

}


function Add22 (){
async function addWorkspace22(){

    seriaNo = 23
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace22}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace22().catch(error=>{
    console.log("error")

  })
}


function Add23 (){
async function addWorkspace23(){

    seriaNo = 24
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace23}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace23().catch(error=>{
    console.log("error")

  })
}



function Add24 (){
async function addWorkspace24(){

    seriaNo = 25
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace24}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace24().catch(error=>{
    console.log("error")

  })
}

function Add25 () {
async function addWorkspace25(){

    seriaNo = 26
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace25}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace25().catch(error=>{
    console.log("error")

  })
}

function Add26 (){
async function addWorkspace26(){

    seriaNo = 27
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace26}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace26().catch(error=>{
    console.log("error")

  })
}

function Add27 () {
async function addWorkspace27 (){

    seriaNo = 28
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace27}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace27().catch(error=>{
    console.log("error")

  })
}
function Add28 () {
async function addWorkspace28(){

    seriaNo = 29
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace28}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace28().catch(error=>{
    console.log("error")

  })
}

function Add29 () {
async function addWorkspace29(){

    seriaNo = 30;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace29}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace29().catch(error=>{
    console.log("error")

  })
}

function Add30 (){
async function addWorkspace30(){

    seriaNo = 31
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace30}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace30().catch(error=>{
    console.log("error")

  })
}

function Add31 () {
async function addWorkspace31(){

    seriaNo = 32
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace31}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace31().catch(error=>{
    console.log("error")

  })
}
function Add32 (){
async function addWorkspace32(){

    seriaNo = 33;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace32}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace32().catch(error=>{
    console.log("error")

  })
}

function Add33 (){
async function addWorkspace33(){

    seriaNo = 34;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace33}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace33().catch(error=>{
    console.log("error")

  })
}

function Add34 (){
async function addWorkspace34(){

    seriaNo = 35;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace34}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace34().catch(error=>{
    console.log("error")

  })
}

function Add35 (){
async function addWorkspace35(){

    seriaNo = 36;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace35}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace35().catch(error=>{
    console.log("error")

  })
}
function Add36 (){
async function addWorkspace36(){

    seriaNo = 37
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace36}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace36().catch(error=>{
    console.log("error")

  })
}
function Add37 () {
async function addWorkspace37(){

    seriaNo = 38;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace37}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace37().catch(error=>{
    console.log("error")

  })
}
function Add38 () {
async function addWorkspace38(){

    seriaNo = 39;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace38}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace38().catch(error=>{
    console.log("error")

  })
}

function Add39 (){
async function addWorkspace39(){

    seriaNo = 40;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace39}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace39().catch(error=>{
    console.log("error")

  })
}

function Add40 () {
async function addWorkspace40(){

    seriaNo = 41;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace40}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace40().catch(error=>{
    console.log("error")

  })
}

function Add41 () {
async function addWorkspace41(){

    seriaNo = 42;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace41}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace41().catch(error=>{
    console.log("error")

  })
}

function Add42 () {
async function addWorkspace42(){

    seriaNo = 43;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace42}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace42().catch(error=>{
    console.log("error")

  })
}

function Add43 () {
async function addWorkspace43(){

    seriaNo = 44
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace43}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace43().catch(error=>{
    console.log("error")

  })
}

function Add44 () {
async function addWorkspace44(){

    seriaNo = 45;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace44}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace44().catch(error=>{
    console.log("error")

  })
}

function Add45 () {
async function addWorkspace45(){

    seriaNo = 46
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace45}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace45().catch(error=>{
    console.log("error")

  })
}

function Add46 () {

async function addWorkspace46(){

    seriaNo = 47;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace46}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace46().catch(error=>{
    console.log("error")

  })
}

function Add47 () {
async function addWorkspace47(){

    seriaNo = 48;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace47}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace47().catch(error=>{
    console.log("error")

  })
}

function Add48 () {
async function addWorkspace48(){

    seriaNo = 49;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace48}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace48().catch(error=>{
    console.log("error")

  })
}
function Add49 () {
async function addWorkspace49(){

    seriaNo = 50;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace49}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace49().catch(error=>{
    console.log("error")

  })
}

function Add50 () {
async function addWorkspace50(){

    seriaNo = 51;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace50}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace50().catch(error=>{
    console.log("error")

  })
}

function Add51 () {
async function addWorkspace51(){
    seriaNo = 52;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace51}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace51().catch(error=>{
    console.log("error")

  })
}

function Add52 () {

async function addWorkspace52(){

    seriaNo = 53;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace52}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace52().catch(error=>{
    console.log("error")

  })
}

function Add53 () {
async function addWorkspace53(){

    seriaNo = 54;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace53}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace53().catch(error=>{
    console.log("error")

  })
}

function Add54 () {
async function addWorkspace54(){

    seriaNo = 55;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace54}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace54().catch(error=>{
    console.log("error")

  })
}

function Add55 () {
async function addWorkspace55(){

    seriaNo = 56
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace55}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace55().catch(error=>{
    console.log("error")

  })
}

function Add56 () {
async function addWorkspace56(){

    seriaNo = 57
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace56}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace56().catch(error=>{
    console.log("error")

  })
}

function Add57 () {
async function addWorkspace57(){

    seriaNo = 58
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace57}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace57().catch(error=>{
    console.log("error")

  })
}

function Add58 () {
async function addWorkspace58(){

    seriaNo = 59
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace58}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace58().catch(error=>{
    console.log("error")

  })
}

function Add59 () {
async function addWorkspace59(){

    seriaNo = 60;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace59}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace59().catch(error=>{
    console.log("error")

  })
}

function Add60 () {
async function addWorkspace60(){

    seriaNo = 61;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace60}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace60().catch(error=>{
    console.log("error")

  })
}

function Add61 () {
async function addWorkspace61(){

    seriaNo = 62
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace61}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace61().catch(error=>{
    console.log("error")

  })
}

function Add62 () {
async function addWorkspace62(){

    seriaNo = 63
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace62}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace62().catch(error=>{
    console.log("error")

  })
}

function Add63 () {
async function addWorkspace63(){

    seriaNo = 64;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace63}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace63().catch(error=>{
    console.log("error")

  })
}

function Add64 () {
async function addWorkspace64(){

    seriaNo = 65;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace64}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace64().catch(error=>{
    console.log("error")

  })
}

function Add65 () {
async function addWorkspace65(){

    seriaNo = 66
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace65}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace65().catch(error=>{
    console.log("error")

  })
}

function Add66 () {
async function addWorkspace66(){

    seriaNo = 67
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace66}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace66().catch(error=>{
    console.log("error")

  })
}

function Add67 () {

async function addWorkspace67(){

    seriaNo = 68
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace67}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace67().catch(error=>{
    console.log("error")

  })
}

function Add68 () {

async function addWorkspace68(){

    seriaNo = 69;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace68}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace68().catch(error=>{
    console.log("error")

  })
}

function Add69 () {
async function addWorkspace69(){

    seriaNo = 70;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace69}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace69().catch(error=>{
    console.log("error")

  })
}

function Add70 () {
async function addWorkspace70(){

    seriaNo = 71;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace70}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace70().catch(error=>{
    console.log("error")

  })
}

function Add71 () {
async function addWorkspace71(){

    seriaNo = 72;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace71}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace71().catch(error=>{
    console.log("error")

  })
}

function Add72 () {
async function addWorkspace72(){

    seriaNo = 73;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace72}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace72().catch(error=>{
    console.log("error")

  })
}

function Add73 () {
async function addWorkspace73(){

    seriaNo = 74;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace73}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace73().catch(error=>{
    console.log("error")

  })
}

function Add74 () {
async function addWorkspace74(){

    seriaNo = 75;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace74}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace74().catch(error=>{
    console.log("error")

  })
}

function Add75 () {
async function addWorkspace75(){

    seriaNo = 76;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace75}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace75().catch(error=>{
    console.log("error")

  })
}

function Add76 () {
async function addWorkspace76(){

    seriaNo = 77
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace76}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace76().catch(error=>{
    console.log("error")

  })
}
function Add77 () {
async function addWorkspace77(){

    seriaNo = 78;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace77}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace77().catch(error=>{
    console.log("error")

  })
}

function Add78 () {
async function addWorkspace78(){

    seriaNo = 79;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace78}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace78().catch(error=>{
    console.log("error")

  })
}

function Add79 () {

async function addWorkspace79(){

    seriaNo = 80;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace79}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace79().catch(error=>{
    console.log("error")

  })
}

function Add80 () {
async function addWorkspace80(){

    seriaNo = 81;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace80}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace80().catch(error=>{
    console.log("error")

  })
}

function Add81 () {
async function addWorkspace81(){

    seriaNo = 82;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace81}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace81().catch(error=>{
    console.log("error")

  })
}

function Add82 () {
async function addWorkspace82(){

    seriaNo = 83;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace82}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace82().catch(error=>{
    console.log("error")

  })
}

function Add83 () {
async function addWorkspace83(){

    seriaNo = 84;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace83}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace83().catch(error=>{
    console.log("error")

  })
}

function Add84 () {
async function addWorkspace84(){

    seriaNo = 85;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace84}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace84().catch(error=>{
    console.log("error")

  })
}

function Add85 () {
async function addWorkspace85(){

    seriaNo = 86;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace85}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace85().catch(error=>{
    console.log("error")

  })
}

function Add86 () {
async function addWorkspace86(){

    seriaNo = 87
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace86}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace86().catch(error=>{
    console.log("error")

  })
}

function Add87 () {
async function addWorkspace87(){

    seriaNo = 88;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace87}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace87().catch(error=>{
    console.log("error")

  })
}

function Add88 () {

async function addWorkspace88(){

    seriaNo = 89;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace88}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace88().catch(error=>{
    console.log("error")

  })
}
function Add89 () {
async function addWorkspace89(){

    seriaNo = 90;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace89}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace89().catch(error=>{
    console.log("error")

  })
}

function Add90 () {
async function addWorkspace90(){

    seriaNo = 91;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace90}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace90().catch(error=>{
    console.log("error")

  })
}

function Add91 () {
async function addWorkspace91(){

    seriaNo = 92;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace91}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace91().catch(error=>{
    console.log("error")

  })
}

function Add92 () {
async function addWorkspace92(){

    seriaNo = 93;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace92}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace92().catch(error=>{
    console.log("error")

  })
}

function Add93 () {
async function addWorkspace93(){

    seriaNo = 94;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace93}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace93().catch(error=>{
    console.log("error")

  })
}

function Add94 () {
async function addWorkspace94(){

    seriaNo = 95;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace94}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace94().catch(error=>{
    console.log("error")

  })
}

function Add95 () {
async function addWorkspace95(){

    seriaNo = 96;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace95}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace95().catch(error=>{
    console.log("error")

  })
}

function Add96 () {

async function addWorkspace96(){

    seriaNo = 97;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace96}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace96().catch(error=>{
    console.log("error")

  })
}

function Add97 () {
async function addWorkspace97(){

    seriaNo = 98;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace97}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace97().catch(error=>{
    console.log("error")

  })
}
function Add98 () {

async function addWorkspace98(){

    seriaNo = 99
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace98}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}
addWorkspace98().catch(error=>{
    console.log("error")

  })
}

function Add99 () {
async function addWorkspace99(){

    seriaNo = 100;
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace99}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   

    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace99().catch(error=>{
    console.log("error")

  })
}

function Add100 () {
async function addWorkspace100(){

    seriaNo = 101
    const response = await fetch(`https://api.trello.com/1/organizations/${workspace100}/members?&key=${apiKey}&token=${apiToken}`
        ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                
                 email:`${emailValue}`
                
    })}
    )   
    const data = await response.json()
    console.log(data)

    errorMes2 = (data.error)
    errorMes =(data.message)
localStorage.setItem("error1", JSON.stringify(errorMes))
localStorage.setItem("error2", JSON.stringify(errorMes2))
     errorMessage()
    successMess ()
   
    return data;
}

addWorkspace100().catch(error=>{
    console.log("error")
    console.log(error)
  })
}


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











  

function LetsCheckStart () {
  if (newUniqueLenght==0){
    serialNo = 2
  
       displayBoardFetched ()
       hideProgressBar()
     move()
    
   
    setTimeout(() => {
     
     addMember0 ()
    }, 2000); }

    if (newUniqueLenght==1){
     serialNo = 2
   
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember1 ()
     }, 2000); } 
   
     else if (newUniqueLenght==2){
        serialNo = 3
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember2 ()
     }, 2000); } 
   
     else if (newUniqueLenght==3){
        serialNo = 4
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember3 ()
     }, 2000); } 
   
     else if (newUniqueLenght==4){
        serialNo=5
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember4 ()
     }, 2000); } 
   
     else if (newUniqueLenght==5){
        serialNo=6
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember5 ()
     }, 2000); } 
   
     else if (newUniqueLenght==6){
        serialNo = 7
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember6 ()
     }, 2000); } 
   
     else if (newUniqueLenght==7){
        serialNo=8
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember7 ()
     }, 2000); } 
   
     else if (newUniqueLenght==8){
        serialNo=9
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember8 ()
     }, 2000); } 
   
     else if (newUniqueLenght==9){
        serialNo = 10;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
    
     setTimeout(() => {
      
      addMember9 ()
     },  2000); } 
   
     else if (newUniqueLenght==10){
        serialNo= 11;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
       
     setTimeout(() => {
      
      addMember10 ()
     },  2000); } 
   
     else if (newUniqueLenght==11){
        serialNo =12;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember11 ()
     },  2000); } 
   
     else if (newUniqueLenght==12){
        serialNo = 13
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember12 ()
     },  2000); } 
   
     else if (newUniqueLenght==13){
        serialNo =14;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember13 ()
     },  2000); } 
   
     else if (newUniqueLenght==14){
        serialNo =15
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember14 ()
     }, 13120); } 
   
     else if (newUniqueLenght==15){
        serialNo =16;
      
        displayBoardFetched ()
        hideProgressBar()
      move()

     setTimeout(() => {
      
      addMember15 ()
     },  2000); } 
   
     else if (newUniqueLenght==16){
        serialNo =17;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      addMember16 ()
     },  2000); } 
   
     else if (newUniqueLenght==17){
   
        serialNo =18;
   
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
       
      addMember17 ()
     },  2000); } 
   
   
     else if (newUniqueLenght==18){
        
        serialNo =19;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember18 ()
     },  2000); } 
   
     else if (newUniqueLenght==19){
        serialNo =20
        addMember0()
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember19 ()
     },  2000); } 
   
     else if (newUniqueLenght==20){
        serialNo =21;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember20 ()
     },  2000); } 
   
   
     else if (newUniqueLenght==21){
        serialNo =22;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember21 ()
     },  2000); } 
   
     else if (newUniqueLenght==22){
        serialNo = 23;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember22 ()
     },  2000); } 
   
     else if (newUniqueLenght==23){
        serialNo = 24;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember23 ()
     },  2000); } 
   
     else if (newUniqueLenght==24){
        serialNo = 25;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember24 ()
     },  2000); } 
   
     else if (newUniqueLenght==25){
        serialNo =26;
   
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember25 ()
     },  2000); } 
   
     else if (newUniqueLenght==26){
        serialNo= 27;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember26 ()
     },  2000); } 
   
     else if (newUniqueLenght==27){
        serialNo =28;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember27 ()
     },  2000); } 
   
     else if (newUniqueLenght==28){
        serialNo = 29;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember28 ()
     },  2000); } 
   
     else if (newUniqueLenght==29){
        serialNo = 30;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember29 ()
     },  2000); } 
   
   
     else if (newUniqueLenght==30){
        serialNo =31;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember30 ()
     },  2000); } 
   
     else if (newUniqueLenght==31){
        serialNo = 32;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember31 ()
     },  2000); } 
   
     else if (newUniqueLenght==32){
        serialNo = 33;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember32 ()
     },  2000); } 
   
     else if (newUniqueLenght==33){
        serialNo = 34;
   
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember33 ()
     },  2000); } 
   
     else if (newUniqueLenght==34){
        serialNo = 35
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember34 ()
     },  2000); } 
   
     else if (newUniqueLenght==35){
        serialNo = 36
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember35 ()
     },  2000); } 
   
     else if (newUniqueLenght==36){
        serialNo = 37;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember36 ()
     },  2000); } 
   
     else if (newUniqueLenght==37){
        serialNo = 38;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember37 ()
     },  2000); } 
   
     else if (newUniqueLenght==38){
        serialNo = 39
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember38 ()
     },  2000); } 
   
     else if (newUniqueLenght==39){
        serialNo = 40;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember39 ()
     },  2000); } 
   
     else if (newUniqueLenght==40){
        serialNo =41;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember40 ()
     },  2000); } 
   
     else if (newUniqueLenght==41){
        serialNo = 42;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember41 ()
     },  2000); } 
   
     else if (newUniqueLenght==42){
        serialNo =43;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember42 ()
     },  2000); } 
   
     else if (newUniqueLenght==43){
        serialNo = 44;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember43 ()
     },  2000); } 
   
     else if (newUniqueLenght==44){
        serialNo = 45;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember44 ()
     },  2000); } 
   
     else if (newUniqueLenght==45){
        serialNo =46;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember45 ()
     },  2000); } 
   
     else if (newUniqueLenght==46){
        serialNo = 47;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember46 ()
     },  2000); } 
   
     else if (newUniqueLenght==47){
        serialNo = 48;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember47 ()
     },  2000); } 
   
     else if (newUniqueLenght==48){
        serialNo = 49;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember48 ()
     },  2000); } 
   
     else if (newUniqueLenght==49){
        serialNo = 50;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember49 ()
     },  2000); } 
   
   
     else if (newUniqueLenght==50){
        serialNo = 51;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember50 ()
     },  2000); } 
   
     else if (newUniqueLenght==51){
        serialNo = 52;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember51 ()
     },  2000); } 
   
     else if (newUniqueLenght==52){
        serialNo = 53;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember52 ()
     },  2000); } 
   
     else if (newUniqueLenght==53){
        serialNo = 54;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember53 ()
     },  2000); } 
   
     else if (newUniqueLenght==54){
        serialNo = 55;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember54 ()
     },  2000); } 
   
     else if (newUniqueLenght==55){
        serialNo =56;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember55 ()
     },  2000); } 
   
     else if (newUniqueLenght==56){
        serialNo = 57
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember56 ()
     },  2000); } 
   
     else if (newUniqueLenght==57){
        serialNo =58
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember57 ()
     }, 2000); } 
   
     else if (newUniqueLenght==58){
        serialNo = 59
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember58 ()
     }, 2000); } 
   
     else if (newUniqueLenght==59){
        serialNo = 60
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember59 ()
     }, 2000); } 
   
   
     else if (newUniqueLenght==60){
        serialNo = 61;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember60 ()
     },  2000); } 
   
     else if (newUniqueLenght==61){
        serialNo=62;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     
   

     setTimeout(() => {
      
      addMember61 ()
     }, 2000); } 
   
     else if (newUniqueLenght==62){
        serialNo=63;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember62 ()
     }, 2000); } 
   
     else if (newUniqueLenght==63){
        serialNo=64;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember63 ()
     }, 2000); } 
   
     else if (newUniqueLenght==64){
        serialNo = 65;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember64 ()
     }, 2000); } 
   
     else if (newUniqueLenght==65){
        serialNo= 66;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember65 ()
     }, 2000); } 
   
     else if (newUniqueLenght==66){
        serialNo= 67;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember66 ()
     }, 2000); } 
   
     else if (newUniqueLenght==67){
        serialNo= 68;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember67 ()
     }, 2000); } 
   
     else if (newUniqueLenght==68){
        serialNo=69;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember68 ()
     }, 2000); } 
   
     else if (newUniqueLenght==69){
        serialNo= 70;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember69 ()
     }, 2000); } 
   
     else if (newUniqueLenght==70){
        serialNo= 71;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember70 ()
     }, 2000); } 
   
     else if (newUniqueLenght==71){
        serialNo=72;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember71 ()
     }, 2000); } 
   
     else if (newUniqueLenght==72){
        serialNo= 73;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember72 ()
     }, 2000); } 
   
     else if (newUniqueLenght==73){
        serialNo= 74;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember73 ()
     }, 2000); } 
   
     else if (newUniqueLenght==74){
        serialNo = 75;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember74 ()
     }, 2000); } 
   
     else if (newUniqueLenght==75){
        serialNo = 76;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember75 ()
     }, 2000); } 
   
     else if (newUniqueLenght==76){
        serialNo = 77;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember76 ()
     }, 2000); } 
   
     else if (newUniqueLenght==77){
        serialNo = 78;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember77 ()
     }, 2000); } 
   
     else if (newUniqueLenght==78){
        serialNo = 79;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember78 ()
     }, 2000); } 
   
     else if (newUniqueLenght==79){
        serialNo = 80;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember79 ()
     }, 2000); } 
   
     else if (newUniqueLenght==80){
        serialNo = 81;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember80 ()
     }, 2000); } 
   
     else if (newUniqueLenght==81){
        serialNo = 82
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember81 ()
     }, 2000); } 
   
     else if (newUniqueLenght==82){
        serialNo = 83;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember82 ()
     }, 2000); } 
   
     else if (newUniqueLenght==83){
        serialNo = 84;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember83 ()
     }, 2000); } 
   
     else if (newUniqueLenght==84){
        serialNo = 85;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember84 ()
     }, 2000); } 
   
     else if (newUniqueLenght==85){
        serialNo = 86;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember85 ()
     }, 2000); } 
   
     else if (newUniqueLenght==86){
        serialNo = 87;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember86 ()
     }, 2000); } 
   
     else if (newUniqueLenght==87){
        serialNo = 88;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember87 ()
     }, 2000); } 
   
     else if (newUniqueLenght==88){
        serialNo = 89;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember88 ()
     }, 2000); } 
   
     else if (newUniqueLenght==89){
        serialNo = 90;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember89 ()
     }, 2000); } 
   
     else if (newUniqueLenght==90){
        serialNo = 91;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember90 ()
     }, 2000); } 
   
     else if (newUniqueLenght==91){
        serialNo = 92;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember91 ()
     }, 2000); } 
   
     else if (newUniqueLenght==92){
        serialNo = 93;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember92 ()
     }, 2000); } 
   
     else if (newUniqueLenght==93){
        serialNo = 94;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember93 ()
     }, 2000); } 
   
     else if (newUniqueLenght==94){
        serialNo = 95;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember94 ()
     }, 2000); } 
   
     else if (newUniqueLenght==95){
        serialNo = 96;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember95 ()
     }, 2000); } 
   
     else if (newUniqueLenght==96){
        serialNo = 97;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember96 ()
     },2000); } 
   
     else if (newUniqueLenght==97){
        serialNo = 98;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember97 ()
     }, 86160); } 
   
     else if (newUniqueLenght==98){
        serialNo = 99;
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember98 ()
     },2000 ); } 
   
     else if (newUniqueLenght==99){
        serialNo = 100
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember99 ()
     }, 2000); } 
   
     else if (newUniqueLenght==100){
        serialNo = 101
      
        displayBoardFetched ()
        hideProgressBar()
      move()
     

     setTimeout(() => {
      
      addMember100 ()
     }, 2000); } 
     
   }
