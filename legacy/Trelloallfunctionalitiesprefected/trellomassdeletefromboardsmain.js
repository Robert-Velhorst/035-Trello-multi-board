
let emailValue1 =[];
let stringedId
let idFinally;
let data;
let lenghtID;
let errorMes; let errorMes2;
let Fetch13
let getId4; let getId3;
let seriaNo;

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

    if (lenghtID <40) {

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

    else if (lenghtID<70) {

       hideProgressBar()  
        setInterval(addFrame, 5*66);
        function addFrame() {
            if (result < 100) {
                result = result + speed;
                progress.style.width = result + "%";
                progress.innerHTML = result + "%";
            }
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

    HideRefreshButton ()
    HideDeleteButton();
   
     data = await response.json()
     realLenght = data.length
    lenghtID = (data.length) -1
    durationFetching = (seriaNo * 0.8) + 3;
    console.log(data)
    console.log(realLenght)
    hideContentswhenLoading ()
    move ()
    displayBoardFetched()

    function boardIt0(){
        idFetched0 = data[0].id;
        nameFinally0 = data[0].name;
        // nameBoard0 = data[0].username;
        
         console.log(nameFinally0);
        //  console.log(nameBoard0);
        }
        function boardIt1() {
            boardIt0 ()
            idFetched1 = data[1].id
            nameFinally1 = data[1].name;
            // nameBoard1 = data[1].username;
         
             console.log(idFetched1);
             console.log(nameFinally1);
            //  console.log(nameBoard1);
        }
        
        function boardIt2(){
            boardIt1()
            idFetched2 = data[2].id
            nameFinally2 = data[2].name;
            // nameBoard2 = data[2].username;
         
             console.log(idFetched2);
             console.log(nameFinally2);
            //  console.log(nameBoard2);
        
        }
        function boardIt3(){
            boardIt2()
            idFetched3 = data[3].id
            nameFinally3 = data[3].name;
            // nameBoard3 = data[3].username;
         
             console.log(idFetched3);
             console.log(nameFinally3);
            //  console.log(nameBoard3);
        }
        function boardIt4(){
            boardIt3()
        
            idFetched4 = data[4].id
            nameFinally4 = data[4].name;
            // nameBoard4 = data[4].username;
         
             console.log(idFetched4);
             console.log(nameFinally4);
            //  console.log(nameBoard4);
        }
        
        function boardIt5(){
            boardIt4()
            idFetched5 = data[5].id
            nameFinally5 = data[5].name;
            // nameBoard5 = data[5].username;
         
             console.log(idFetched5);
             console.log(nameFinally5);
            //  console.log(nameBoard5);
        }
        
        function boardIt6(){
            boardIt5()
            idFetched6 = data[6].id
            nameFinally6 = data[6].name;
            // nameBoard6 = data[6].username;
         
             console.log(idFetched6);
             console.log(nameFinally6);
            //  console.log(nameBoard6);
        }
        
        function boardIt7(){
            boardIt6()
            idFetched7 = data[7].id
            nameFinally7 = data[7].name;
            // nameBoard7 = data[7].username;
        
             console.log(idFetched7);
             console.log(nameFinally7);
            //  console.log(nameBoard7);
        }
        
        function boardIt8(){
            boardIt7()
            idFetched8 = data[8].id
            nameFinally8 = data[8].name;
            // nameBoard8 = data[8].username;
         
             console.log(idFetched8);
             console.log(nameFinally8);
        }
        function boardIt9(){
            boardIt8()
            idFetched9 = data[9].id
            nameFinally9 = data[9].name;
            // nameBoard9 = data[9].username;
         
             console.log(idFetched9);
             console.log(nameFinally9);
            //  console.log(nameBoard9);
        }
        function boardIt10(){
            boardIt9()
            idFetched10 = data[10].id
            nameFinally10 = data[10].name;
            // nameBoard10 = data[10].username;
         
             console.log(idFetched10);
             console.log(nameFinally10);
            //  console.log(nameBoard10);
        }
        
        function boardIt11(){
            boardIt10()
            idFetched11 = data[11].id
            nameFinally11 = data[11].name;
            // nameBoard11 = data[11].username;
         
             console.log(idFetched11);
             console.log(nameFinally11);
            //  console.log(nameBoard11);
        }
        
        function boardIt11(){
            boardIt10()
            idFetched11 = data[11].id
            nameFinally11 = data[11].name;
            // nameBoard11 = data[11].username;
         
             console.log(idFetched11);
             console.log(nameFinally11);
            //  console.log(nameBoard11);
        }
        
        function boardIt12(){
            boardIt11()
            idFetched12 = data[12].id
            nameFinally12 = data[12].name;
            // nameBoard12 = data[12].username;
         
             console.log(idFetched12);
             console.log(nameFinally12);
            //  console.log(nameBoard12);
        }
        
        function boardIt13(){
            boardIt12()
            idFetched13 = data[13].id
            nameFinally13 = data[13].name;
            // nameBoard13 = data[13].username;
         
             console.log(idFetched13);
             console.log(nameFinally13);
            //  console.log(nameBoard13);
        }
         
        function boardIt14(){
            boardIt13()
            idFetched14 = data[14].id
            nameFinally14 = data[14].name;
            // nameBoard14 = data[14].username;
         
             console.log(idFetched14);
             console.log(nameFinally14);
            //  console.log(nameBoard14);
        }
        
        function boardIt15(){
            boardIt14()
            idFetched15 = data[15].id
            nameFinally15 = data[15].name;
            // nameBoard15 = data[15].username;
         
             console.log(idFetched15);
             console.log(nameFinally15);
            //  console.log(nameBoard15);
        }
        
        function boardIt16(){
            boardIt15()
            idFetched16 = data[16].id
            nameFinally16 = data[16].name;
            // nameBoard16 = data[16].username;
         
             console.log(idFetched16);
             console.log(nameFinally16);
            //  console.log(nameBoard16);
        }
        
        function boardIt17(){
            boardIt16()
            idFetched17 = data[17].id
            nameFinally17 = data[17].name;
            // nameBoard17 = data[17].username;
         
             console.log(idFetched17);
             console.log(nameFinally17);
            //  console.log(nameBoard17);
        }
        
        function boardIt18(){
            boardIt17()
            idFetched18 = data[18].id
            nameFinally18 = data[18].name;
            // nameBoard18 = data[18].username;
         
             console.log(idFetched18);
             console.log(nameFinally18);
            //  console.log(nameBoard18);
        }
           
        function boardIt19(){
            boardIt18()
            idFetched19 = data[19].id
            nameFinally19 = data[19].name;
            // nameBoard19 = data[19].username;
         
             console.log(idFetched19);
             console.log(nameFinally19);
            //  console.log(nameBoard19);
        }
        
        function boardIt20(){
            boardIt19()
            idFetched20 = data[20].id
            nameFinally20 = data[20].name;
            // nameBoard20 = data[20].username;
         
             console.log(idFetched20);
             console.log(nameFinally20);
            //  console.log(nameBoard20);
        }
        
        function boardIt21(){
            boardIt20()
            idFetched21 = data[21].id
            nameFinally21 = data[21].name;
            // nameBoard21 = data[21].username;
         
             console.log(idFetched21);
             console.log(nameFinally21);
            //  console.log(nameBoard21);
        }
        
        function boardIt22(){
            boardIt21()
            idFetched22 = data[22].id
            nameFinally22 = data[22].name;
            // nameBoard22 = data[22].username;
         
             console.log(idFetched22);
             console.log(nameFinally22);
            //  console.log(nameBoard22);
        }
        
        function boardIt23(){
            boardIt22()
            idFetched23 = data[23].id
            nameFinally23 = data[23].name;
            // nameBoard23 = data[23].username;
         
             console.log(idFetched23);
             console.log(nameFinally23);
            //  console.log(nameBoard23);
        }
        
        function boardIt24(){
            boardIt23()
            idFetched24 = data[24].id
            nameFinally24 = data[24].name;
            // nameBoard24 = data[24].username;
         
             console.log(idFetched24);
             console.log(nameFinally24);
            //  console.log(nameBoard24);
        }
        
        function boardIt25(){
            boardIt24()
            idFetched25 = data[25].id
            nameFinally25 = data[25].name;
            // nameBoard25 = data[25].username;
         
             console.log(idFetched25);
             console.log(nameFinally25);
            //  console.log(nameBoard25);
        }
        
        function boardIt26(){
            boardIt25()
            idFetched26 = data[26].id
            nameFinally26 = data[26].name;
            // nameBoard26 = data[26].username;
         
             console.log(idFetched26);
             console.log(nameFinally26);
            //  console.log(nameBoard26);
        }
        
        function boardIt27(){
            boardIt26()
            idFetched27 = data[27].id
            nameFinally27 = data[27].name;
            // nameBoard27 = data[27].username;
         
             console.log(idFetched27);
             console.log(nameFinally27);
            //  console.log(nameBoard27);
        }
        
        function boardIt28(){
            boardIt27()
            idFetched28 = data[28].id
            nameFinally28 = data[28].name;
            // nameBoard28 = data[28].username;
         
             console.log(idFetched28);
             console.log(nameFinally28);
            //  console.log(nameBoard28);
        }
        
        function boardIt29(){
            boardIt28()
            idFetched29 = data[29].id
            nameFinally29 = data[29].name;
            // nameBoard29 = data[29].username;
         
             console.log(idFetched29);
             console.log(nameFinally29);
            //  console.log(nameBoard29);
        }
        
        function boardIt30(){
            boardIt29()
            idFetched30 = data[30].id
            nameFinally30 = data[30].name;
            // nameBoard30 = data[30].username;
         
             console.log(idFetched30);
             console.log(nameFinally30);
            //  console.log(nameBoard30);
        }
        
        function boardIt31(){
            boardIt30()
            idFetched31 = data[31].id
            nameFinally31 = data[31].name;
            // nameBoard31 = data[31].username;
         
             console.log(idFetched31);
             console.log(nameFinally31);
            //  console.log(nameBoard31);
        }
        
        function boardIt32(){
            boardIt31()
            idFetched32 = data[32].id
            nameFinally32 = data[32].name;
            // nameBoard32 = data[32].username;
         
             console.log(idFetched32);
             console.log(nameFinally32);
            //  console.log(nameBoard32);
        }
        
        function boardIt33(){
            boardIt32()
            idFetched33 = data[33].id
            nameFinally33 = data[33].name;
            // nameBoard33 = data[33].username;
         
             console.log(idFetched33);
             console.log(nameFinally33);
            //  console.log(nameBoard33);
        }
        
        function boardIt34(){
            boardIt33()
            idFetched34 = data[34].id
            nameFinally34 = data[34].name;
            // nameBoard34 = data[34].username;
         
             console.log(idFetched34);
             console.log(nameFinally34);
            //  console.log(nameBoard34);
        }
        
        function boardIt35(){
            boardIt34()
            idFetched35 = data[35].id
            nameFinally35 = data[35].name;
            // nameBoard35 = data[35].username;
         
             console.log(idFetched35);
             console.log(nameFinally35);
            //  console.log(nameBoard35);
        }
        
        function boardIt36(){
            boardIt35()
            idFetched36 = data[36].id
            nameFinally36 = data[36].name;
            // nameBoard36 = data[36].username;
         
             console.log(idFetched36);
             console.log(nameFinally36);
            //  console.log(nameBoard36);
        }
        
        function boardIt37(){
            boardIt36()
            idFetched37 = data[37].id
            nameFinally37 = data[37].name;
            // nameBoard37 = data[37].username;
         
             console.log(idFetched37);
             console.log(nameFinally37);
            //  console.log(nameBoard37);
        }
        
        function boardIt38(){
            boardIt37()
            idFetched38 = data[38].id
            nameFinally38 = data[38].name;
            // nameBoard38 = data[38].username;
         
             console.log(idFetched38);
             console.log(nameFinally38);
            //  console.log(nameBoard38);
        }
        
        function boardIt39(){
            boardIt38()
            idFetched39 = data[39].id
            nameFinally39 = data[39].name;
            // nameBoard39 = data[39].username;
         
             console.log(idFetched39);
             console.log(nameFinally39);
            //  console.log(nameBoard39);
        }
        
        function boardIt40(){
            boardIt39()
            idFetched40 = data[40].id
            nameFinally40 = data[40].name;
            // nameBoard40 = data[40].username;
         
             console.log(idFetched40);
             console.log(nameFinally40);
            //  console.log(nameBoard40);
        }
        
        function boardIt41(){
            boardIt40()
            idFetched41 = data[41].id
            nameFinally41 = data[41].name;
            // nameBoard41 = data[41].username;
         
             console.log(idFetched41);
             console.log(nameFinally41);
            //  console.log(nameBoard41);
        }
        
        function boardIt42(){
            boardIt41()
            idFetched42 = data[42].id
            nameFinally42 = data[42].name;
            // nameBoard42 = data[42].username;
         
             console.log(idFetched42);
             console.log(nameFinally42);
            //  console.log(nameBoard42);
        }
        
        function boardIt43(){
            boardIt42()
            idFetched43 = data[43].id
            nameFinally43 = data[43].name;
            // nameBoard43 = data[43].username;
         
             console.log(idFetched43);
             console.log(nameFinally43);
            //  console.log(nameBoard43);
        }
        
        function boardIt44(){
            boardIt43()
            idFetched44 = data[44].id
            nameFinally44 = data[44].name;
            // nameBoard44 = data[44].username;
         
             console.log(idFetched44);
             console.log(nameFinally44);
            //  console.log(nameBoard44);
        }
        
        function boardIt45(){
            boardIt44()
            idFetched45 = data[45].id
            nameFinally45 = data[45].name;
            // nameBoard45 = data[45].username;
         
             console.log(idFetched45);
             console.log(nameFinally45);
            //  console.log(nameBoard45);
        }
        
        function boardIt46(){
            boardIt45()
            idFetched46 = data[46].id
            nameFinally46 = data[46].name;
            // nameBoard46 = data[46].username;
         
             console.log(idFetched46);
             console.log(nameFinally46);
            //  console.log(nameBoard46);
        }
        
        function boardIt47(){
            boardIt46()
            idFetched47 = data[47].id
            nameFinally47 = data[47].name;
            // nameBoard47 = data[47].username;
         
             console.log(idFetched47);
             console.log(nameFinally47);
            //  console.log(nameBoard47);
        }
        
        function boardIt48(){
            boardIt47()
            idFetched48 = data[48].id
            nameFinally48 = data[48].name;
            // nameBoard48 = data[48].username;
         
             console.log(idFetched48);
             console.log(nameFinally48);
            //  console.log(nameBoard48);
        }
        
        function boardIt49(){
            boardIt48()
            idFetched49 = data[49].id
            nameFinally49 = data[49].name;
            // nameBoard49 = data[49].username;
         
             console.log(idFetched49);
             console.log(nameFinally49);
            //  console.log(nameBoard49);
        }
        
        function boardIt50(){
          boardIt49()
          idFetched50 = data[50].id
          nameFinally50 = data[50].name;
          // nameBoard50 = data[50].username;
       
           console.log(idFetched50);
           console.log(nameFinally50);
          //  console.log(nameBoard50);
      }
      
      function boardIt51(){
          boardIt50()
          idFetched51 = data[51].id
          nameFinally51 = data[51].name;
          // nameBoard51 = data[51].username;
       
           console.log(idFetched51);
           console.log(nameFinally51);
          //  console.log(nameBoard51);
      }
      
      function boardIt52(){
          boardIt51()
          idFetched52 = data[52].id
          nameFinally52 = data[52].name;
          // nameBoard52 = data[52].username;
       
           console.log(idFetched52);
           console.log(nameFinally52);
          //  console.log(nameBoard52);
      }
      
      function boardIt53(){
          boardIt52()
          idFetched53 = data[53].id
          nameFinally53 = data[53].name;
          // nameBoard53 = data[53].username;
       
           console.log(idFetched53);
           console.log(nameFinally53);
          //  console.log(nameBoard53);
      }
      
      function boardIt54(){
          boardIt53()
          idFetched54 = data[54].id
          nameFinally54 = data[54].name;
          // nameBoard54 = data[54].username;
       
           console.log(idFetched54);
           console.log(nameFinally54);
          //  console.log(nameBoard54);
      }
      
      function boardIt55(){
          boardIt54()
          idFetched55 = data[55].id
          nameFinally55 = data[55].name;
          // nameBoard55 = data[55].username;
       
           console.log(idFetched55);
           console.log(nameFinally55);
          //  console.log(nameBoard55);
      }
      
      function boardIt56(){
          boardIt55()
          idFetched56 = data[56].id
          nameFinally56 = data[56].name;
          // nameBoard56 = data[56].username;
       
           console.log(idFetched56);
           console.log(nameFinally56);
          //  console.log(nameBoard56);
      }
      
      function boardIt57(){
          boardIt56()
          idFetched57 = data[57].id
          nameFinally57 = data[57].name;
          // nameBoard57 = data[57].username;
       
           console.log(idFetched57);
           console.log(nameFinally57);
          //  console.log(nameBoard57);
      }
      
      function boardIt58(){
          boardIt57()
          idFetched58 = data[58].id
          nameFinally58 = data[58].name;
          // nameBoard58 = data[58].username;
       
           console.log(idFetched58);
           console.log(nameFinally58);
          //  console.log(nameBoard58);
      }
      
      function boardIt59(){
          boardIt58()
          idFetched59 = data[59].id
          nameFinally59 = data[59].name;
          // nameBoard59 = data[59].username;
       
           console.log(idFetched59);
           console.log(nameFinally59);
          //  console.log(nameBoard59);
      }


      function boardIt60(){
        boardIt59()
        idFetched60 = data[60].id
        nameFinally60 = data[60].name;
        // nameBoard60 = data[60].username;
     
         console.log(idFetched60);
         console.log(nameFinally60);
        //  console.log(nameBoard60);
    }
    
    function boardIt61(){
        boardIt60()
        idFetched61 = data[61].id
        nameFinally61 = data[61].name;
        // nameBoard61 = data[61].username;
     
         console.log(idFetched61);
         console.log(nameFinally61);
        //  console.log(nameBoard61);
    }
    
    function boardIt62(){
        boardIt61()
        idFetched62 = data[62].id
        nameFinally62 = data[62].name;
        // nameBoard62 = data[62].username;
     
         console.log(idFetched62);
         console.log(nameFinally62);
        //  console.log(nameBoard62);
    }
    
    function boardIt63(){
        boardIt62()
        idFetched63 = data[63].id
        nameFinally63 = data[63].name;
        // nameBoard63 = data[63].username;
     
         console.log(idFetched63);
         console.log(nameFinally63);
        //  console.log(nameBoard63);
    }
    
    function boardIt66(){
        boardIt63()
        idFetched66 = data[66].id
        nameFinally66 = data[66].name;
        // nameBoard66 = data[66].username;
     
         console.log(idFetched66);
         console.log(nameFinally66);
        //  console.log(nameBoard66);
    }
    
    function boardIt66(){
        boardIt66()
        idFetched66 = data[66].id
        nameFinally66 = data[66].name;
        // nameBoard66 = data[66].username;
     
         console.log(idFetched66);
         console.log(nameFinally66);
        //  console.log(nameBoard66);
    }
    
    function boardIt66(){
        boardIt66()
        idFetched66 = data[66].id
        nameFinally66 = data[66].name;
        // nameBoard66 = data[66].username;
     
         console.log(idFetched66);
         console.log(nameFinally66);
        //  console.log(nameBoard66);
    }
    
    function boardIt67(){
        boardIt66()
        idFetched67 = data[67].id
        nameFinally67 = data[67].name;
        // nameBoard67 = data[67].username;
     
         console.log(idFetched67);
         console.log(nameFinally67);
        //  console.log(nameBoard67);
    }
    
    function boardIt68(){
        boardIt67()
        idFetched68 = data[68].id
        nameFinally68 = data[68].name;
        // nameBoard68 = data[68].username;
     
         console.log(idFetched68);
         console.log(nameFinally68);
        //  console.log(nameBoard68);
    }
    
    function boardIt69(){
        boardIt68()
        idFetched69 = data[69].id
        nameFinally69 = data[69].name;
        // nameBoard69 = data[69].username;
     
         console.log(idFetched69);
         console.log(nameFinally69);
        //  console.log(nameBoard69);
    }
    
    
    function boardIt70(){
      boardIt69()
      idFetched70 = data[70].id
      nameFinally70 = data[70].name;
      // nameBoard70 = data[70].username;
   
       console.log(idFetched70);
       console.log(nameFinally70);
      //  console.log(nameBoard70);
  }
  
  function boardIt71(){
      boardIt70()
      idFetched71 = data[71].id
      nameFinally71 = data[71].name;
      // nameBoard71 = data[71].username;
   
       console.log(idFetched71);
       console.log(nameFinally71);
      //  console.log(nameBoard71);
  }
  
  function boardIt72(){
      boardIt71()
      idFetched72 = data[72].id
      nameFinally72 = data[72].name;
      // nameBoard72 = data[72].username;
   
       console.log(idFetched72);
       console.log(nameFinally72);
      //  console.log(nameBoard72);
  }
  
  function boardIt73(){
      boardIt72()
      idFetched73 = data[73].id
      nameFinally73 = data[73].name;
      // nameBoard73 = data[73].username;
   
       console.log(idFetched73);
       console.log(nameFinally73);
      //  console.log(nameBoard73);
  }
  
  function boardIt77(){
      boardIt73()
      idFetched77 = data[77].id
      nameFinally77 = data[77].name;
      // nameBoard77 = data[77].username;
   
       console.log(idFetched77);
       console.log(nameFinally77);
      //  console.log(nameBoard77);
  }
  
  function boardIt77(){
      boardIt77()
      idFetched77 = data[77].id
      nameFinally77 = data[77].name;
      // nameBoard77 = data[77].username;
   
       console.log(idFetched77);
       console.log(nameFinally77);
      //  console.log(nameBoard77);
  }
  
  function boardIt76(){
      boardIt77()
      idFetched76 = data[76].id
      nameFinally76 = data[76].name;
      // nameBoard76 = data[76].username;
   
       console.log(idFetched76);
       console.log(nameFinally76);
      //  console.log(nameBoard76);
  }
  
  function boardIt77(){
      boardIt76()
      idFetched77 = data[77].id
      nameFinally77 = data[77].name;
      // nameBoard77 = data[77].username;
   
       console.log(idFetched77);
       console.log(nameFinally77);
      //  console.log(nameBoard77);
  }
  
  function boardIt78(){
      boardIt77()
      idFetched78 = data[78].id
      nameFinally78 = data[78].name;
      // nameBoard78 = data[78].username;
   
       console.log(idFetched78);
       console.log(nameFinally78);
      //  console.log(nameBoard78);
  }
  
  function boardIt79(){
      boardIt78()
      idFetched79 = data[79].id
      nameFinally79 = data[79].name;
      // nameBoard79 = data[79].username;
   
       console.log(idFetched79);
       console.log(nameFinally79);
      //  console.log(nameBoard79);
  }
  
  
  function boardIt80(){
    boardIt79()
    idFetched80 = data[80].id
    nameFinally80 = data[80].name;
    // nameBoard80 = data[80].username;
 
     console.log(idFetched80);
     console.log(nameFinally80);
    //  console.log(nameBoard80);
}

function boardIt81(){
    boardIt80()
    idFetched81 = data[81].id
    nameFinally81 = data[81].name;
    // nameBoard81 = data[81].username;
 
     console.log(idFetched81);
     console.log(nameFinally81);
    //  console.log(nameBoard81);
}

function boardIt82(){
    boardIt81()
    idFetched82 = data[82].id
    nameFinally82 = data[82].name;
    // nameBoard82 = data[82].username;
 
     console.log(idFetched82);
     console.log(nameFinally82);
    //  console.log(nameBoard82);
}

function boardIt83(){
    boardIt82()
    idFetched83 = data[83].id
    nameFinally83 = data[83].name;
    // nameBoard83 = data[83].username;
 
     console.log(idFetched83);
     console.log(nameFinally83);
    //  console.log(nameBoard83);
}

function boardIt84(){
    boardIt83()
    idFetched84 = data[84].id
    nameFinally84 = data[84].name;
    // nameBoard8 = data[84].username;
 
     console.log(idFetched84);
     console.log(nameFinally84);
    //  console.log(nameBoard84);
}

function boardIt85(){
    boardIt84()
    idFetched85 = data[85].id
    nameFinally85 = data[85].name;
    // nameBoard8 = data[8].username;
 
     console.log(idFetched85);
     console.log(nameFinally85);
    //  console.log(nameBoard8);
}

function boardIt86(){
    boardIt85()
    idFetched86 = data[86].id
    nameFinally86 = data[86].name;
    // nameBoard86 = data[86].username;
 
     console.log(idFetched86);
     console.log(nameFinally86);
    //  console.log(nameBoard86);
}

function boardIt87(){
    boardIt86()
    idFetched87 = data[87].id
    nameFinally87 = data[87].name;
    // nameBoard87 = data[87].username;
 
     console.log(idFetched87);
     console.log(nameFinally87);
    //  console.log(nameBoard87);
}

function boardIt88(){
    boardIt87()
    idFetched88 = data[88].id
    nameFinally88 = data[88].name;
    // nameBoard88 = data[88].username;
 
     console.log(idFetched88);
     console.log(nameFinally88);
    //  console.log(nameBoard88);
}

function boardIt89(){
    boardIt88()
    idFetched89 = data[89].id
    nameFinally89 = data[89].name;
    // nameBoard89 = data[89].username;
 
     console.log(idFetched89);
     console.log(nameFinally89);
    //  console.log(nameBoard89);
}

function boardIt90(){
  boardIt89()
  idFetched90 = data[90].id
  nameFinally90 = data[90].name;
  // nameBoard90 = data[90].username;

   console.log(idFetched90);
   console.log(nameFinally90);
  //  console.log(nameBoard90);
}

function boardIt91(){
  boardIt90()
  idFetched91 = data[91].id
  nameFinally91 = data[91].name;
  // nameBoard91 = data[91].username;

   console.log(idFetched91);
   console.log(nameFinally91);
  //  console.log(nameBoard91);
}

function boardIt92(){
  boardIt91()
  idFetched92 = data[92].id
  nameFinally92 = data[92].name;
  // nameBoard92 = data[92].username;

   console.log(idFetched92);
   console.log(nameFinally92);
  //  console.log(nameBoard92);
}

function boardIt93(){
  boardIt92()
  idFetched93 = data[93].id
  nameFinally93 = data[93].name;
  // nameBoard93 = data[93].username;

   console.log(idFetched93);
   console.log(nameFinally93);
  //  console.log(nameBoard93);
}

function boardIt94(){
  boardIt93()
  idFetched94 = data[94].id
  nameFinally94 = data[94].name;
  // nameBoard94 = data[94].username;

   console.log(idFetched94);
   console.log(nameFinally94);
  //  console.log(nameBoard9);
}

function boardIt95(){
  boardIt94()
  idFetched95 = data[95].id
  nameFinally95 = data[95].name;
  // nameBoard9 = data[9].username;

   console.log(idFetched95);
   console.log(nameFinally95);
  //  console.log(nameBoard9);
}

function boardIt96(){
  boardIt9()
  idFetched96 = data[96].id
  nameFinally96 = data[96].name;
  // nameBoard96 = data[96].username;

   console.log(idFetched96);
   console.log(nameFinally96);
  //  console.log(nameBoard96);
}

function boardIt97(){
  boardIt96()
  idFetched97 = data[97].id
  nameFinally97 = data[97].name;
  // nameBoard97 = data[97].username;

   console.log(idFetched97);
   console.log(nameFinally97);
  //  console.log(nameBoard97);
}

function boardIt98(){
  boardIt97()
  idFetched98 = data[98].id
  nameFinally98 = data[98].name;
  // nameBoard98 = data[98].username;

   console.log(idFetched98);
   console.log(nameFinally98);
  //  console.log(nameBoard98);
}

function boardIt99(){
  boardIt98()
  idFetched99 = data[99].id
  nameFinally99 = data[99].name;
  // nameBoard99 = data[99].username;

   console.log(idFetched99);
   console.log(nameFinally99);
  //  console.log(nameBoard99);
}

function boardIt100(){
  boardIt99()
  idFetched100 = data[100].id
  nameFinally100 = data[100].name;
  // nameBoard100 = data[100].username;

   console.log(idFetched100);
   console.log(nameFinally100);
  //  console.log(nameBoard100);
}

function boardIt101(){
  boardIt100()
  idFetched101 = data[101].id
  nameFinally101 = data[101].name;
  // nameBoard101 = data[101].username;

   console.log(idFetched101);
   console.log(nameFinally101);
  //  console.log(nameBoard101);
}




  
      
      
       
        
        
        
        if (lenghtID==0){
            serialNo = 1;
            setTimeout(() => {
             
              boardIt0 ();
            }, serialNo*0); } 
    
        else if (lenghtID==1){
            serialNo = 2;
                
            setTimeout(() => {
             
              boardIt0 (); boardIt1 ();
            }, serialNo*0); } 
         
            else if (lenghtID==2){
               serialNo = 3;
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); 
            }, serialNo*0); } 
         
            else if (lenghtID==3){
               serialNo = 4
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 ();
            }, serialNo*0); } 
         
            else if (lenghtID==4){
               serialNo=5
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 ();
            }, serialNo*0); } 
         
            else if (lenghtID==5){
               serialNo=6
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 ()
            }, serialNo*0); } 
         
            else if (lenghtID==6){
               serialNo = 7
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            }, serialNo*0); } 
         
            else if (lenghtID==7){
               serialNo=8
             
            setTimeout(() => {
             
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 ();
            }, serialNo*0); } 
         
            else if (lenghtID==8){
               serialNo=9
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 ();
            }, serialNo*0); } 
         
            else if (lenghtID==9){
               serialNo = 10;
             
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();
            },   serialNo *0); } 
         
            else if (lenghtID==10){
               serialNo= 11;
    
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();
            },   serialNo *0); } 
         
            else if (lenghtID==11){
               serialNo =12;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 ();
            },   serialNo *0); } 
         
            else if (lenghtID==12){
               serialNo = 13
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            },   serialNo *0); } 
         
            else if (lenghtID==13){
               serialNo =14;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 ();

            },   serialNo *0); } 
         
            else if (lenghtID==14){
               serialNo =15
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 ();
            }, 13120); } 
         
            else if (lenghtID==15){
               serialNo =16;
    
            setTimeout(() => {
             
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 ();
            },   serialNo *0); } 
         
            else if (lenghtID==16){
               serialNo =17;
    
            
            setTimeout(() => {
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();
            },   serialNo *0); } 
         
            else if (lenghtID==17){
         
               serialNo =18;
            
            setTimeout(() => {
              
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            },   serialNo *0); } 
          
         
            else if (lenghtID==18){
               
               serialNo =19;
    
            setTimeout(() => {
             
           
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 ();

            },   serialNo *0); } 
         
            else if (lenghtID==19){
               serialNo =20
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 ();
            },   serialNo *0); } 
         
            else if (lenghtID==20){
               serialNo =21;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 ();
            },   serialNo *0); } 
         
         
            else if (lenghtID==21){
               serialNo =22;
    
            
            setTimeout(() => {
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 ();
            },   serialNo *0); } 
         
            else if (lenghtID==22){
               serialNo = 23;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            },   serialNo *0); } 
         
            else if (lenghtID==23){
               serialNo = 24;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 ();
            },   serialNo *0); } 
         
            else if (lenghtID==24){
               serialNo = 25;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); 
            },   serialNo *0); } 
         
            else if (lenghtID==25){
               serialNo =26;
         
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 ();
            },   serialNo *0); } 
         
            else if (lenghtID==26){
               serialNo= 27;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 ();
            },   serialNo *0); } 
         
            else if (lenghtID==27){
               serialNo =28;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            },   serialNo *0); } 
         
            else if (lenghtID==28){
               serialNo = 29;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 ();

            },   serialNo *0); } 
         
            else if (lenghtID==29){
               serialNo = 30;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 ();
            },   serialNo *0); } 
         
         
            else if (lenghtID==30){
               serialNo =31;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 ();
            },   serialNo *0); } 
         
            else if (lenghtID==31){
               serialNo = 32;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 ();
            },   serialNo *0); } 
         
            else if (lenghtID==32){
               serialNo = 33;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();

            },   serialNo *0); } 
         
            else if (lenghtID==33){
               serialNo = 34;
         
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 ();
            },   serialNo *0); } 
         
            else if (lenghtID==34){
               serialNo = 35
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); 
            },   serialNo *0); } 
         
            else if (lenghtID==35){
               serialNo = 36
    
            
            setTimeout(() => {
             
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); 
            },   serialNo *0); } 
         
            else if (lenghtID==36){
               serialNo = 37;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 ();

            },   serialNo *0); } 
         
            else if (lenghtID==37){
               serialNo = 38;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            },   serialNo *0); } 
         
            else if (lenghtID==38){
               serialNo = 39
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();

            },   serialNo *0); } 
         
            else if (lenghtID==39){
               serialNo = 40;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 ();

            },   serialNo *0); } 
         
            else if (lenghtID==40){
               serialNo =41;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 ();

            },   serialNo *0); } 
         
            else if (lenghtID==41){
               serialNo = 42;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 ();
            },   serialNo *0); } 
         
            else if (lenghtID==42){
               serialNo =43;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();

            },   serialNo *0); } 
         
            else if (lenghtID==43){
               serialNo = 44;
    
            
            setTimeout(() => {
             
            
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 ();

            },   serialNo *0); } 
         
            else if (lenghtID==44){
               serialNo = 45;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 ();
            },   serialNo *0); } 
         
            else if (lenghtID==45){
               serialNo =46;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();

            },   serialNo *0); } 
         
            else if (lenghtID==46){
               serialNo = 47;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 ();

            },   serialNo *0); } 
         
            else if (lenghtID==47){
               serialNo = 48;
    
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();

            },   serialNo *0); } 
         
            else if (lenghtID==48){
               serialNo = 49;
    
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); 
            },   serialNo *0); } 
         
            else if (lenghtID==49){
               serialNo = 50;
            
            setTimeout(() => {
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 ();
            },   serialNo *0); } 
         
         
            else if (lenghtID==50){
               serialNo = 51;    
            
            setTimeout(() => {

         
             
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 ();
       
              
            },   serialNo *0); } 

            else if (lenghtID==51){
              serialNo = 52;    
           
           setTimeout(() => {

        
            
             boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
             boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
             boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
             boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
             boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
             boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
             boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
             boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
             boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
             boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 ();
      
             
           },   serialNo *0); } 

            
           else if (lenghtID==52){
            serialNo = 53;    
         
         setTimeout(() => {

      
          
           boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
           boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
           boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
           boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
           boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
           boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
           boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
           boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
           boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
           boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();
    
           
         },   serialNo *0); } 
         
            
         else if (lenghtID==53){
          serialNo = 54;    
       
       setTimeout(() => {

    
        
         boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
         boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
         boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
         boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
         boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
         boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
         boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
         boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
         boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
         boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 ();
  
         
       },   serialNo *0); }
       
            
       else if (lenghtID==54){  
     
     setTimeout(() => {

  
      
       boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
       boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
       boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
       boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
       boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
       boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
       boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
       boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
       boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
       boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();

       
     },   serialNo *0); }

            
            
     else if (lenghtID==55){  
     
      setTimeout(() => {
 
   
       
        boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
        boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
        boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
        boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
        boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
        boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
        boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
        boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
        boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
        boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
        boardIt55 ();
 
        
      },   serialNo *0); }

                  
            
     else if (lenghtID==56){  
     
      setTimeout(() => {
 
   
       
        boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
        boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
        boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
        boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
        boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
        boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
        boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
        boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
        boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
        boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
        boardIt55 (); boardIt56 ();
 
        
      },   serialNo *0); } 
                  
            
     else if (lenghtID==57){  
     
      setTimeout(() => {
 
   
       
        boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
        boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
        boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
        boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
        boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
        boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
        boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
        boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
        boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
        boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
        boardIt55 (); boardIt56 (); boardIt57 ();
 
        
      },   serialNo *0); }


      else if (lenghtID==58){  
     
        setTimeout(() => {
   
     
         
          boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
          boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
          boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
          boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
          boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
          boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
          boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
          boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
          boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
          boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
          boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 ();
   
          
        },   serialNo *0); }

        

      else if (lenghtID==59){  
     
        setTimeout(() => {
   
     
         
          boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
          boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
          boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
          boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
          boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
          boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
          boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
          boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
          boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
          boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
          boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 ();
   
          
        },   serialNo *0); }

        else if (lenghtID==60){  
     
          setTimeout(() => {
     
       
           
            boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
            boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
            boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
            boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
            boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 ();
     
            
          },   serialNo *0); }
                 

          
        else if (lenghtID==61){  
     
          setTimeout(() => {
     
       
           
            boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
            boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
            boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
            boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
            boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
     
            
          },   serialNo *0); }

          
          
        else if (lenghtID==62){  
     
          setTimeout(() => {
     
       
           
            boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
            boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
            boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
            boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
            boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
            boardIt62 ();
            
          },   serialNo *0); }
                    
          
        else if (lenghtID==63){  
     
          setTimeout(() => {
     
            boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
            boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
            boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
            boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
            boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
            boardIt62 (); boardIt63 ();
            
          },   serialNo *0); }

                 
        else if (lenghtID==64){  
     
          setTimeout(() => {
     
            boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
            boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
            boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
            boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
            boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
            boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
            boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
            boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
            boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
            boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
            boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
            boardIt62 (); boardIt63 (); boardIt64 ();
            
          },   serialNo *0); }

          else if (lenghtID==65){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 ();
              
            },   serialNo *0); }


            
          else if (lenghtID==66){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 (); boardIt66 ();
              
            },   serialNo *0); }

            

            
          else if (lenghtID==67){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 (); boardIt66 (); boardIt67 ();
              
            },   serialNo *0); }

                        

            
          else if (lenghtID==68){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 (); boardIt66 (); boardIt67 ();
              boardIt68 ();
              
            },   serialNo *0); }

            
                        

            
          else if (lenghtID==69){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 (); boardIt66 (); boardIt67 ();
              boardIt68 (); boardIt69 ();
              
            },   serialNo *0); }
                        
                        

            
          else if (lenghtID==70){  
     
            setTimeout(() => {
       
              boardIt0 (); boardIt1 (); boardIt2 (); boardIt3 (); boardIt4 (); boardIt5 (); boardIt6 ()
              boardIt7 (); boardIt8 (); boardIt9 ();  boardIt10 ();  boardIt11 (); boardIt12 ();
              boardIt13 (); boardIt14 (); boardIt15 (); boardIt16 ();  boardIt17 ();
              boardIt18 (); boardIt19 (); boardIt20 (); boardIt21 (); boardIt22 ();
              boardIt23 (); boardIt24 (); boardIt25 (); boardIt26 (); boardIt27 ();
              boardIt28 (); boardIt29 (); boardIt30 (); boardIt31 (); boardIt32 ();
              boardIt33 (); boardIt34 (); boardIt35 (); boardIt36 (); boardIt37 ();
              boardIt38 ();  boardIt39 (); boardIt40 (); boardIt41 (); boardIt42 ();
              boardIt43 (); boardIt44 (); boardIt45 ();  boardIt46 (); boardIt47 ();
              boardIt48 (); boardIt49 (); boardIt50 (); boardIt51 (); boardIt52 ();  boardIt53 (); boardIt54 ();
              boardIt55 (); boardIt56 (); boardIt57 (); boardIt58 (); boardIt59 (); boardIt60 (); boardIt61 ();
              boardIt62 (); boardIt63 (); boardIt64 (); boardIt65 (); boardIt66 (); boardIt67 ();
              boardIt68 (); boardIt69 (); boardIt70 ();
              
            },   serialNo *0); }
                 

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
   fetchingBoardsEl.innerHTML =`Removing Member from ${realLenght} Boards... `
   emailEmptyErr.innerHTML =''
   emailEmptyErr2.innerHTML =''
   serviceErrorEl.innerHTML = ''
   serviceErrorEl2.innerHTML =''
   sendingProgressEl2.innerHTML =''
   sendingProgressEl.innerHTML =''
   addmailEl.innerHTML =''
   addmailEl2.innerHTML ='' 
   successEl.innerHTML = `` 
   HideRefreshButton ()
   HideDeleteButton();
}

