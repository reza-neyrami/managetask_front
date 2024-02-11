import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = import.meta.env.VITE_REACT_APP_ENCRYPTION_KEY;

function encrypt(message) {
  let iv = CryptoJS.lib.WordArray.random(16),
    key = CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY);
  let options = {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  };
  let encrypted = CryptoJS.AES.encrypt(message, key, options);
  encrypted = encrypted.toString();
  iv = CryptoJS.enc.Base64.stringify(iv);
  let result = {
    iv: iv,
    value: encrypted,
    mac: CryptoJS.HmacSHA256(iv + encrypted, ENCRYPTION_KEY).toString(),
  };
  result = JSON.stringify(result);
  result = CryptoJS.enc.Utf8.parse(result);
  return CryptoJS.enc.Base64.stringify(result);
}

export  function decryptData(encrypted) {

  if (encrypted) {
     encrypted =  CryptoJS.enc.Base64.parse(encrypted);
    let jsonData =  encrypted.toString(CryptoJS.enc.Utf8);
    encrypted =  JSON.parse(jsonData);
    // console.log('Laravel encryption result', encrypted);
    const iv =  CryptoJS.enc.Base64.parse(encrypted.iv);
    const value =  encrypted.value;
    const key =  CryptoJS.enc.Base64.parse(ENCRYPTION_KEY);
    var decrypted =  CryptoJS.AES.decrypt(value, key, {
      iv: iv,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  return false;
}






export { encrypt };
