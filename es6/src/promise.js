export function sleep(time) {
  return new Promise(function(resolve, reject) {
    if (time < 0) {
      reject();
      return;
    }
    resolve(time);
  });
}

sleep(time).then (function onFullfilled(){
  setTimeout(function(){
     return;
  }, time);
});

  
