
//selecting member entered to be deleted and its id//
function memberSelect0 () {

  async function memberSelectWorkspace0(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg0}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data0 = await response.json()
    console.log(data0)

 const  datacheck0 = data0.find( ({ fullName }) => fullName === emailValue );


  if (datacheck0) {

    membId0 = datacheck0.id
    console.log(membId0)

    return membId0 
  };
   
  }
      memberSelectWorkspace0().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect1 () {

  async function memberSelectWorkspace1(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg1}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data1 = await response.json()

 const  datacheck1 = data1.find( ({ fullName }) => fullName === emailValue );


  if (datacheck1) {

    membId1 = datacheck1.id
    console.log(membId1)

    return membId1 
  };
   
  }
  
      memberSelectWorkspace1().catch(error=>{
          console.log("error")
          console.log(error)
        })}


  
function memberSelect2 () {

  async function memberSelectWorkspace2(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg2}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data2 = await response.json()

 const  datacheck2 = data2.find( ({ fullName }) => fullName === emailValue );


  if (datacheck2) {

    membId2 = datacheck2.id
    console.log(membId2)

    return membId2 
  };
   
  }
  
      memberSelectWorkspace2().catch(error=>{
          console.log("error")
          console.log(error)
        })}


  
function memberSelect3 () {

  async function memberSelectWorkspace3(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg3}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data3 = await response.json()

 const  datacheck3 = data3.find( ({ fullName }) => fullName === emailValue );


  if (datacheck3) {

    membId3 = datacheck3.id
    console.log(membId3)

    return membId3 
  };
   
  }
  
      memberSelectWorkspace3().catch(error=>{
          console.log("error")
          console.log(error)
        })}

      
        

function memberSelect4 () {

  async function memberSelectWorkspace4(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg4}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data4 = await response.json()

 const  datacheck4 = data4.find( ({ fullName }) => fullName === emailValue );


  if (datacheck4) {

    membId4 = datacheck4.id
    console.log(membId4)

    return membId4 
  };
   
  }
  
      memberSelectWorkspace4().catch(error=>{
          console.log("error")
          console.log(error)
        })}




function memberSelect5 () {

  async function memberSelectWorkspace5(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg5}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data5 = await response.json()

 const  datacheck5 = data5.find( ({ fullName }) => fullName === emailValue );


  if (datacheck5) {

    membId5 = datacheck5.id
    console.log(membId5)

    return membId5 
  };
   
  }
  
      memberSelectWorkspace5().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect6 () {

  async function memberSelectWorkspace6(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg6}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data6 = await response.json()

 const  datacheck6 = data6.find( ({ fullName }) => fullName === emailValue );


  if (datacheck6) {

    membId6 = datacheck6.id
    console.log(membId6)

    return membId6 
  };
   
  }
  
      memberSelectWorkspace6().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect7 () {

  async function memberSelectWorkspace7(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg7}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data7 = await response.json()

 const  datacheck7 = data7.find( ({ fullName }) => fullName === emailValue );


  if (datacheck7) {

    membId7 = datacheck7.id
    console.log(membId7)

    return membId7 
  };
   
  }
  
      memberSelectWorkspace7().catch(error=>{
          console.log("error")
          console.log(error)
        })}

     
  
