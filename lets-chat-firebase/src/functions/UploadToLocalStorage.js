const UploadToLocalStorage = async (event) => {
   const cryptoKeyData = JSON.parse(await event.target.files[0].text());

   cryptoKeyData.forEach((element) => {
      localStorage.setItem(element[0], element[1]);
   });
};

export default UploadToLocalStorage;
