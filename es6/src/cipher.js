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
    var num = this.int;
    var arr = str.split("");
    
    var alf = "abcdefghijklmnopqrstuvwxyz";
    
    function Encrypter (element, index, array){
    var place = alf.indexOf(element); 
      if (place != -1) {
        place += num;
        if (place > alf.length){
          place -= 26
        }
         var newChar = alf.charAt(place);
         array[index] = newChar;
      }
    }
    
    arr.forEach(Encrypter);
    str = arr.join('');
    return str;
  }
  
  decrypt(str){
    super.decrypt(str);
    var num = this.int;
    var arr = str.split("");
    
    var alf = "wxyzabcdefghijklmnopqrstuvwxyz";
    
    function Decrypter (element, index, array){
    var place = alf.lastIndexOf(element); 
      if (place != -1) {
         place -= num;
         var newChar = alf.charAt(place);
         array[index] = newChar;
      }
    }
    
    arr.forEach(Decrypter);
    str = arr.join('');
    return str;
  }
}

