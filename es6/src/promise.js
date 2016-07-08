export function sleep(time) {
  return new Promise(function(resolve, reject) {
    var value = time ;
    if (value < 0) {
      reject(); 
      return;
    }
    setTimeout(resolve, value);
  });
}


  
