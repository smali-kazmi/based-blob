const { toBlob } = require('../dist/index');

test('toBlob converts base64 to Blob with correct size and type', () => {
    const base64 = 'aGVsbG8='; // "hello"
    const blob = toBlob(base64, 'text/plain');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.size).toBe(5);
    expect(blob.type).toBe('text/plain');
});
