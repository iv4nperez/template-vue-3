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

export const encrypt = (object: any) => {
    const encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(object),
        APPLICATION_NAME.KEY_IDM
    );
    return encrypted.toString();
};

export const decrypt = (encrypted: any) => {
    const decrypted = CryptoJS.AES.decrypt(
        encrypted,
        APPLICATION_NAME.KEY_IDM
    ).toString(CryptoJS.enc.Utf8);
    return decrypted;
};
