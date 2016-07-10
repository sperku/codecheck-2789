export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
  constructor(int){
    this.int = int;
    
    var arr[] = str.split("");
    
    var alf = "abcdefghijklmnopqrstuvwxyz";
    
    function Encrypter (element, index, array){
    var place = alf.indexOf(element); 
    place += this.int;
    var newChar = alf.charAt(place);
    array[index] = newChar;
    }
    
    arr.forEach(Encrypter);
    return;
  }
}

