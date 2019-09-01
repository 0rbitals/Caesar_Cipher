function rot13(str) {
  var encoded = [];
  var newStr = "";
  str = str.toUpperCase();
  for (var i = 0; i < str.length; i++){
    if (str.charCodeAt(i) !== 32 && str.charCodeAt(i) !== 33 && str.charCodeAt(i) !== 63 && str.charCodeAt(i) !== 46){
      if(str.charCodeAt(i) >= 78){
        encoded.push(str.charCodeAt(i) - 13);
      } else if(str.charCodeAt(i) >= 65){
        encoded.push(str.charCodeAt(i) + 13);
      } else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
            encoded.push(str.charCodeAt(i) - 13);
          }
        else {
          encoded.push(str.charCodeAt(i) + 13)
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
rot13("GU& DH$PX OEBJA Q#T WHZC&Q BIRE GUR Y'ML S#K.");
