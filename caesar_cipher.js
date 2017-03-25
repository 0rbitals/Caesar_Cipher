function rot13(str) {
  var encoded = [];
  var newStr = "";
  var newDigit = 90;
  str = str.toUpperCase();
  for (var i = 0; i < str.length; i++){
    if (str.charCodeAt(i) !== 32 && str.charCodeAt(i) !== 33 && str.charCodeAt(i) !== 63 && str.charCodeAt(i) !== 46){
      if(str.charCodeAt(i) >= 78){
        encoded.push(str.charCodeAt(i) - 13);
      } else{
          for (var j = 77; j > 52; j--){
            if(j === str.charCodeAt(i)){
              encoded.push(newDigit);
              newDigit = 90;
              break;
            }
            newDigit -= 1;
          }
        }
      } else {
        encoded.push(str.charCodeAt(i));
      }
    }
  for (var k = 0; k < encoded.length; k++){
    newStr = newStr + String.fromCharCode(encoded[k]);
  }
  
  return newStr;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
