//ANONYMOUS FUNCTION
var i;
function a(array){
    for(i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  //IIFE FUNCTION
  (function(array){
    var i;
    for(i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5,6,7,8,9])