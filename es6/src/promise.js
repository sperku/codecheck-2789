export 	function sleep(time) {
	  return new Promise(function(resolve, reject) {
	    if (time < 0) {
	      reject();
	      return;
	    }
	     setTimeout(function(){
	     resolve(time);
	     return;
	     }, value);
	  });
}


  
