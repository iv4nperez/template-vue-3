import CryptoJS from "crypto-js";
import { APPLICATION_NAME } from "./constants";

export const encryptedText = (text: string) => {
    const key = CryptoJS.enc.Utf8.parse(APPLICATION_NAME.KEY_IDM);
    const iv = CryptoJS.enc.Utf8.parse(APPLICATION_NAME.KEY_IDM);
    const message = CryptoJS.enc.Utf8.parse(text);
    const encrypted = CryptoJS.AES.encrypt(message, key, {
        keySize: 16,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
};
