function DownloadLocalStorage() {
   const saveData = (function () {
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      return function (data, fileName) {
         var json = JSON.stringify(data),
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
         a.href = url;
         a.download = fileName;
         a.click();
         window.URL.revokeObjectURL(url);
      };
   })();

   let content = [];
   Object.keys(localStorage).forEach((key) => {
      if (key.length === 28) {
         content = [...content, [key, localStorage.getItem(key)]];
      }
   });

   var filename = "crypto-keys.txt";

   var blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
   });
   console.log(blob);
   saveData(content, filename);
}

export default DownloadLocalStorage;
