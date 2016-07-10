export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
  constructor(int){
    super();
    this.int = int;
  }
  
  encrypt(str){
    super.encrypt(str);
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

