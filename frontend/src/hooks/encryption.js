
import CryptoJS from "crypto-js";
const encryptionKey = "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";
 function decryptAES(encryptedText) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(
      CryptoJS.enc.Utf8
    );
    return decrypted;
  }

  
function encryptAES(text) {
    const encrypted = CryptoJS.AES.encrypt(text, encryptionKey).toString();
    return encrypted;
  }
  
export {encryptAES,decryptAES}