/**
 * Converts a blob to a base64 data url string.
 * @param blob - The blob to convert
 * @returns A promise that resolves to the base64 string
 */
export function toBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert blob to base64'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Error reading blob'));
    };
    reader.readAsDataURL(blob);
  });
}
