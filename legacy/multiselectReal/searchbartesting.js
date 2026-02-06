//serach functionality//

function getReceipes() {
    return document.getElementsByClassName('item');

  }
  
  function randomDiv() {
    var receipes = getReceipes();

  
    return receipes[Math.floor(Math.random() * receipes.length)];
  }
    
  // randomDiv().style.display="inline-block";
  
  document.getElementById('search').addEventListener('keyup', function(e) {
    var searchText1 = this.value;
    let searchText = searchText1.replace(/\s/g, '').toLowerCase();
    console.log(searchText)
  
    Array.from(getReceipes()).forEach(function(recipe) {
      if (searchText.length === 0) {
         recipe.style.display = 'block';
      } else {
        var nameElement = recipe.getElementsByTagName('label')[0];

      
        if (nameElement && nameElement.innerText.replace(/\s/g, '').toLowerCase().indexOf(searchText) > -1) {
          recipe.style.display = 'block';

          

        } else {
          recipe.style.display = 'none';

        }
      }
    });

  });


//first loading progressbar//
  var counter=0;
  function moveBy10(x){
  
    var width =10;
    var bar = document.getElementById('bar');
    counter++;
    if(counter*x < 101){
      bar.style.width = counter*x +'%';
    }
  }
  
  setInterval(() => {
      moveBy10(10)
  }, 300);