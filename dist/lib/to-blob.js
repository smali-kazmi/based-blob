"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBlob = toBlob;
/**
 * Convert base64 data url string to blob.
 * @param base64 - The base64 data string to convert
 * @param contentType - Used in Blob constructor (optional)
 * @returns The blob built from the base64 string
 */
function toBlob(base64, contentType = '') {
    const sliceSize = 1024;
    const byteCharacters = atob(base64);
    const slicesCount = Math.ceil(byteCharacters.length / sliceSize);
    const byteArrays = [];
    for (let sliceIndex = 0; sliceIndex < slicesCount; sliceIndex++) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, byteCharacters.length);
        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; i++, offset++) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays.push(new Uint8Array(bytes));
    }
    return new Blob(byteArrays, { type: contentType });
}
//# sourceMappingURL=to-blob.js.map