function memberSelect8 () {

  async function memberSelectWorkspace8(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg8}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data8 = await response.json()

 const  datacheck8 = data8.find( ({ fullName }) => fullName === emailValue );


  if (datacheck8) {

    membId8 = datacheck8.id
    console.log(membId8)

    return membId8 
  };
   
  }
  
      memberSelectWorkspace8().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect9 () {

  async function memberSelectWorkspace9(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg9}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data9 = await response.json()
    console.log(data9)

 const  datacheck9 = data9.find( ({ fullName }) => fullName === emailValue );


  if (datacheck9) {

    membId9 = datacheck9.id
    console.log(membId9)

    return membId9 
  };
   
  }
  
      memberSelectWorkspace9().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect10 () {

  async function memberSelectWorkspace10(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg10}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data10 = await response.json()

 const  datacheck10 = data10.find( ({ fullName }) => fullName === emailValue );


  if (datacheck10) {

    membId10 = datacheck10.id
    console.log(membId10)

    return membId10 
  };
   
  }
  
      memberSelectWorkspace10().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect11 () {

  async function memberSelectWorkspace11(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg11}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data11 = await response.json()

 const  datacheck11 = data11.find( ({ fullName }) => fullName === emailValue );


  if (datacheck11) {

    membId11 = datacheck11.id
    console.log(membId11)

    return membId11 
  };
   
  }
  
      memberSelectWorkspace11().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect12 () {

  async function memberSelectWorkspace12(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg12}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data12 = await response.json()

 const  datacheck12 = data12.find( ({ fullName }) => fullName === emailValue );


  if (datacheck12) {

    membId12 = datacheck12.id
    console.log(membId12)

    return membId12 
  };
   
  }
  
      memberSelectWorkspace12().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect13 () {

  async function memberSelectWorkspace13(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg13}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data13 = await response.json()

 const  datacheck13 = data13.find( ({ fullName }) => fullName === emailValue );


  if (datacheck13) {

    membId13 = datacheck13.id
    console.log(membId13)

    return membId13 
  };
   
  }
  
      memberSelectWorkspace13().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect14 () {

  async function memberSelectWorkspace14(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg14}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data14 = await response.json()

 const  datacheck14 = data14.find( ({ fullName }) => fullName === emailValue );


  if (datacheck14) {

    membId14 = datacheck14.id
    console.log(membId14)

    return membId14 
  };
   
  }
  
      memberSelectWorkspace14().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect15 () {

  async function memberSelectWorkspace15(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg15}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data15 = await response.json()

 const  datacheck15 = data15.find( ({ fullName }) => fullName === emailValue );


  if (datacheck15) {

    membId15 = datacheck15.id
    console.log(membId15)

    return membId15 
  };
   
  }
  
      memberSelectWorkspace15().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect16 () {

  async function memberSelectWorkspace16(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg16}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data16 = await response.json()

 const  datacheck16 = data16.find( ({ fullName }) => fullName === emailValue );


  if (datacheck16) {

    membId16 = datacheck16.id
    console.log(membId16)

    return membId16 
  };
   
  }
  
      memberSelectWorkspace16().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect17 () {

  async function memberSelectWorkspace17(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg17}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data17 = await response.json()

 const  datacheck17 = data17.find( ({ fullName }) => fullName === emailValue );


  if (datacheck17) {

    membId17 = datacheck17.id
    console.log(membId17)

    return membId17 
  };
   
  }
  
      memberSelectWorkspace17().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect18 () {

  async function memberSelectWorkspace18(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg18}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data18 = await response.json()

 const  datacheck18 = data18.find( ({ fullName }) => fullName === emailValue );


  if (datacheck18) {

    membId18 = datacheck18.id
    console.log(membId18)

    return membId18 
  };
   
  }
  
      memberSelectWorkspace18().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect19 () {

  async function memberSelectWorkspace19(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg19}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data19 = await response.json()

 const  datacheck19 = data19.find( ({ fullName }) => fullName === emailValue );


  if (datacheck19) {

    membId19 = datacheck19.id
    console.log(membId19)

    return membId19 
  };
   
  }
  
      memberSelectWorkspace19().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect20 () {

  async function memberSelectWorkspace20(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg20}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data20 = await response.json()

 const  datacheck20 = data20.find( ({ fullName }) => fullName === emailValue );


  if (datacheck20) {

    membId20 = datacheck20.id
    console.log(membId20)

    return membId20 
  };
   
  }
  
      memberSelectWorkspace20().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect21 () {

  async function memberSelectWorkspace21(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg21}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data21 = await response.json()

 const  datacheck21 = data21.find( ({ fullName }) => fullName === emailValue );


  if (datacheck21) {

    membId21 = datacheck21.id
    console.log(membId21)

    return membId21 
  };
   
  }
  
      memberSelectWorkspace21().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect22 () {

  async function memberSelectWorkspace22(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg22}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data22 = await response.json()

 const  datacheck22 = data22.find( ({ fullName }) => fullName === emailValue );


  if (datacheck22) {

    membId22 = datacheck22.id
    console.log(membId22)

    return membId22 
  };
   
  }
  
      memberSelectWorkspace22().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect23 () {

  async function memberSelectWorkspace23(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg23}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data23 = await response.json()

 const  datacheck23 = data23.find( ({ fullName }) => fullName === emailValue );


  if (datacheck23) {

    membId23 = datacheck23.id
    console.log(membId23)

    return membId23 
  };
   
  }
  
      memberSelectWorkspace23().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect24 () {

  async function memberSelectWorkspace24(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg24}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data24 = await response.json()

 const  datacheck24 = data24.find( ({ fullName }) => fullName === emailValue );


  if (datacheck24) {

    membId24 = datacheck24.id
    console.log(membId24)

    return membId24 
  };
   
  }
  
      memberSelectWorkspace24().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect25 () {

  async function memberSelectWorkspace25(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg25}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data25 = await response.json()

 const  datacheck25 = data25.find( ({ fullName }) => fullName === emailValue );


  if (datacheck25) {

    membId25 = datacheck25.id
    console.log(membId25)

    return membId25 
  };
   
  }
  
      memberSelectWorkspace25().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect26 () {

  async function memberSelectWorkspace26(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg26}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data26 = await response.json()

 const  datacheck26 = data26.find( ({ fullName }) => fullName === emailValue );


  if (datacheck26) {

    membId26 = datacheck26.id
    console.log(membId26)

    return membId26 
  };
   
  }
  
      memberSelectWorkspace26().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect27 () {

  async function memberSelectWorkspace27(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg27}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data27 = await response.json()

 const  datacheck27 = data27.find( ({ fullName }) => fullName === emailValue );


  if (datacheck27) {

    membId27 = datacheck27.id
    console.log(membId27)

    return membId27 
  };
   
  }
  
      memberSelectWorkspace27().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect28 () {

  async function memberSelectWorkspace28(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg28}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data28 = await response.json()

 const  datacheck28 = data28.find( ({ fullName }) => fullName === emailValue );


  if (datacheck28) {

    membId28 = datacheck28.id
    console.log(membId28)

    return membId28 
  };
   
  }
  
      memberSelectWorkspace28().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect29 () {

  async function memberSelectWorkspace29(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg29}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data29 = await response.json()

 const  datacheck29 = data29.find( ({ fullName }) => fullName === emailValue );


  if (datacheck29) {

    membId29 = datacheck29.id
    console.log(membId29)

    return membId29 
  };
   
  }
  
      memberSelectWorkspace29().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        

        
