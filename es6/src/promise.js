export function sleep(time) {
  return new Promise(function(resolve, reject) {
    var value = time ;
    if (value < 0) {
      reject();
      return;
    }
    resolve();
  });
}

sleep(time).then (function onFullfilled(){
  setTimeout(function(){
     return;
  }, time);
});

  
