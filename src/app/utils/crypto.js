import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = import.meta.env.VITE_REACT_APP_ENCRYPTION_KEY;

export function encrypt(message) {
  let iv = CryptoJS.lib.WordArray.random(12 / 8),
    key = CryptoJS.enc.Base64.parse(ENCRYPTION_KEY);
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

 
export function decryptData(encrypted) {
  encrypted = Buffer.from(encrypted, "base64").toString("utf-8");
  encrypted = JSON.parse(encrypted);



  const iv = CryptoJS.enc.Base64.parse(encrypted.iv);
  const value = encrypted.value;
  const key = CryptoJS.enc.Base64.parse(ENCRYPTION_KEY);

  // Decrypt the value, providing the IV.
  var decrypted = CryptoJS.AES.decrypt(value, key, {
    iv: iv,
  });

  // CryptoJS returns a word array which can be
  // converted to string like this
  decrypted = decrypted.toString(CryptoJS.enc.Utf8);

  console.log(decrypted); // Voilà! Prints "Hello world!"
}