function memberSelect30 () {

  async function memberSelectWorkspace30(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg30}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data30 = await response.json()

 const  datacheck30 = data30.find( ({ fullName }) => fullName === emailValue );


  if (datacheck30) {

    membId30 = datacheck30.id
    console.log(membId30)

    return membId30 
  };
   
  }
  
      memberSelectWorkspace30().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect31 () {

  async function memberSelectWorkspace31(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg31}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data31 = await response.json()

 const  datacheck31 = data31.find( ({ fullName }) => fullName === emailValue );


  if (datacheck31) {

    membId31 = datacheck31.id
    console.log(membId31)

    return membId31 
  };
   
  }
  
      memberSelectWorkspace31().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect32 () {

  async function memberSelectWorkspace32(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg32}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data32 = await response.json()

 const  datacheck32 = data32.find( ({ fullName }) => fullName === emailValue );


  if (datacheck32) {

    membId32 = datacheck32.id
    console.log(membId32)

    return membId32 
  };
   
  }
  
      memberSelectWorkspace32().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect33 () {

  async function memberSelectWorkspace33(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg33}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data33 = await response.json()

 const  datacheck33 = data33.find( ({ fullName }) => fullName === emailValue );


  if (datacheck33) {

    membId33 = datacheck33.id
    console.log(membId33)

    return membId33 
  };
   
  }
  
      memberSelectWorkspace33().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect34 () {

  async function memberSelectWorkspace34(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg34}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data34 = await response.json()

 const  datacheck34 = data34.find( ({ fullName }) => fullName === emailValue );


  if (datacheck34) {

    membId34 = datacheck34.id
    console.log(membId34)

    return membId34 
  };
   
  }
  
      memberSelectWorkspace34().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect35 () {

  async function memberSelectWorkspace35(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg35}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data35 = await response.json()

 const  datacheck35 = data35.find( ({ fullName }) => fullName === emailValue );


  if (datacheck35) {

    membId35 = datacheck35.id
    console.log(membId35)

    return membId35 
  };
   
  }
  
      memberSelectWorkspace35().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect36 () {

  async function memberSelectWorkspace36(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg36}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data36 = await response.json()

 const  datacheck36 = data36.find( ({ fullName }) => fullName === emailValue );


  if (datacheck36) {

    membId36 = datacheck36.id
    console.log(membId36)

    return membId36 
  };
   
  }
  
      memberSelectWorkspace36().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect37 () {

  async function memberSelectWorkspace37(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg37}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data37 = await response.json()

 const  datacheck37 = data37.find( ({ fullName }) => fullName === emailValue );


  if (datacheck37) {

    membId37 = datacheck37.id
    console.log(membId37)

    return membId37 
  };
   
  }
  
      memberSelectWorkspace37().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect38 () {

  async function memberSelectWorkspace38(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg38}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data38 = await response.json()

 const  datacheck38 = data38.find( ({ fullName }) => fullName === emailValue );


  if (datacheck38) {

    membId38 = datacheck38.id
    console.log(membId38)

    return membId38 
  };
   
  }
  
      memberSelectWorkspace38().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect39 () {

  async function memberSelectWorkspace39(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg39}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data39 = await response.json()

 const  datacheck39 = data39.find( ({ fullName }) => fullName === emailValue );


  if (datacheck39) {

    membId39 = datacheck39.id
    console.log(membId39)

    return membId39 
  };
   
  }
  
      memberSelectWorkspace39().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect40 () {

  async function memberSelectWorkspace40(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg40}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data40 = await response.json()

 const  datacheck40 = data40.find( ({ fullName }) => fullName === emailValue );


  if (datacheck40) {

    membId40 = datacheck40.id
    console.log(membId40)

    return membId40 
  };
   
  }
  
      memberSelectWorkspace40().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect41 () {

  async function memberSelectWorkspace41(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg41}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data41 = await response.json()

 const  datacheck41 = data41.find( ({ fullName }) => fullName === emailValue );


  if (datacheck41) {

    membId41 = datacheck41.id
    console.log(membId41)

    return membId41 
  };
   
  }
  
      memberSelectWorkspace41().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect42 () {

  async function memberSelectWorkspace42(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg42}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data42 = await response.json()

 const  datacheck42 = data42.find( ({ fullName }) => fullName === emailValue );


  if (datacheck42) {

    membId42 = datacheck42.id
    console.log(membId42)

    return membId42 
  };
   
  }
  
      memberSelectWorkspace42().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect43 () {

  async function memberSelectWorkspace43(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg43}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data43 = await response.json()

 const  datacheck43 = data43.find( ({ fullName }) => fullName === emailValue );


  if (datacheck43) {

    membId43 = datacheck43.id
    console.log(membId43)

    return membId43 
  };
   
  }
  
      memberSelectWorkspace43().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect44 () {

  async function memberSelectWorkspace44(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg44}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data44 = await response.json()

 const  datacheck44 = data44.find( ({ fullName }) => fullName === emailValue );


  if (datacheck44) {

    membId44 = datacheck44.id
    console.log(membId44)

    return membId44 
  };
   
  }
  
      memberSelectWorkspace44().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect45 () {

  async function memberSelectWorkspace45(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg45}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data45 = await response.json()

 const  datacheck45 = data45.find( ({ fullName }) => fullName === emailValue );


  if (datacheck45) {

    membId45 = datacheck45.id
    console.log(membId45)

    return membId45 
  };
   
  }
  
      memberSelectWorkspace45().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect46 () {

  async function memberSelectWorkspace46(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg46}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data46 = await response.json()

 const  datacheck46 = data46.find( ({ fullName }) => fullName === emailValue );


  if (datacheck46) {

    membId46 = datacheck46.id
    console.log(membId46)

    return membId46 
  };
   
  }
  
      memberSelectWorkspace46().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect47 () {

  async function memberSelectWorkspace47(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg47}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data47 = await response.json()

 const  datacheck47 = data47.find( ({ fullName }) => fullName === emailValue );


  if (datacheck47) {

    membId47 = datacheck47.id
    console.log(membId47)

    return membId47 
  };
   
  }
  
      memberSelectWorkspace47().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect48 () {

  async function memberSelectWorkspace48(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg48}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data48 = await response.json()

 const  datacheck48 = data48.find( ({ fullName }) => fullName === emailValue );


  if (datacheck48) {

    membId48 = datacheck48.id
    console.log(membId48)

    return membId48 
  };
   
  }
  
      memberSelectWorkspace48().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect49 () {

  async function memberSelectWorkspace49(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg49}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data49 = await response.json()

 const  datacheck49 = data49.find( ({ fullName }) => fullName === emailValue );


  if (datacheck49) {

    membId49 = datacheck49.id
    console.log(membId49)

    return membId49 
  };
 
   
  }
  
      memberSelectWorkspace49().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
        function memberSelect50 () {

          async function memberSelectWorkspace50(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg50}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data50 = await response.json()
        
         const  datacheck50 = data50.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck50) {
        
            membId50 = datacheck50.id
            console.log(membId50)
        
            return membId50 
          };
           
          }
          
              memberSelectWorkspace50().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect51 () {
        
          async function memberSelectWorkspace51(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg51}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data51 = await response.json()
        
         const  datacheck51 = data51.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck51) {
        
            membId51 = datacheck51.id
            console.log(membId51)
        
            return membId51 
          };
           
          }
          
              memberSelectWorkspace51().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
                
        function memberSelect52 () {
        
          async function memberSelectWorkspace52(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg52}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data52 = await response.json()
        
         const  datacheck52 = data52.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck52) {
        
            membId52 = datacheck52.id
            console.log(membId52)
        
            return membId52 
          };
           
          }
          
              memberSelectWorkspace52().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect53 () {
        
          async function memberSelectWorkspace53(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg53}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data53 = await response.json()
        
         const  datacheck53 = data53.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck53) {
        
            membId53 = datacheck53.id
            console.log(membId53)
        
            return membId53 
          };
           
          }
          
              memberSelectWorkspace53().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
           
 function memberSelect54 () {
        
          async function memberSelectWorkspace54(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg54}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data54 = await response.json()
        
         const  datacheck54 = data54.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck54) {
        
            membId54 = datacheck54.id
            console.log(membId54)
        
            return membId54 
          };
           
          }
          
              memberSelectWorkspace54().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect55 () {
        
          async function memberSelectWorkspace55(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg55}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data55 = await response.json()
        
         const  datacheck55 = data55.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck55) {
        
            membId55 = datacheck55.id
            console.log(membId55)
        
            return membId55 
          };
           
          }
          
              memberSelectWorkspace55().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect56 () {
        
          async function memberSelectWorkspace56(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg56}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data56 = await response.json()
        
         const  datacheck56 = data56.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck56) {
        
            membId56 = datacheck56.id
            console.log(membId56)
        
            return membId56 
          };
           
          }
          
              memberSelectWorkspace56().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect57 () {
        
          async function memberSelectWorkspace57(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg57}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data57 = await response.json()
        
         const  datacheck57 = data57.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck57) {
        
            membId57 = datacheck57.id
            console.log(membId57)
        
            return membId57 
          };
           
          }
          
              memberSelectWorkspace57().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
        
                
        function memberSelect58 () {
        
          async function memberSelectWorkspace58(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg58}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data58 = await response.json()
        
         const  datacheck58 = data58.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck58) {
        
            membId58 = datacheck58.id
            console.log(membId58)
        
            return membId58 
          };
           
          }
          
              memberSelectWorkspace58().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        
                
        function memberSelect59 () {
        
          async function memberSelectWorkspace59(){
        
            const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg59}/members?&key=${apiKey}&token=${apiToken}`,
             {
              method: 'GET'
             
             }
            )
               
            const data59 = await response.json()
        
         const  datacheck59 = data59.find( ({ fullName }) => fullName === emailValue );
        
        
          if (datacheck59) {
        
            membId59 = datacheck59.id
            console.log(membId59)
        
            return membId59 
          };
           
          }
          
              memberSelectWorkspace59().catch(error=>{
                  console.log("error")
                  console.log(error)
                })}
        

                
        
function memberSelect60 () {

  async function memberSelectWorkspace60(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg60}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data60 = await response.json()

 const  datacheck60 = data60.find( ({ fullName }) => fullName === emailValue );


  if (datacheck60) {

    membId60 = datacheck60.id
    console.log(membId60)

    return membId60 
  };
   
  }
  
      memberSelectWorkspace60().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect61 () {

  async function memberSelectWorkspace61(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg61}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data61 = await response.json()

 const  datacheck61 = data61.find( ({ fullName }) => fullName === emailValue );


  if (datacheck61) {

    membId61 = datacheck61.id
    console.log(membId61)

    return membId61 
  };
   
  }
  
      memberSelectWorkspace61().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect62 () {

  async function memberSelectWorkspace62(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg62}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data62 = await response.json()

 const  datacheck62 = data62.find( ({ fullName }) => fullName === emailValue );


  if (datacheck62) {

    membId62 = datacheck62.id
    console.log(membId62)

    return membId62 
  };
   
  }
  
      memberSelectWorkspace62().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect63 () {

  async function memberSelectWorkspace63(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg63}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data63 = await response.json()

 const  datacheck63 = data63.find( ({ fullName }) => fullName === emailValue );


  if (datacheck63) {

    membId63 = datacheck63.id
    console.log(membId63)

    return membId63 
  };
   
  }
  
      memberSelectWorkspace63().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect64 () {

  async function memberSelectWorkspace64(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg64}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data64 = await response.json()

 const  datacheck64 = data64.find( ({ fullName }) => fullName === emailValue );


  if (datacheck64) {

    membId64 = datacheck64.id
    console.log(membId64)

    return membId64 
  };
   
  }
  
      memberSelectWorkspace64().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect65 () {

  async function memberSelectWorkspace65(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg65}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data65 = await response.json()

 const  datacheck65 = data65.find( ({ fullName }) => fullName === emailValue );


  if (datacheck65) {

    membId65 = datacheck65.id
    console.log(membId65)

    return membId65 
  };
   
  }
  
      memberSelectWorkspace65().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect66 () {

  async function memberSelectWorkspace66(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg66}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data66 = await response.json()

 const  datacheck66 = data66.find( ({ fullName }) => fullName === emailValue );


  if (datacheck66) {

    membId66 = datacheck66.id
    console.log(membId66)

    return membId66 
  };
   
  }
  
      memberSelectWorkspace66().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect67 () {

  async function memberSelectWorkspace67(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg67}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data67 = await response.json()

 const  datacheck67 = data67.find( ({ fullName }) => fullName === emailValue );


  if (datacheck67) {

    membId67 = datacheck67.id
    console.log(membId67)

    return membId67 
  };
   
  }
  
      memberSelectWorkspace67().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect68 () {

  async function memberSelectWorkspace68(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg68}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data68 = await response.json()

 const  datacheck68 = data68.find( ({ fullName }) => fullName === emailValue );


  if (datacheck68) {

    membId68 = datacheck68.id
    console.log(membId68)

    return membId68 
  };
   
  }
  
      memberSelectWorkspace68().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect69 () {

  async function memberSelectWorkspace69(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg69}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data69 = await response.json()

 const  datacheck69 = data69.find( ({ fullName }) => fullName === emailValue );


  if (datacheck69) {

    membId69 = datacheck69.id
    console.log(membId69)

    return membId69 
  };
   
  }
  
      memberSelectWorkspace69().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect70 () {

  async function memberSelectWorkspace70(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg70}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data70 = await response.json()

 const  datacheck70 = data70.find( ({ fullName }) => fullName === emailValue );


  if (datacheck70) {

    membId70 = datacheck70.id
    console.log(membId70)

    return membId70 
  };
   
  }
  
      memberSelectWorkspace70().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect71 () {

  async function memberSelectWorkspace71(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg71}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data71 = await response.json()

 const  datacheck71 = data71.find( ({ fullName }) => fullName === emailValue );


  if (datacheck71) {

    membId71 = datacheck71.id
    console.log(membId71)

    return membId71 
  };
   
  }
  
      memberSelectWorkspace71().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect72 () {

  async function memberSelectWorkspace72(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg72}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data72 = await response.json()

 const  datacheck72 = data72.find( ({ fullName }) => fullName === emailValue );


  if (datacheck72) {

    membId72 = datacheck72.id
    console.log(membId72)

    return membId72 
  };
   
  }
  
      memberSelectWorkspace72().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect73 () {

  async function memberSelectWorkspace73(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg73}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data73 = await response.json()

 const  datacheck73 = data73.find( ({ fullName }) => fullName === emailValue );


  if (datacheck73) {

    membId73 = datacheck73.id
    console.log(membId73)

    return membId73 
  };
   
  }
  
      memberSelectWorkspace73().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect74 () {

  async function memberSelectWorkspace74(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg74}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data74 = await response.json()

 const  datacheck74 = data74.find( ({ fullName }) => fullName === emailValue );


  if (datacheck74) {

    membId74 = datacheck74.id
    console.log(membId74)

    return membId74 
  };
   
  }
  
      memberSelectWorkspace74().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect75 () {

  async function memberSelectWorkspace75(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg75}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data75 = await response.json()

 const  datacheck75 = data75.find( ({ fullName }) => fullName === emailValue );


  if (datacheck75) {

    membId75 = datacheck75.id
    console.log(membId75)

    return membId75 
  };
   
  }
  
      memberSelectWorkspace75().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect76 () {

  async function memberSelectWorkspace76(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg76}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data76 = await response.json()

 const  datacheck76 = data76.find( ({ fullName }) => fullName === emailValue );


  if (datacheck76) {

    membId76 = datacheck76.id
    console.log(membId76)

    return membId76 
  };
   
  }
  
      memberSelectWorkspace76().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect77 () {

  async function memberSelectWorkspace77(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg77}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data77 = await response.json()

 const  datacheck77 = data77.find( ({ fullName }) => fullName === emailValue );


  if (datacheck77) {

    membId77 = datacheck77.id
    console.log(membId77)

    return membId77 
  };
   
  }
  
      memberSelectWorkspace77().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect78 () {

  async function memberSelectWorkspace78(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg78}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data78 = await response.json()

 const  datacheck78 = data78.find( ({ fullName }) => fullName === emailValue );


  if (datacheck78) {

    membId78 = datacheck78.id
    console.log(membId78)

    return membId78 
  };
   
  }
  
      memberSelectWorkspace78().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect79 () {

  async function memberSelectWorkspace79(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg79}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data79 = await response.json()

 const  datacheck79 = data79.find( ({ fullName }) => fullName === emailValue );


  if (datacheck79) {

    membId79 = datacheck79.id
    console.log(membId79)

    return membId79 
  };
   
  }
  
      memberSelectWorkspace79().catch(error=>{
          console.log("error")
          console.log(error)
        })}



        
function memberSelect80 () {

  async function memberSelectWorkspace80(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg80}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data80 = await response.json()

 const  datacheck80 = data80.find( ({ fullName }) => fullName === emailValue );


  if (datacheck80) {

    membId80 = datacheck80.id
    console.log(membId80)

    return membId80 
  };
   
  }
  
      memberSelectWorkspace80().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect81 () {

  async function memberSelectWorkspace81(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg81}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data81 = await response.json()

 const  datacheck81 = data81.find( ({ fullName }) => fullName === emailValue );


  if (datacheck81) {

    membId81 = datacheck81.id
    console.log(membId81)

    return membId81 
  };
   
  }
  
      memberSelectWorkspace81().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect82 () {

  async function memberSelectWorkspace82(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg82}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data82 = await response.json()

 const  datacheck82 = data82.find( ({ fullName }) => fullName === emailValue );


  if (datacheck82) {

    membId82 = datacheck82.id
    console.log(membId82)

    return membId82 
  };
   
  }
  
      memberSelectWorkspace82().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect83 () {

  async function memberSelectWorkspace83(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg83}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data83 = await response.json()

 const  datacheck83 = data83.find( ({ fullName }) => fullName === emailValue );


  if (datacheck83) {

    membId83 = datacheck83.id
    console.log(membId83)

    return membId83 
  };
   
  }
  
      memberSelectWorkspace83().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect84 () {

  async function memberSelectWorkspace84(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg84}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data84 = await response.json()

 const  datacheck84 = data84.find( ({ fullName }) => fullName === emailValue );


  if (datacheck84) {

    membId84 = datacheck84.id
    console.log(membId84)

    return membId84 
  };
   
  }
  
      memberSelectWorkspace84().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect85 () {

  async function memberSelectWorkspace85(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg85}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data85 = await response.json()

 const  datacheck85 = data85.find( ({ fullName }) => fullName === emailValue );


  if (datacheck85) {

    membId85 = datacheck85.id
    console.log(membId85)

    return membId85 
  };
   
  }
  
      memberSelectWorkspace85().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect86 () {

  async function memberSelectWorkspace86(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg86}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data86 = await response.json()

 const  datacheck86 = data86.find( ({ fullName }) => fullName === emailValue );


  if (datacheck86) {

    membId86 = datacheck86.id
    console.log(membId86)

    return membId86 
  };
   
  }
  
      memberSelectWorkspace86().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect87 () {

  async function memberSelectWorkspace87(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg87}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data87 = await response.json()

 const  datacheck87 = data87.find( ({ fullName }) => fullName === emailValue );


  if (datacheck87) {

    membId87 = datacheck87.id
    console.log(membId87)

    return membId87 
  };
   
  }
  
      memberSelectWorkspace87().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect88 () {

  async function memberSelectWorkspace88(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg88}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data88 = await response.json()

 const  datacheck88 = data88.find( ({ fullName }) => fullName === emailValue );


  if (datacheck88) {

    membId88 = datacheck88.id
    console.log(membId88)

    return membId88 
  };
   
  }
  
      memberSelectWorkspace88().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect89 () {

  async function memberSelectWorkspace89(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg89}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data89 = await response.json()

 const  datacheck89 = data89.find( ({ fullName }) => fullName === emailValue );


  if (datacheck89) {

    membId89 = datacheck89.id
    console.log(membId89)

    return membId89 
  };
   
  }
  
      memberSelectWorkspace89().catch(error=>{
          console.log("error")
          console.log(error)
        })}




        
function memberSelect90 () {

  async function memberSelectWorkspace90(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg90}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data90 = await response.json()

 const  datacheck90 = data90.find( ({ fullName }) => fullName === emailValue );


  if (datacheck90) {

    membId90 = datacheck90.id
    console.log(membId90)

    return membId90 
  };
   
  }
  
      memberSelectWorkspace90().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect91 () {

  async function memberSelectWorkspace91(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg91}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data91 = await response.json()

 const  datacheck91 = data91.find( ({ fullName }) => fullName === emailValue );


  if (datacheck91) {

    membId91 = datacheck91.id
    console.log(membId91)

    return membId91 
  };
   
  }
  
      memberSelectWorkspace91().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect92 () {

  async function memberSelectWorkspace92(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg92}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data92 = await response.json()

 const  datacheck92 = data92.find( ({ fullName }) => fullName === emailValue );


  if (datacheck92) {

    membId92 = datacheck92.id
    console.log(membId92)

    return membId92 
  };
   
  }
  
      memberSelectWorkspace92().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect93 () {

  async function memberSelectWorkspace93(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg93}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data93 = await response.json()

 const  datacheck93 = data93.find( ({ fullName }) => fullName === emailValue );


  if (datacheck93) {

    membId93 = datacheck93.id
    console.log(membId93)

    return membId93 
  };
   
  }
  
      memberSelectWorkspace93().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect94 () {

  async function memberSelectWorkspace94(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg94}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data94 = await response.json()

 const  datacheck94 = data94.find( ({ fullName }) => fullName === emailValue );


  if (datacheck94) {

    membId94 = datacheck94.id
    console.log(membId94)

    return membId94 
  };
   
  }
  
      memberSelectWorkspace94().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect95 () {

  async function memberSelectWorkspace95(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg95}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data95 = await response.json()

 const  datacheck95 = data95.find( ({ fullName }) => fullName === emailValue );


  if (datacheck95) {

    membId95 = datacheck95.id
    console.log(membId95)

    return membId95 
  };
   
  }
  
      memberSelectWorkspace95().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect96 () {

  async function memberSelectWorkspace96(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg96}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data96 = await response.json()

 const  datacheck96 = data96.find( ({ fullName }) => fullName === emailValue );


  if (datacheck96) {

    membId96 = datacheck96.id
    console.log(membId96)

    return membId96 
  };
   
  }
  
      memberSelectWorkspace96().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect97 () {

  async function memberSelectWorkspace97(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg97}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data97 = await response.json()

 const  datacheck97 = data97.find( ({ fullName }) => fullName === emailValue );


  if (datacheck97) {

    membId97 = datacheck97.id
    console.log(membId97)

    return membId97 
  };
   
  }
  
      memberSelectWorkspace97().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        
function memberSelect98 () {

  async function memberSelectWorkspace98(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg98}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data98 = await response.json()

 const  datacheck98 = data98.find( ({ fullName }) => fullName === emailValue );


  if (datacheck98) {

    membId98 = datacheck98.id
    console.log(membId98)

    return membId98 
  };
   
  }
  
      memberSelectWorkspace98().catch(error=>{
          console.log("error")
          console.log(error)
        })}

        
function memberSelect99 () {

  async function memberSelectWorkspace99(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg99}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data99 = await response.json()

 const  datacheck99 = data99.find( ({ fullName }) => fullName === emailValue );


  if (datacheck99) {

    membId99 = datacheck99.id
    console.log(membId99)

    return membId99 
  };
   
  }
  
      memberSelectWorkspace99().catch(error=>{
          console.log("error")
          console.log(error)
        })};


function memberSelect100 () {

  async function memberSelectWorkspace100(){

    const response = await fetch(`https://api.trello.com/1/organizations/${nameOrg100}/members?&key=${apiKey}&token=${apiToken}`,
     {
      method: 'GET'
     
     }
    )
       
    const data100 = await response.json()

 const  datacheck100 = data100.find( ({ fullName }) => fullName === emailValue );


  if (datacheck100) {

    membId100 = datacheck100.id
    console.log(membId100)

    return membId100 
  };
   
  }
  
      memberSelectWorkspace100().catch(error=>{
          console.log("error")
          console.log(error)
        })}


        