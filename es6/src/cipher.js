export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
  constructor(int){
    super(str);
    super.encrypt(str);
    this.int = int;
     var arr = str.split("");
    
    var alf = "abcdefghijklmnopqrstuvwxyz";
    
    function Encrypter (element, index, array){
    var place = alf.indexOf(element); 
    place += this.int;
    var newChar = alf.charAt(place);
    array[index] = newChar;
    }
    
    arr.forEach(Encrypter);
    var str2 = arr.join('');
    return str2;
    
  }
  
  encrypt(str){
    super(str);
    super.encrypt(str);
    this.int = int;
     var arr = str.split("");
    
    var alf = "abcdefghijklmnopqrstuvwxyz";
    
    function Encrypter (element, index, array){
    var place = alf.indexOf(element); 
    place += this.int;
    var newChar = alf.charAt(place);
    array[index] = newChar;
    }
    
    arr.forEach(Encrypter);
    str = arr.join('');
  }
}

