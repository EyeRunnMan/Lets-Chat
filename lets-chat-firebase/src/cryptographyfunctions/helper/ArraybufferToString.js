export default function ab2str(buf) {
   var byteArray = new Uint8Array(buf);
   var byteString = "";
   for (var i = 0; i < byteArray.byteLength; i++) {
      byteString += String.fromCodePoint(byteArray[i]);
   }
   return byteString;
}