function showMemeberNotFound (){
  HideRefreshButton ()
 HideDeleteButton();

displayBoardFetched ()
  setTimeout(() => {

    fetchingBoardsEl.innerHTML =`Member Not Found in Boards! `
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

let successDisplay =`Member Removal Completed `

function successMess (){
  HideRefreshButton ()
  HideRefreshButton()

  
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



let localStorageSuccesDisp= JSON.parse (localStorage.getItem("successDisplay"));

if (localStorageSuccesDisp) {
  sendingProgressEl.innerHTML = `Member Removal Completed `
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

  };
  

function gettingNecessaryboards () {


if (lenghtID==0){
    serialNo = 1
    
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard0 ()
    setTimeout(() => {
     
     RealDeal1 ()
    }, 2000); } 

    else if (lenghtID==1){
    serialNo = 2
    
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard1 ()
    setTimeout(() => {
     
     RealDeal1 ()
    }, 2000); } 
 
    else if (lenghtID==2){
       serialNo = 3
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard2 ()
    setTimeout(() => {
     
     RealDeal2 ()
    }, 2000); } 
 
    else if (lenghtID==3){
       serialNo = 4
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard3 ()
    setTimeout(() => {
     
     RealDeal3 ()
    }, 2000); } 
 
    else if (lenghtID==4){
       serialNo=5
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard4 ()
    setTimeout(() => {
     
     RealDeal4 ()
    }, 2000); } 
 
    else if (lenghtID==5){
       serialNo=6
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard5 ()
    setTimeout(() => {
     
     RealDeal5 ()
    }, 2000); } 
 
    else if (lenghtID==6){
       serialNo = 7
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard6 ()
    setTimeout(() => {
     
     RealDeal6 ()
    }, 2000); } 
 
    else if (lenghtID==7){
       serialNo=8
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard7 ()
    setTimeout(() => {
     
     RealDeal7 ()
    }, 2000); } 
 
    else if (lenghtID==8){
       serialNo=9
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard8 ()
    setTimeout(() => {
     
     RealDeal8 ()
    }, 2000); } 
 
    else if (lenghtID==9){
       serialNo = 10;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard9 ()
    setTimeout(() => {
     
     RealDeal9 ()
    },   2000); } 
 
    else if (lenghtID==10){
       serialNo= 11;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard10 ()
    setTimeout(() => {
     
     RealDeal10 ()
    },   2000); } 
 
    else if (lenghtID==11){
       serialNo =12;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard11 ()
    setTimeout(() => {
     
     RealDeal11 ()
    },   2000); } 
 
    else if (lenghtID==12){
       serialNo = 13
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard12 ()
    setTimeout(() => {
     
     RealDeal12 ()
    },   2000); } 
 
    else if (lenghtID==13){
       serialNo =14;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard13 ()
    setTimeout(() => {
     
     RealDeal13 ()
    },   2000); } 
 
    else if (lenghtID==14){
       serialNo =15
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard14 ()
    setTimeout(() => {
     
     RealDeal14 ()
    }, 13120); } 
 
    else if (lenghtID==15){
       serialNo =16;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
     getBoard15 ()
    setTimeout(() => {
     
     RealDeal15 ()
    },   2000); } 
 
    else if (lenghtID==16){
       serialNo =17;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard16 ()
    setTimeout(() => {
     RealDeal16 ()
    },   2000); } 
 
    else if (lenghtID==17){
 
       serialNo =18;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard17 ()
    setTimeout(() => {
      
     RealDeal17 ()
    },   2000); } 
  
 
    else if (lenghtID==18){
       
       serialNo =19;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard18 ()
    setTimeout(() => {
     
     RealDeal18 ()
    },   2000); } 
 
    else if (lenghtID==19){
       serialNo =20
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard19 ()
    setTimeout(() => {
     
     RealDeal19 ()
    },   2000); } 
 
    else if (lenghtID==20){
       serialNo =21;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard20 ()
    setTimeout(() => {
     
     RealDeal20 ()
    },   2000); } 
 
 
    else if (lenghtID==21){
       serialNo =22;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard21 ()
    setTimeout(() => {
     
     RealDeal21 ()
    },   2000); } 
 
    else if (lenghtID==22){
       serialNo = 23;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard22 ()
    setTimeout(() => {
     
     RealDeal22 ()
    },   2000); } 
 
    else if (lenghtID==23){
       serialNo = 24;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard23 ()
    setTimeout(() => {
     
     RealDeal23 ()
    },   2000); } 
 
    else if (lenghtID==24){
       serialNo = 25;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard24 ()
    setTimeout(() => {
     
     RealDeal24 ()
    },   2000); } 
 
    else if (lenghtID==25){
       serialNo =26;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard25 ()
    setTimeout(() => {
     
     RealDeal25 ()
    },   2000); } 
 
    else if (lenghtID==26){
       serialNo= 27;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard26 ()
    setTimeout(() => {
     
     RealDeal26 ()
    },   2000); } 
 
    else if (lenghtID==27){
       serialNo =28;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard27 ()
    setTimeout(() => {
     
     RealDeal27 ()
    },   2000); } 
 
    else if (lenghtID==28){
       serialNo = 29;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard28 ()
    setTimeout(() => {
     
     RealDeal28 ()
    },   2000); } 
 
    else if (lenghtID==29){
       serialNo = 30;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard29 ()
    setTimeout(() => {
     
     RealDeal29 ()
    },   2000); } 
 
 
    else if (lenghtID==30){
       serialNo =31;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard30 ()
    setTimeout(() => {
     
     RealDeal30 ()
    },   2000); } 
 
    else if (lenghtID==31){
       serialNo = 32;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard31 ()
    setTimeout(() => {
     
     RealDeal31 ()
    },   2000); } 
 
    else if (lenghtID==32){
       serialNo = 33;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard32 ()
    setTimeout(() => {
     
     RealDeal32 ()
    },   2000); } 
 
    else if (lenghtID==33){
       serialNo = 34;
 
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard33 ()
    setTimeout(() => {
     
     RealDeal33 ()
    },   2000); } 
 
    else if (lenghtID==34){
       serialNo = 35
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard34 ()
    setTimeout(() => {
     
     RealDeal34 ()
    },   2000); } 
 
    else if (lenghtID==35){
       serialNo = 36
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard35 ()
    setTimeout(() => {
     
     RealDeal35 ()
    },   2000); } 
 
    else if (lenghtID==36){
       serialNo = 37;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard36 ()
    setTimeout(() => {
     
     RealDeal36 ()
    },   2000); } 
 
    else if (lenghtID==37){
       serialNo = 38;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard37 ()
    setTimeout(() => {
     
     RealDeal37 ()
    },   2000); } 
 
    else if (lenghtID==38){
       serialNo = 39
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard38 ()
    setTimeout(() => {
     
     RealDeal38 ()
    },   2000); } 
 
    else if (lenghtID==39){
       serialNo = 40;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard39 ()
    setTimeout(() => {
     
     RealDeal39 ()
    },   2000); } 
 
    else if (lenghtID==40){
       serialNo =41;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard40 ()
    setTimeout(() => {
     
     RealDeal40 ()
    },   11000); } 
 
    else if (lenghtID==41){
       serialNo = 42;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard41 ()
    setTimeout(() => {
     
     RealDeal41 ()
    },   11000); } 
 
    else if (lenghtID==42){
       serialNo =43;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard42 ()
    setTimeout(() => {
     
     RealDeal42 ()
    },   11000); } 
 
    else if (lenghtID==43){
       serialNo = 44;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard43 ()
    setTimeout(() => {
     
     RealDeal43 ()
    },   11000); } 
 
    else if (lenghtID==44){
       serialNo = 45;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard44 ()
    setTimeout(() => {
     
     RealDeal44 ()
    },   11000); } 
 
    else if (lenghtID==45){
       serialNo =46;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard45 ()
    setTimeout(() => {
     
     RealDeal45 ()
    },   11000); } 
 
    else if (lenghtID==46){
       serialNo = 47;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard46 ()
    setTimeout(() => {
     
     RealDeal46 ()
    },   11000); } 
 
    else if (lenghtID==47){
       serialNo = 48;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard47 ()
    setTimeout(() => {
     
     RealDeal47 ()
    },   11000); } 
 
    else if (lenghtID==48){
       serialNo = 49;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard48 ()
    setTimeout(() => {
     
     RealDeal48 ()
    },   11000); } 
 
    else if (lenghtID==49){
       serialNo = 50;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard49 ()
    setTimeout(() => {
     
     RealDeal49 ()
    },   11000); } 
 
 
    else if (lenghtID==50){
       serialNo = 51;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard50 ()
    setTimeout(() => {
     
     RealDeal50 ()
    },   11000); } 
 
    else if (lenghtID==51){
       serialNo = 52;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard51 ()
    setTimeout(() => {
     
     RealDeal51 ()
    },   11000); } 
 
    else if (lenghtID==52){
       serialNo = 53;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard52 ()
    setTimeout(() => {
     
     RealDeal52 ()
    },   11000); } 
 
    else if (lenghtID==53){
       serialNo = 54;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard53 ()
    setTimeout(() => {
     
     RealDeal53 ()
    },   11000); } 
 
    else if (lenghtID==54){
       serialNo = 55;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard54 ()
    setTimeout(() => {
     
     RealDeal54 ()
    },   11000); } 
 
    else if (lenghtID==55){
       serialNo =56;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard55 ()
    setTimeout(() => {
     
     RealDeal55 ()
    },   11000); } 
 
    else if (lenghtID==56){
       serialNo = 57
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard56 ()
    setTimeout(() => {
     
     RealDeal56 ()
    },   11000); } 
 
    else if (lenghtID==57){
       serialNo =58
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard57 ()
    setTimeout(() => {
     
     RealDeal57 ()
    }, 11000); } 
 
    else if (lenghtID==58){
       serialNo = 59
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard58 ()
    setTimeout(() => {
     
     RealDeal58 ()
    }, 11000); } 
 
    else if (lenghtID==59){
       serialNo = 60
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard59 ()
    setTimeout(() => {
     
     RealDeal59 ()
    }, 11000); } 
 
 
    else if (lenghtID==60){
       serialNo = 61;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard60 ()
    setTimeout(() => {
     
     RealDeal60 ()
    },   11000); } 
 
    else if (lenghtID==61){
       serialNo=62;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
 
     getBoard61 ()
    setTimeout(() => {
     
     RealDeal61 ()
    }, 11000); } 
 
    else if (lenghtID==62){
       serialNo=63;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard62 ()
    setTimeout(() => {
     
     RealDeal62 ()
    }, 11000); } 
 
    else if (lenghtID==63){
       serialNo=64;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard63 ()
    setTimeout(() => {
     
     RealDeal63 ()
    }, 2000); } 
 
    else if (lenghtID==64){
       serialNo = 65;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard64 ()
    setTimeout(() => {
     
     RealDeal64 ()
    }, 2000); } 
 
    else if (lenghtID==65){
       serialNo= 66;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard65 ()
    setTimeout(() => {
     
     RealDeal65 ()
    }, 2000); } 
 
    else if (lenghtID==66){
       serialNo= 67;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard66 ()
    setTimeout(() => {
     
     RealDeal66 ()
    }, 2000); } 
 
    else if (lenghtID==67){
       serialNo= 68;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard67 ()
    setTimeout(() => {
     
     RealDeal67 ()
    }, 2000); } 
 
    else if (lenghtID==68){
       serialNo=69;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard68 ()
    setTimeout(() => {
     
     RealDeal68 ()
    }, 2000); } 
 
    else if (lenghtID==69){
       serialNo= 70;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard69 ()
    setTimeout(() => {
     
     RealDeal69 ()
    }, 2000); } 
 
    else if (lenghtID==70){
       serialNo= 71;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard70 ()
    setTimeout(() => {
     
     RealDeal70 ()
    }, 2000); } 
 
    else if (lenghtID==71){
       serialNo=72;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard71 ()
    setTimeout(() => {
     
     RealDeal71 ()
    }, 2000); } 
 
    else if (lenghtID==72){
       serialNo= 73;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard72 ()
    setTimeout(() => {
     
     RealDeal72 ()
    }, 2000); } 
 
    else if (lenghtID==73){
       serialNo= 74;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard73 ()
    setTimeout(() => {
     
     RealDeal73 ()
    }, 2000); } 
 
    else if (lenghtID==74){
       serialNo = 75;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard74 ()
    setTimeout(() => {
     
     RealDeal74 ()
    }, 2000); } 
 
    else if (lenghtID==75){
       serialNo = 76;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard75 ()
    setTimeout(() => {
     
     RealDeal75 ()
    }, 2000); } 
 
    else if (lenghtID==76){
       serialNo = 77;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard76 ()
    setTimeout(() => {
     
     RealDeal76 ()
    }, 2000); } 
 
    else if (lenghtID==77){
       serialNo = 78;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard77 ()
    setTimeout(() => {
     
     RealDeal77 ()
    }, 2000); } 
 
    else if (lenghtID==78){
       serialNo = 79;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard78 ()
    setTimeout(() => {
     
     RealDeal78 ()
    }, 2000); } 
 
    else if (lenghtID==79){
       serialNo = 80;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard79 ()
    setTimeout(() => {
     
     RealDeal79 ()
    }, 2000); } 
 
    else if (lenghtID==80){
       serialNo = 81;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard80 ()
    setTimeout(() => {
     
     RealDeal80 ()
    }, 2000); } 
 
    else if (lenghtID==81){
       serialNo = 82
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard81 ()
    setTimeout(() => {
     
     RealDeal81 ()
    }, 2000); } 
 
    else if (lenghtID==82){
       serialNo = 83;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard82 ()
    setTimeout(() => {
     
     RealDeal82 ()
    }, 2000); } 
 
    else if (lenghtID==83){
       serialNo = 84;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard83 ()
    setTimeout(() => {
     
     RealDeal83 ()
    }, 2000); } 
 
    else if (lenghtID==84){
       serialNo = 85;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard84 ()
    setTimeout(() => {
     
     RealDeal84 ()
    }, 2000); } 
 
    else if (lenghtID==85){
       serialNo = 86;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard85 ()
    setTimeout(() => {
     
     RealDeal85 ()
    }, 2000); } 
 
    else if (lenghtID==86){
       serialNo = 87;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard86 ()
    setTimeout(() => {
     
     RealDeal86 ()
    }, 2000); } 
 
    else if (lenghtID==87){
       serialNo = 88;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard87 ()
    setTimeout(() => {
     
     RealDeal87 ()
    }, 2000); } 
 
    else if (lenghtID==88){
       serialNo = 89;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard88 ()
    setTimeout(() => {
     
     RealDeal88 ()
    }, 2000); } 
 
    else if (lenghtID==89){
       serialNo = 90;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard89 ()
    setTimeout(() => {
     
     RealDeal89 ()
    }, 2000); } 
 
    else if (lenghtID==90){
       serialNo = 91;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard90 ()
    setTimeout(() => {
     
     RealDeal90 ()
    }, 2000); } 
 
    else if (lenghtID==91){
       serialNo = 92;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard91 ()
    setTimeout(() => {
     
     RealDeal91 ()
    }, 2000); } 
 
    else if (lenghtID==92){
       serialNo = 93;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard92 ()
    setTimeout(() => {
     
     RealDeal92 ()
    }, 2000); } 
 
    else if (lenghtID==93){
       serialNo = 94;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard93 ()
    setTimeout(() => {
     
     RealDeal93 ()
    }, 2000); } 
 
    else if (lenghtID==94){
       serialNo = 95;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard94 ()
    setTimeout(() => {
     
     RealDeal94 ()
    }, 2000); } 
 
    else if (lenghtID==95){
       serialNo = 96;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard95 ()
    setTimeout(() => {
     
     RealDeal95 ()
    }, 2000); } 
 
    else if (lenghtID==96){
       serialNo = 97;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard96 ()
    setTimeout(() => {
     
     RealDeal96 ()
    },2000); } 
 
    else if (lenghtID==97){
       serialNo = 98;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard97 ()
    setTimeout(() => {
     
     RealDeal97 ()
    }, 86160); } 
 
    else if (lenghtID==98){
       serialNo = 99;
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard98 ()
    setTimeout(() => {
     
     RealDeal98 ()
    }, 80040); } 
 
    else if (lenghtID==99){
       serialNo = 100
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard99 ()
    setTimeout(() => {
     
     RealDeal99 ()
    }, 2000); } 
 
    else if (lenghtID==100){
       serialNo = 101
       
       displayBoardFetched ()
       hideProgressBar()
     move()
    
     getBoard100 ()
    setTimeout(() => {
     
     RealDeal100 ()
    }, 2000); } 
    

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
